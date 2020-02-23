export class Detail {
    BreedName:BreedName[];
    Type:Type[];
    CityName:CityName[];
}

export class BreedName {
id:number;
breedName:string;
}

export class Type {
    id:number;
    type:string;
}

export interface CityName {
    id:number;
    cityName:string;
}