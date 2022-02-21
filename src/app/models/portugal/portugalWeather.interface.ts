export interface portugalWeather {
    coord: {
        lat: number,
        lon: number,
    }
    weather: [{
        description: string,
        main: string,
        id: number
    }]
}