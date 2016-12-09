export class Expenditure {
    
    constructor(
        public date: string,
        public company: string,
        public cost: number,
        public fundId: number,
        public categoryId: number,
        public itemId: number,
        public projectId: number
    ) {}
}