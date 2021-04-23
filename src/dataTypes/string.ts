
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
     * Checks if value is valid phone.
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
     * @returns string
     */
    export const random = (length: number = 10): string => {
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
    export const camelCaseToSpaceCase = (word: string): string => {
        return word.replace(/([A-Z])/g, ' $1')
            .replace(/^./, function(str) {
                return str.toUpperCase()
            })
    }


    /**
     * Converts a camel case string to a string with dashes.
     * @param word
     * @returns string
     */
    export const camelCaseToDashCase = (word: string): string => {
        let newWord = word.replace(/^\w/, c => c.toLowerCase())
        return newWord.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
    }


    /**
     * Converts a camel case string to a string with dashes.
     * @param word
     * @param upper
     * @returns string
     */
    export const spaceCaseToCamelCase = (word: string, upper : boolean = false): string => {
        let newWord = word.toLowerCase().replace(/\-[a-zA-Z]/g, m => m.slice(1).toUpperCase())
        return upper ? newWord.replace(/^\w/, c => c.toUpperCase()) : newWord
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
