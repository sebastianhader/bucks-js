
    module.exports.int = require("./int");
    module.exports.string = require("./string");
    module.exports.object = require("./object");
    module.exports.array = require("./array");


    /**
     * Clones object without reference.
     * @param o
     * @return {*|{}}
     */
    exports.clone = (o) => {
        return JSON.parse(JSON.stringify(o))
    }


    /**
     * Checks if code is running on client or server side.
     * @return {*|{}}
     */
    exports.isClient = () => {
        return !!(typeof window !== "undefined")
    }


    /**
     * Calculates the distance between two coordinates in km.
     * @param lng1
     * @param lat1
     * @param lng2
     * @param lat2
     * @return {*}
     */
    exports.distanceBetweenCoordinates = (lng1, lat1, lng2, lat2) => {
        let R = 6371 // km (change this constant to get miles)
        let dLat = (lat2 - lat1) * Math.PI / 180
        let dLon = (lng2 - lng1) * Math.PI / 180
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        return R * c
    }


    /**
     * Builds url query parameter (uri encoded) for object and removes empty keys.
     * @param o
     */
    exports.urlQueryParam = (o) => {
        let query = ''

        Object.keys(o).forEach((key) => {
            if (Array.isArray(o[key])) {
                // if value is an array
                o[key].forEach((arrayValue) => {
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
    exports.debounce = (func, wait, immediate) => {
        let timeout
        return function() {
            let context = this, args = arguments
            let later = function() {
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
    exports.toClipboardFromElement = (element) => {
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
    exports.toClipboard = (text) => {
        if (typeof window === 'undefined') return false

        let textArea = document.createElement('textarea')
        textArea.style.position = 'fixed'
        textArea.style.top = 0
        textArea.style.left = 0
        textArea.style.width = '2em'
        textArea.style.height = '2em'
        textArea.style.padding = 0
        textArea.style.border = 'none'
        textArea.style.outline = 'none'
        textArea.style.boxShadow = 'none'
        textArea.style.background = 'transparent'

        textArea.value = text // set Value

        document.body.appendChild(textArea)
        let success = this.toClipboardFromElement(textArea)
        document.body.removeChild(textArea)
        return success
    }
