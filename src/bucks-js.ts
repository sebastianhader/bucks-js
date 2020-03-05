
    export import int = require('./int')
    export import string = require('./string')
    export import object = require('./object')
    export import array = require('./array')


    /**
     * Clones object without reference.
     * @param o
     * @return {*|{}}
     */
    export const clone = (o : any) => {
        return JSON.parse(JSON.stringify(o))
    }


    /**
     * Checks if code is running on client or server side.
     * @return {*|{}}
     */
    export const isClient = () => {
        return typeof window !== "undefined"
    }


    /**
     * Calculates the distance between two coordinates in km.
     * @param lng1
     * @param lat1
     * @param lng2
     * @param lat2
     * @return {*}
     */
    export const distanceBetweenCoordinates = (lng1 : number, lat1 : number, lng2 : number, lat2 : number) => {
        let R = 6371 // km (change this constant to get miles)
        let dLat = (lat2 - lat1) * Math.PI / 180
        let dLon = (lng2 - lng1) * Math.PI / 180
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        return R * c
    }


    /**
     * Builds url query parameter (uri encoded) for object and removes empty keys.
     * @param o
     */
    export const urlQueryParam = (o : {[key:string]:any}) : string => {
        // @ts-ignore
        let arrayBucksJs = require("./array")
        let query = ''

        Object.keys(o).forEach((key : string) => {
            if (arrayBucksJs.is(o[key])) {
                // if value is an array
                o[key].forEach((arrayValue : any) => {
                    if (arrayValue) query += '&' + key + '[]=' + encodeURIComponent(arrayValue)
                })
            } else {
                // if value not an array
                if (o[key]) query += '&' + key + '=' + encodeURIComponent(o[key])
            }
        })

        // remove first "&" sign
        if (query.length > 0) query = query.substr(1)

        // add question mark at the beginning
        return '?' + query
    }


    /**
     * Debounce function for given milli seconds.
     * @param func
     * @param wait
     * @param immediate
     * @return {Function}
     */
    export const debounce = (func : any, wait : number, immediate : any) => {
        let timeout : any
        return function () {
            let context = this, args = arguments
            let later = function () {
                timeout = null
                if (!immediate) func.apply(context, args)
            }
            let callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }


    /**
     * Copies input or text area value to clipboard.
     * Element is here a dom tree element (document.getElementById)
     * @param element
     */
    export const toClipboardFromElement = (element : any) => {
        try {
            element.select()
            let successful = document.execCommand('copy')
            return !!successful
        } catch (err) {
            return false
        }
    }


    /**
     * Copies area value to the clipboard.
     * @param text
     */
    export const toClipboard = (text : string) => {
        if (typeof window === 'undefined') return false

        let textArea = document.createElement('textarea')
        textArea.style.position = 'fixed'
        textArea.style.top = '0'
        textArea.style.left = '0'
        textArea.style.width = '2em'
        textArea.style.height = '2em'
        textArea.style.padding = '0'
        textArea.style.border = 'none'
        textArea.style.outline = 'none'
        textArea.style.boxShadow = 'none'
        textArea.style.background = 'transparent'

        textArea.value = text // set Value

        document.body.appendChild(textArea)
        let success = toClipboardFromElement(textArea)
        document.body.removeChild(textArea)
        return success
    }
