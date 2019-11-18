
    /**
     * Checks if value is int.
     * @param value
     * @returns {boolean}
     */
    exports.is = (value) => {
        return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10))
    }


    /**
     * Generates a random int.
     * @param max
     * @return {number}
     */
    exports.random = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }