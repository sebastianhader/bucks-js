
    /**
     * Calculates the distance between two coordinates in km.
     * @param lng1
     * @param lat1
     * @param lng2
     * @param lat2
     * @return {*}
     */
    export const distanceBetweenCoordinates = (lng1: number, lat1: number, lng2: number, lat2: number) => {
        let R = 6371 // km (change this constant to get miles)
        let dLat = (lat2 - lat1) * Math.PI / 180
        let dLon = (lng2 - lng1) * Math.PI / 180
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        return R * c
    }