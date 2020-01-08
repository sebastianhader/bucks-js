
    /**
     * Checks if value is array.
     * @param value
     * @return {boolean}
     */
    exports.is = (value) => {
        return Array.isArray(value)
    }


    /**
     * Checks if array contains value.
     * @param array
     * @param value
     * @return {boolean}
     */
    exports.includes = (array, value) => {
        return !!(array.indexOf(value) > -1)
    }


    /**
     * Flat two dimensional array to one array.
     * @TODO Add depth function.
     * @param array
     * @param depth
     * @return {*|{}}
     */
    exports.flat = (array, depth = 1) => {
        let newArray = []
        array.forEach((array) => {
            array.forEach((item) => {
                newArray.push(item)
            })
        })
        return newArray
    }


    /**
     * Chunks array in multiple parts.
     * @param array
     * @param length
     * @return {*|{}}
     */
    exports.chunk = (array, length) => {
        let list = require("./bucks-js").clone(array)
        let chunks = []
        while (list.length > 0) {
            let chunk = list.slice(0, length)
            list.splice(0, length)
            chunks.push(chunk)
        }
        return chunks
    }


    /**
     * Removes duplicate elements from array.
     * @param array
     * @return {Array}
     */
    exports.unique = (array) => {
        return array.filter((value, index, self) => {
            return self.indexOf(value) === index
        })
    }


    /**
     * Finds first item in array and removes it from this array.
     * The array will be changed via reference.
     * @param array
     * @param predicate
     * @return {*}
     */
    exports.findAndRemove = (array, predicate) => {
        let index = array.findIndex(predicate)
        if (index > -1) {
            let item = array.find(predicate)
            array.splice(index, 1)
            return item
        } else {
            return undefined
        }
    }


    /**
     * Removes first item in array, that matches predicate.
     * @param array
     * @param predicate
     * @return {*}
     */
    exports.remove = (array, predicate) => {
        let index = array.findIndex(predicate)
        if (index > -1) array.splice(index, 1)
    }