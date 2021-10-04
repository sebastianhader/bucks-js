    import stringType = require('./string')

    /**
     * Checks if value is string.
     * @param value
     * @return {boolean}
     */
    export const is = (value: any): value is string => {
        return !!(typeof value === 'string' || value instanceof String)
    }


    /**
     * Checks if value is numeric.
     * @param value
     * @return {boolean}
     */
    export const isNumeric = (value: string): boolean => {
        // @ts-ignore
        return !isNaN(value) && !isNaN(parseFloat(value))
    }


    /**
     * Checks if value is valid mail.
     * @param value
     * @return {boolean}
     */
    export const isMail = (value: string): boolean => {
        let expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return expression.test(String(value).toLowerCase())
    }


    /**
     * Checks if value is valid url.
     * @param value
     * @return {boolean}
     */
    export const isUrl = (value: string): boolean => {
        let expression = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
        return expression.test(String(value).toLowerCase())
    }


    /**
     * Checks if value is valid url.
     * @param url
     * @return {boolean}
     */
    export const isImageUrl = (url: string): boolean => {
        if (stringType.is(url)) {
            return (url.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) != null)
        } else {
            return false
        }
    }


    /**
     * Checks if value is valid phone number.
     * @param value
     * @return {boolean}
     */
    export const isPhone = (value: string): boolean => {
        let expression = /^(\(?\+\d+\)?[\s.-]?)?\(?\d+\)?[\s.-]?\d+[\s.-]?\d+$/
        return expression.test(String(value).toLowerCase())
    }


    /**
     * Generates a random string.
     * @param length
     * @param numbers
     * @returns string
     */
    export const random = (length: number = 10, numbers: boolean = true): string => {
        let text = ''
        let possible = (numbers === true) ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    }


    /**
     * Converts a camelCase string to Space Case.
     * @param word
     * @returns string
     */
    export const camelCaseToSpaceCase = (word: string): string => {
        return word.replace(/([A-Z])/g, ' $1')
            .replace(/^./, function(str) {
                return str.toUpperCase()
            }).trim()
    }


    /**
     * Converts a camelCase string to dash-case.
     * @param word
     * @returns string
     */
    export const camelCaseToDashCase = (word: string): string => {
        let newWord = word.replace(/^\w/, c => c.toLowerCase())
        return newWord.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
    }


    /**
     * Converts snake_case to Space Case.
     * @param word
     */
    export const snakeCaseToSpaceCase = (word: string): string => {
        const sentence = word.toLowerCase().split('_')
        for (let i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
        }
        return sentence.join(' ')
    }


    /**
     * Converts snake_case to camelCase.
     * @param word
     */
    export const snakeCaseToCamelCase = (word: string): string => {
        const upperCamelCase = word.replace(/([-_]\w)/g, g => g[1].toUpperCase())
        return upperCamelCase.charAt(0).toLowerCase() + upperCamelCase.slice(1)
    }


    /**
     * Puts Space Case string into a camelCase string.
     * @param str
     */
    export const spaceCaseToCamelCase = (str: string): string => {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) return "" // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase()
        })
    }


    /**
     * Converts a string to a capitalized string.
     * @param string
     * @returns string
     */
    export const capitalize = (string: string): string => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    /**
     * Checks if string includes one of the words in array words.
     * @TODO Add option contains all strings maybe.
     * @param string
     * @param array
     * @param caseSensitive
     */
    export const contains = (string: string, array: string[], caseSensitive: boolean = true): boolean => {
        let elementFound: boolean = false
        array.forEach((element: string) => {
            if (indexOf(string, element, 0, caseSensitive) > -1) elementFound = true
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
    export const indexOf = (string: string, search: string, start: number = 0, caseSensitive: boolean = true) => {
        if (caseSensitive === false) {
            string = string.toLowerCase()
            search = search.toLowerCase()
        }
        return string.indexOf(search, start)
    }


    /**
     * Removes all spaces from a string.
     * @param string
     * @returns string
     */
    export const removeSpaces = (string: string): string => {
        return string.replace(/\s/g, '')
    }
