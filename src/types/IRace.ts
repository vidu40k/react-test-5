interface IRaceLocation {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

interface IRaceCircuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: IRaceLocation;
}

export interface IRace {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: IRaceCircuit;
    date: string;
    time?: string;
}