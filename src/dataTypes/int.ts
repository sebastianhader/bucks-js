
    /**
     * Checks if value is int.
     * @param value
     * @returns {boolean}
     */
    export const is = (value: any): value is number => {
        return !isNaN(value) && parseInt(String(Number(value))) == value && !isNaN(parseInt(value, 10))
    }


    /**
     * Generates a random int.
     * @param min
     * @param max
     * @return {number}
     */
    export const random = (min?: number, max?: number): number => {
        if (min && max) {
            min = Math.ceil(min)
            max = Math.floor(max + 1)
            // min and max set
            return Math.floor(Math.random() * Math.floor(max - min)) + min
        } else if (min && !max) {
            // only min is set
            return Math.floor(Math.random() * Math.floor(max)) + Math.ceil(min)
        } else if (!min && max) {
            max = Math.floor(max + 1)
            // only max is set
            return Math.floor(Math.random() * Math.floor(max))
        } else {
            max = 100000
            return Math.floor(Math.random() * max)
        }
    }