export class NewHires {
	constructor(
		public user_id? : number,
		public collect_date?:string,
		public return_date?:string,
		public status?:number,
		public band?:number,
		public reference?:number,
		public invoice_number?:string,
        public group_id?:string
        
	) {}
}
