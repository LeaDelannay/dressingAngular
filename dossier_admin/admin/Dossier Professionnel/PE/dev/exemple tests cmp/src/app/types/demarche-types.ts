import {demarches} from 'mockData';

export interface IDemarche {
	type: string;
	etat: ICodeLibelle;
	debut?: string;
	fin?: string;
	id: string;
	pourquoi: ICodeLibelle;
	quoi: ICodeLibelle;
	comment?: ICodeLibelle;
	dateCreation: string;
	dateTimeline: string;
	echeanceDepassee: boolean;
	libelleCourt: string;
	libelleLong: string;
	origineCreateur: string;
	origineDemarche: string;
	origineModificateur?: string;
	attributs?: IAttributs[];
}

export interface ICodeLibelle {
	code: string;
	libelle: string;
}

export interface IAttributs {
	libelle: string;
	type: string;
}

export class Timeline {
	jours: JourTimeline[] = [];

	constructor(demarches: IDemarche[]) {
		//Extrait les jours
		let datesDemarches: number[] = [];
		let demarcheAujourdHui = false;
		for (const demarche of demarches) {
			const dateDemarche: Date = new Date(demarche.dateTimeline);
			const indexDate = datesDemarches.indexOf(dateDemarche.getTime());
			if (indexDate < 0) {
				datesDemarches.push(dateDemarche.getTime());
				const jourTimeline: JourTimeline = new JourTimeline(dateDemarche);
				jourTimeline.addDemarche(demarche);
				this.jours.push(jourTimeline);
				if (jourTimeline.isAujourdhui()) {
					demarcheAujourdHui = true;
				}
			} else {
				const jourTimeline: JourTimeline = this.jours[indexDate];
				jourTimeline.addDemarche(demarche);
			}
		}
		//contient aujourd'hui
		if (!demarcheAujourdHui) {
			let aujourdhui = new Date();
			aujourdhui.setHours(0, 0, 0, 0);
			const jourTimeline: JourTimeline = new JourTimeline(aujourdhui);
			this.jours.push(jourTimeline);
		}
	}
}

export class JourTimeline {
	date: Date;
	demarches: IDemarche[] = [];

	constructor(date: Date) {
		this.date = date;
	}

	addDemarche(demarche: IDemarche): void {
		this.demarches.push(demarche);
	}

	isFutur(): boolean {
		return JourTimeline.comparerJour(this.date, new Date()) > 0;
	}

	isAujourdhui(): boolean {
		if (JourTimeline.comparerJour(this.date, new Date()) === 0) {
			return true;
		}
	}

	hasEcheanceDepasse(): boolean {
		let echeanceDepassee = false;

		for (const demarche of this.demarches) {
			echeanceDepassee = echeanceDepassee || demarche.echeanceDepassee;
		}
		return echeanceDepassee;
	}

	isPasse(): boolean {
		return JourTimeline.comparerJour(this.date, new Date()) < 0;
	}

	private static comparerJour(date1: Date, date2: Date): number {
		if (date1 && date2) {
			date1.setHours(0, 0, 0, 0);
			date2.setHours(0, 0, 0, 0);
			return date1.getTime() - date2.getTime();
		}
		return -1;
	}
}
