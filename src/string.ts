
    /**
     * Checks if value is string.
     * @param value
     * @return {boolean}
     */
    export const is = (value) => {
        return !!(typeof value === 'string' || value instanceof String)
    }


    /**
     * Checks if value is valid mail.
     * @param value
     * @return {boolean}
     */
    export const isMail = (value) => {
        let expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return expression.test(String(value).toLowerCase())
    }


    /**
     * Checks if value is valid url.
     * @param value
     * @return {boolean}
     */
    export const isUrl = (value) => {
        let expression = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
        return expression.test(String(value).toLowerCase())
    }


    /**
     * Generates a random string.
     * @param length
     * @returns string.ts
     */
    export const random = (length = 10) => {
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
     * @returns string.ts
     */
    export const camelCaseToSpaceCase = (word) => {
        if (word && this.is(word)) {
            return word.replace(/([A-Z])/g, ' $1')
                .replace(/^./, function(str) {
                    return str.toUpperCase()
                })
        }
    }


    /**
     * Converts a camel case string to a string with dashes.
     * @param word
     * @returns string.ts
     */
    export const camelCaseToDashCase = (word) => {
        if (word && this.is(word)) {
            let newWord = word.replace(/^\w/, c => c.toLowerCase())
            return newWord.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
        }
    }


    /**
     * Converts a camel case string to a string with dashes.
     * @param word
     * @param upper
     * @returns string.ts
     */
    export const spaceCaseToCamelCase = (word, upper = false) => {
        if (word && this.is(word)) {
            let newWord = word.replace(/\-[a-zA-Z]/g, m => m.slice(1).toUpperCase())
            return upper ? newWord.replace(/^\w/, c => c.toUpperCase()) : newWord
        }
    }


    /**
     * Converts a string to a capitalized string.
     * @param string
     * @returns string.ts
     */
    export const capitalize = (string) => {
        if (this.is(string)) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    }


    /**
     * Checks if string includes one of the words in array words.
     * @TODO Add option contains all strings maybe.
     * @param string
     * @param array
     * @param caseSensitive
     */
    export const contains = (string, array, caseSensitive = true) => {
        let elementFound = false
        array.forEach((element) => {
            if (this.indexOf(string, element, caseSensitive) > -1) elementFound = true
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
    export const indexOf = (string, search, start = 0, caseSensitive = true) => {
        if (string && this.is(string)) {
            if (caseSensitive === false) {
                string = string.toLowerCase()
                search = search.toLowerCase()
            }
            return string.indexOf(search, start)
        }
    }