export class Fund {
    
    constructor(
        public name: string,
        public loan: boolean,
        public amount: number,
        public projectId: number
    ) {}
}