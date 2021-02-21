    import stringType = require('./string')
    import objectType = require('./object')
    import arrayType = require('./array')

    /**
    * Checks if value is object.
    * @param value
    * @return {boolean}
    */
    export const is = (value: any): value is object => {
        return !!(typeof value === 'object' && value !== null)
    }


    /**
     * Assigns multiple objects to one object.
     * @param args
     * @return {*|{}}
     */
    export const assign = (...args: any) => {
        return args.reduce(function (r : any, o : any) {
            Object.keys(o).forEach(function (k) {
                r[k] = o[k]
            })
            return r
        }, {})
    }


    /**
     * Removes all keys with value null.
     * @param o
     * @return {*|{}}
     */
    export const filter = (o: any) => {
        let result: any = {}
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
    export const empty = (o: object) => {
        return !!(Object.keys(o).length === 0 && o.constructor === Object)
    }


    /**
     * Splits string into path keys.
     * @param string
     */
    export const toPathKeys = (string: string): any[] => {
        if (stringType.is(string)) {
            let keys: any[] = []
            string.split('.').forEach((item: string) => {
                item.split(/\[([^}]+)\]/g).forEach((key) => {
                    if (key.length > 0) {
                        keys.push(key)
                    }
                })
            })
            return keys
        } else {
            return []
        }
    }


    /**
     * Gets key paths from objects. Path example {key}.{key}[number].
     * @param object
     * @param path
     * @param defaultValue
     * @return mixed
     */
    export const get = (object: any, path: string, defaultValue?: any) => {
        let result = undefined
        let keys = objectType.toPathKeys(path)
        if (object !== null && keys.length > 0) {
            result = object
            for (let key of keys) {
                result = (result && result[key] !== undefined && result[key] !== null) ? result[key] : undefined
            }
        }
        return result === undefined ? defaultValue : result
    }


    /**
     * Sets value for paths on objects. Path example {key}.{key}.
     * @param object
     * @param path
     * @param value
     */
    export const set = (object: any, path: string, value: any) => {
        let keys = objectType.toPathKeys(path)
        let temp = object

        keys.forEach(function (key, index) {
            const isArrayIndex = stringType.isNumeric(key)
            let intIndex = parseInt(key)

            if (index + 1 === keys.length) {

                // FINAL ROUND
                if (isArrayIndex) {
                    if (!arrayType.indexExists(temp, intIndex)) {
                        temp.push(value)
                    } else {
                        temp[intIndex] = value
                    }
                } else {
                    temp[key] = value
                }

            } else {

                // GO / CREATE NEXT LAYER
                if (!isArrayIndex) {
                    const isNextArrayIndex = stringType.isNumeric(keys[index + 1])
                    if (isNextArrayIndex) {
                        if (!temp[key]) { temp[key] = [] }
                        temp = temp[key]
                    } else {
                        if (!temp[key]) { temp[key] = {} }
                        temp = temp[key]
                    }
                } else {
                    if (!arrayType.indexExists(temp, intIndex)) {
                        temp.push({})
                        intIndex = temp.length - 1 // set int index to last position
                    }
                    if (!temp[intIndex]) {
                        temp[intIndex] = {}
                    }
                    temp = temp[intIndex]
                }

            }
        })

        return object
    }