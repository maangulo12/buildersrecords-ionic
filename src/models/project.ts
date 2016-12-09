export class Project {
    
    constructor(
        public name: string,
        public address: string,
        public city: string,
        public state: string,
        public zipcode: string,
        public homeSq: number,
        public projectType: string,
        public userId: number
    ) {}
}