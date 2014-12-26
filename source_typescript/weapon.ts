module ZWSim {
	export class Weapon {
		il: number;
		acc: number;
		cri: number;
		deter: number;
		parry: number;
		pie: number;
		skill: number;
		spell: number;

		max_acc: number;
		max_cri: number;
		max_deter: number;
		max_parry: number;
		max_pie: number;
		max_skill: number;
		max_spell: number;

		link: Weapon;

		constructor(){
			this.acc = 0;
			this.cri = 0;
			this.deter = 0;
			this.parry = 0;
			this.pie = 0;
			this.skill = 0;
			this.spell = 0;

			this.link = undefined;
		}

		set( json ){
			this.il = json.il;
			this.max_acc = json.acc;
			this.max_cri = json.cri;
			this.max_deter = json.deter;
			this.max_parry = json.parry;
			this.max_pie = json.pie;
			this.max_skill = json.skill;
			this.max_spell = json.spell;
		}

		sum(){
			return this.acc + this.cri + this.deter + this.parry + this.pie + this.skill + this.spell;
		}

		link_to( link: Weapon ){
			this.link = link;
		}

		refresh(){
			if( this.link != undefined ){
				this.link.assoc( this );
				this.link.refresh();
			}
		}

		assoc( from:Weapon ){
			this.acc = Math.floor( from.acc * this.max_acc / from.max_acc );
			this.cri = Math.floor( from.cri * this.max_cri / from.max_cri );
			this.deter = Math.floor( from.deter * this.max_deter / from.max_deter );
			this.parry = Math.floor( from.parry * this.max_parry / from.max_parry );
			this.pie = Math.floor( from.pie * this.max_pie / from.max_pie );
			this.skill = Math.floor( from.skill * this.max_skill / from.max_skill );
			this.spell = Math.floor( from.spell * this.max_spell / from.max_spell );

			var _rate: number = this.il / from.il;
			this.acc = Math.floor( from.acc * _rate );
			this.cri = Math.floor( from.cri * _rate );
			this.deter = Math.floor( from.deter * _rate );
			this.parry = Math.floor( from.parry * _rate );
			this.pie = Math.floor( from.pie * _rate );
			this.skill = Math.floor( from.skill * _rate );
			this.spell = Math.floor( from.spell * _rate );
		}
	}
}
