
    /**
     * Checks if value is int.
     * @param value
     * @returns {boolean}
     */
    exports.isInt = (value) => {
        return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10))
    }


    /**
     * Checks if value is string.
     * @param value
     * @return {boolean}
     */
    exports.isString = (value) => {
        return !!(typeof value === 'string' || value instanceof String)
    }


    /**
     * Generates a random string.
     * @param length
     * @returns string
     */
    exports.randomString = (length = 10) => {
        let text = ''
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    }


    /**
     * Generates a random int.
     * @param max
     * @return {number}
     */
    exports.randomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }


    /**
     * Copies input or text area value to cache.
     * Element is here a dom tree element (document.getElementById)
     * @param element
     */
    exports.copyToCache = (element) => {
        try {
            element.select()
            let successful = document.execCommand('copy')
            return !!successful
        } catch (err) {
            return false
        }
    }


    /**
     * Copies area value to the users clipboard.
     * @param text
     */
    exports.copyToClipboard = (text) => {
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
        // set Value
        textArea.value = text

        document.body.appendChild(textArea)
        let success = this.copyToCache(textArea)
        document.body.removeChild(textArea)
        return success
    }


    /**
     * Converts a camel case string to a string with spaces
     * and uppercase starting letters.
     * @param word
     * @returns string
     */
    exports.convertCamelCaseToDash = (word) => {
        if (word) {
            return word.replace(/([A-Z])/g, ' $1')
                .replace(/^./, function(str) {
                    return str.toUpperCase()
                })
        }
    }


    /**
     * Converts a string to a capitalized string.
     * @param word
     * @returns string
     */
    exports.capitalize = (word) => {
        if (typeof word !== 'string') return ''
        return word.charAt(0).toUpperCase() + word.slice(1)
    }


    /**
     * Assigns multiple objects to one object.
     * @param args
     * @return {*|{}}
     */
    exports.objectAssign = (...args) => {
        return args.reduce(function (r, o) {
            Object.keys(o).forEach(function (k) {
                r[k] = o[k]
            })
            return r
        }, {})
    }


    /**
     * Filter object (removes all keys with value null).
     * @param o
     * @return {*|{}}
     */
    exports.objectFilter = (o) => {
        let result = {}
        Object.keys(o).forEach(function (k) {
            if (o[k]) result[k] = o[k]
        })
        return result
    }


    /**
     * Checks if given object is empty.
     * @param o
     * @return {*|{}}
     */
    exports.objectEmpty = (o) => {
        return !!(Object.keys(o).length === 0 && o.constructor === Object)
    }


    /**
     * Clones object without reference.
     * @param o
     * @return {*|{}}
     */
    exports.clone = (o) => {
        return JSON.parse(JSON.stringify(o))
    }


    /**
     * Reverts all arrays in a two dimensional array.
     * @param array2D
     * @return {*|{}}
     */
    exports.reverse2DArrays = (array2D) => {
        let new2DArray = []
        array2D.forEach((smallArray) => {
            new2DArray.push(smallArray.reverse())
        })
        return new2DArray
    }


    /**
     * Flat two dimensional array to one array.
     * @param array2D
     * @return {*|{}}
     */
    exports.flat2DArray = (array2D) => {
        let newArray = []
        array2D.forEach((array) => {
            array.forEach((item) => {
                newArray.push(item)
            })
        })
        return newArray
    }


    /**
     * Calculates the distance between two coordinates in km.
     * @param lng1
     * @param lat1
     * @param lng2
     * @param lat2
     * @return {*}
     */
    exports.distanceBetweenTwoCoordinates = (lng1, lat1, lng2, lat2) => {
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
     * Builds url GET query parameter (url encoded) for object and removes
     * empty keys.
     * @param o
     */
    exports.buildUrlQueryParameter = (o) => {
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
        return query
    }


    /**
     * Checks if text includes one of the words in array words.
     * @param text
     * @param words
     * @param lowerCase
     */
    exports.includeStrings = (text, words, lowerCase = false) => {
        if (lowerCase) text = text.toLowerCase()
        let wordFound = false
        words.forEach((word) => {
            if (lowerCase) word = word.toLowerCase()
            if (text.indexOf(word) > -1) wordFound = true
        })
        return wordFound
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
     * Gets key paths from objects. Path example {key}.{key}.
     * @param object
     * @param path
     * @param defaultValue
     * @return mixed
     */
    exports.get = (object, path, defaultValue) => {
        let result = undefined
        let keys = (path && path !== '') ? path.split('.') : []
        if (object !== null && keys.length > 0) {
            result = object
            for (let key of keys) {
                result = (result && result[key]) ? result[key] : undefined
            }
        }
        return result === undefined ? defaultValue : result
    }
