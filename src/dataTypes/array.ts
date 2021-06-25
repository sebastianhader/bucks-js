    import arrayType = require('./array')


    /**
     * Checks if value is array.
     * @param value
     * @return {boolean}
     */
    export const is = (value: any): value is any[] => {
        return Array.isArray(value)
    }


    /**
     * Checks if array is empty.
     * @param array
     * @return {boolean}
     */
    export const empty = (array: any[]) : boolean => {
        return array.length === 0
    }


    /**
     * Checks if array index exists.
     * @param array
     * @param index
     * @return {boolean}
     */
    export const indexExists = (array: any[], index: number) : boolean => {
        return !(typeof array[index] === 'undefined')
    }


    /**
     * Checks if array contains value.
     * @param array
     * @param value
     * @return {boolean}
     */
    export const includes = (array: any[], value: never) : boolean => {
        return array.indexOf(value) > -1
    }


    /**
     * Flat two dimensional array to one array.
     * @TODO Add depth function.
     * @param array
     * @param depth
     * @return {*|{}}
     */
    export const flat = (array: any[], depth: number = 1) : any[] => {
        let newArray: any[] = []
        array.forEach((array) => {
            array.forEach((item : any) => {
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
    export const chunk = (array: any[], length: number): any[] => {
        let list = JSON.parse(JSON.stringify(array))
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
    export const unique = (array: any[]): any[] => {
        return array.filter((value, index, self) => {
            return self.indexOf(value) === index
        })
    }


    /**
     * Finds item in array for defined predicate.
     * @param array
     * @param predicate
     * @return {*}
     */
    export const find = (array: any[], predicate: any): any|undefined => {
        let result = array.filter(predicate)
        if (arrayType.empty(result) === false) {
            return result[0]
        } else {
            return undefined
        }
    }


    /**
     * Finds item index in array for defined predicate.
     * @param array
     * @param predicate
     * @return {*}
     */
    export const findIndex = (array: any[], predicate: any): number|undefined => {
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                return i
            }
        }
        return undefined
    }


    /**
     * Finds first item in array and removes it from this array.
     * The array will be changed via reference.
     * @param array
     * @param predicate
     * @return {*}
     */
    export const findAndRemove = (array: any[], predicate: never): never|undefined => {
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
    export const remove = (array: any[], predicate: any): void => {
        let index = array.findIndex(predicate)
        if (index > -1) array.splice(index, 1)
    }
