
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
     * Removes duplicate elements from array.
     * @param array
     * @return {Array}
     */
    exports.unique = (array) => {
        return array.filter((value, index, self) => {
            return self.indexOf(value) === index
        })
    }
