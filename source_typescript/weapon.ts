/// <reference path="parameter.ts" />

module ZWSim {
	export class Weapon {
		now: Parameter;
		max: Parameter;
		nexus: Parameter;
		zw: Parameter;

		data: any;

		constructor(){
			this.now = new Parameter();
			this.max = new Parameter();
			this.nexus = new Parameter();
			this.zw = new Parameter();
		}

		set( json ){
			this.max.acc = json.novus.acc;
			this.max.cri = json.novus.cri;
			this.max.deter = json.novus.deter;
			this.max.parry = json.novus.parry;
			this.max.pie = json.novus.pie;
			this.max.skill = json.novus.skill;
			this.max.spell = json.novus.spell;

			this.now.reset();
			this.nexus.reset();
			this.zw.reset();

			this.data = json;
		}

		compute(){

			this.nexus.acc = Math.floor( (this.data.nexus.acc-this.data.novus.acc) * (this.now.acc/this.max.acc) );
			this.nexus.cri = Math.floor( (this.data.nexus.cri-this.data.novus.cri) * (this.now.cri/this.max.cri) );
			this.nexus.deter = Math.floor( (this.data.nexus.deter-this.data.novus.deter) * (this.now.deter/this.max.deter) );
			this.nexus.parry = Math.floor( (this.data.nexus.parry-this.data.novus.parry) * (this.now.parry/this.max.parry) );
			this.nexus.skill = Math.floor( (this.data.nexus.skill-this.data.novus.skill) * (this.now.skill/this.max.skill) );
			this.nexus.spell = Math.floor( (this.data.nexus.spell-this.data.novus.spell) * (this.now.spell/this.max.spell) );
			this.nexus.pie = Math.floor( (this.data.nexus.pie-this.data.novus.pie) * (this.now.pie/this.max.pie) );

			this.zw.acc = Math.floor( (this.data.zw.acc-this.data.novus.acc) * (this.now.acc/this.max.acc) );
			this.zw.cri = Math.floor( (this.data.zw.cri-this.data.novus.cri) * (this.now.cri/this.max.cri) );
			this.zw.deter = Math.floor( (this.data.zw.deter-this.data.novus.deter) * (this.now.deter/this.max.deter) );
			this.zw.parry = Math.floor( (this.data.zw.parry-this.data.novus.parry) * (this.now.parry/this.max.parry) );
			this.zw.skill = Math.floor( (this.data.zw.skill-this.data.novus.skill) * (this.now.skill/this.max.skill) );
			this.zw.spell = Math.floor( (this.data.zw.spell-this.data.novus.spell) * (this.now.spell/this.max.spell) );
			this.zw.pie = Math.floor( (this.data.zw.pie-this.data.novus.pie) * (this.now.pie/this.max.pie) );
		}
	}
}
