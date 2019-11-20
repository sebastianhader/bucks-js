
    /**
     * Checks if value is string.
     * @param value
     * @return {boolean}
     */
    exports.is = (value) => {
        return !!(typeof value === 'string' || value instanceof String)
    }


    /**
     * Generates a random string.
     * @param length
     * @returns string
     */
    exports.random = (length = 10) => {
        let text = ''
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    }


    /**
     * Converts a camel case string to a string with spaces
     * and uppercase starting letters.
     * @param word
     * @returns string
     */
    exports.camelCaseToDash = (word) => {
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
     * Checks if string includes one of the words in array words.
     * @TODO Add option contains all strings maybe.
     * @param string
     * @param array
     * @param lowerCase
     */
    exports.contains = (string, array, lowerCase = false) => {
        if (lowerCase) string = string.toLowerCase()
        let elementFound = false
        array.forEach((element) => {
            if (lowerCase) element = element.toLowerCase()
            if (string.indexOf(element) > -1) elementFound = true
        })
        return elementFound
    }


    /**
     * Finds index of search string in string with option for
     * case sensitivity.
     * @param string
     * @param search
     * @param start
     * @param caseSensitive
     * @return {number}
     */
    exports.indexOf = (string, search, start = 0, caseSensitive = true) => {
        if (caseSensitive) {
            string = string.toLowerCase()
            search = string.toLowerCase()
        }
        return string.indexOf(search, start)
    }