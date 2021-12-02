export interface ICars {
    //readonly wheels:number;
    mark:string | number;
    car?:{
        mark:string;
        wheels:number;
    };
    getWindows:() => number
}