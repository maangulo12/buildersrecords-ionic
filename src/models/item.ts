export class Item {
    
    constructor(
        public name: string,
        public description: string,
        public estimated: number,
        public actual: number,
        public categoryId: number,
        public projectId: number
    ) {}
}