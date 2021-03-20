
    // data types
    export import int = require('./dataTypes/int')
    export import string = require('./dataTypes/string')
    export import object = require('./dataTypes/object')
    export import array = require('./dataTypes/array')

    // specifics
    export import ui = require('./ui')
    export import map = require('./map')


    /**
     * Clones object without reference.
     * @param o
     * @return {*|{}}
     */
    export const clone = (o: any) => {
        return JSON.parse(JSON.stringify(o))
    }


    /**
     * Builds url query parameter (uri encoded) for object and removes empty keys.
     * @param o
     */
    export const urlQueryParam = (o: {[key:string]:any}) : string => {
        // @ts-ignore
        let arrayBucksJs = require("./dataTypes/array")
        let query = ''

        Object.keys(o).forEach((key: string) => {
            if (arrayBucksJs.is(o[key])) {
                // if value is an array
                o[key].forEach((arrayValue: any) => {
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
    export const debounce = (func: any, wait: number, immediate?: any) => {
        let timeout: any
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
     * Waits at the current position in the script.
     * @param time
     */
    export const sleep = (time: number) => {
        return new Promise(resolve => setTimeout(resolve, time))
    }
