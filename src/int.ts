
    /**
     * Checks if value is int.
     * @param value
     * @returns {boolean}
     */
    export const is = (value : any) : value is number => {
        return !isNaN(value) && parseInt(String(Number(value))) == value && !isNaN(parseInt(value, 10))
    }


    /**
     * Generates a random int.
     * @param max
     * @return {number}
     */
    export const random = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }