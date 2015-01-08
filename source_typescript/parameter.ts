module ZWSim {
	export class Parameter {
		acc: number;
		cri: number;
		deter: number;
		parry: number;
		pie: number;
		skill: number;
		spell: number;

		constructor(){
			this.reset();
		}

		reset(){
			this.acc=0;
			this.cri=0;
			this.deter=0;
			this.parry=0;
			this.pie=0;
			this.skill=0;
			this.spell=0;
		}
	}
}
