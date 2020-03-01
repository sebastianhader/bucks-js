
    /**
     * Checks if value is object.
     * @param value
     * @return {boolean}
     */
    export const is = (value : any) : value is object => {
        return !!(typeof value === 'object' && value !== null)
    }


    /**
     * Assigns multiple objects to one object.
     * @param args
     * @return {*|{}}
     */
    export const assign = (...args) => {
        return args.reduce(function (r, o) {
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
    export const filter = (o) => {
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
    export const empty = (o) => {
        return !!(Object.keys(o).length === 0 && o.constructor === Object)
    }


    /**
     * Gets key paths from objects. Path example {key}.{key}.
     * @param object
     * @param path
     * @param defaultValue
     * @return mixed
     */
    export const get = (object, path, defaultValue) => {
        let result = undefined
        let keys = (path && path !== '') ? path.split('.') : []
        if (object !== null && keys.length > 0) {
            result = object
            for (let key of keys) {
                result = (result && result[key] !== undefined && result[key] !== null) ? result[key] : undefined
            }
        }
        return result === undefined ? defaultValue : result
    }