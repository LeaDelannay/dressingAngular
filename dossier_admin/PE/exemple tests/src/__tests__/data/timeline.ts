import {IDemarche} from '../../app/types/demarche-types';

export const demarches: IDemarche[] = [
	{
		type: 'demarcheTimelineSimpleOut',
		etat: {
			code: 'RE',
			libelle: 'Réalisé'
		},
		debut: '2019-05-09T09:23:00+02:00',
		fin: '2020-05-08T09:23:00+02:00',
		id: '46222',
		pourquoi: {
			code: 'P03',
			libelle: 'Mes candidatures'
		},
		quoi: {
			code: 'Q12',
			libelle: "Rechercher des offres d'emploi ou des entreprises"
		},
		comment: {
			code: 'C12.02',
			libelle: 'Sur internet'
		},
		dateCreation: '2019-05-09T09:23:00+02:00',
		dateTimeline: '2019-06-26T00:00:00+02:00',
		echeanceDepassee: false,
		libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
		libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
		origineCreateur: 'INDIVIDU',
		origineDemarche: 'RECHERCHE_ENREGISTREE'
	},
	{
		type: 'demarcheTimelineSimpleOut',
		etat: {
			code: 'RE',
			libelle: 'Réalisé'
		},
		debut: '2019-06-12T17:56:00+02:00',
		fin: '2019-06-12T17:56:00+02:00',
		id: '528322',
		pourquoi: {
			code: 'P03',
			libelle: 'Mes candidatures'
		},
		quoi: {
			code: 'Q12',
			libelle: "Rechercher des offres d'emploi ou des entreprises"
		},
		comment: {
			code: 'C12.02',
			libelle: 'Sur internet'
		},
		dateCreation: '2019-06-12T17:56:00+02:00',
		dateTimeline: '2019-06-12T00:00:00+02:00',
		echeanceDepassee: false,
		libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
		libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
		origineCreateur: 'INDIVIDU',
		origineDemarche: 'RECHERCHE_ENREGISTREE'
	}
];

export const demarcheJREConseillerEnCours: IDemarche = {
  type: 'demarcheTimelineSimpleOut',
  etat: {
    code: 'EC',
    libelle: 'En cours'
  },
  debut: '2019-05-09T09:23:00+02:00',
  fin: '2020-05-08T09:23:00+02:00',
  id: '46222',
  pourquoi: {
    code: 'P01',
    libelle: 'Mes competences'
  },
  quoi: {
    code: 'Q12',
    libelle: "Rechercher des offres d'emploi ou des entreprises"
  },
  comment: {
    code: 'C12.02',
    libelle: 'Sur internet'
  },
  dateCreation: '2019-05-09T09:23:00+02:00',
  dateTimeline: '2019-06-26T00:00:00+02:00',
  echeanceDepassee: false,
  libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
  libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
  origineCreateur: 'INDIVIDU',
  origineDemarche: 'JRE_CONSEILLER'
};

export const demarcheJREConseillerAnnule: IDemarche = {
  type: 'demarcheTimelineSimpleOut',
  etat: {
    code: 'AN',
    libelle: 'Annulé'
  },
  debut: '2019-05-09T09:23:00+02:00',
  fin: '2020-05-08T09:23:00+02:00',
  id: '46222',
  pourquoi: {
    code: 'P02',
    libelle: 'Ma formation'
  },
  quoi: {
    code: 'Q12',
    libelle: "Rechercher des offres d'emploi ou des entreprises"
  },
  comment: {
    code: 'C12.02',
    libelle: 'Sur internet'
  },
  dateCreation: '2019-05-09T09:23:00+02:00',
  dateTimeline: '2019-06-26T00:00:00+02:00',
  echeanceDepassee: false,
  libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
  libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
  origineCreateur: 'INDIVIDU',
  origineDemarche: 'JRE_CONSEILLER'
};

export const demarcheJREConseillerRealise: IDemarche = {
  type: 'demarcheTimelineSimpleOut',
  etat: {
    code: 'RE',
    libelle: 'Réalisé'
  },
  debut: '2019-05-09T09:23:00+02:00',
  fin: '2020-05-08T09:23:00+02:00',
  id: '46222',
  pourquoi: {
    code: 'P03',
    libelle: 'Mes candidatures'
  },
  quoi: {
    code: 'Q12',
    libelle: "Rechercher des offres d'emploi ou des entreprises"
  },
  comment: {
    code: 'C12.02',
    libelle: 'Sur internet'
  },
  dateCreation: '2019-05-09T09:23:00+02:00',
  dateTimeline: '2019-06-26T00:00:00+02:00',
  echeanceDepassee: false,
  libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
  libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
  origineCreateur: 'INDIVIDU',
  origineDemarche: 'JRE_CONSEILLER'
};


export const demarcheJREDEEnCours: IDemarche = {
	type: 'demarcheTimelineSimpleOut',
	etat: {
		code: 'EC',
		libelle: 'En cours'
	},
	debut: '2019-05-09T09:23:00+02:00',
	fin: '2020-05-08T09:23:00+02:00',
	id: '46222',
	pourquoi: {
		code: 'P04',
		libelle: 'Mes entretiens'
	},
	quoi: {
		code: 'Q12',
		libelle: "Rechercher des offres d'emploi ou des entreprises"
	},
	comment: {
		code: 'C12.02',
		libelle: 'Sur internet'
	},
	dateCreation: '2019-05-09T09:23:00+02:00',
	dateTimeline: '2019-06-26T00:00:00+02:00',
	echeanceDepassee: false,
	libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
	libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
	origineCreateur: 'INDIVIDU',
	origineDemarche: 'JRE_DE'
};

export const demarcheJREDERealise: IDemarche = {
  type: 'demarcheTimelineSimpleOut',
  etat: {
    code: 'RE',
    libelle: 'Réalisé'
  },
  debut: '2019-05-09T09:23:00+02:00',
  fin: '2020-05-08T09:23:00+02:00',
  id: '46222',
  pourquoi: {
    code: 'P05',
    libelle: 'Mon entreprise'
  },
  quoi: {
    code: 'Q12',
    libelle: "Rechercher des offres d'emploi ou des entreprises"
  },
  comment: {
    code: 'C12.02',
    libelle: 'Sur internet'
  },
  dateCreation: '2019-05-09T09:23:00+02:00',
  dateTimeline: '2019-06-26T00:00:00+02:00',
  echeanceDepassee: false,
  libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
  libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
  origineCreateur: 'INDIVIDU',
  origineDemarche: 'JRE_DE'
};

export const demarcheJREDEAnnule: IDemarche = {
  type: 'demarcheTimelineSimpleOut',
  etat: {
    code: 'AN',
    libelle: 'Annulé'
  },
  debut: '2019-05-09T09:23:00+02:00',
  fin: '2020-05-08T09:23:00+02:00',
  id: '46222',
  pourquoi: {
    code: 'P03',
    libelle: 'Mes candidatures'
  },
  quoi: {
    code: 'Q12',
    libelle: "Rechercher des offres d'emploi ou des entreprises"
  },
  comment: {
    code: 'C12.02',
    libelle: 'Sur internet'
  },
  dateCreation: '2019-05-09T09:23:00+02:00',
  dateTimeline: '2019-06-26T00:00:00+02:00',
  echeanceDepassee: true,
  libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
  libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
  origineCreateur: 'INDIVIDU',
  origineDemarche: 'JRE_DE'
};

export const demarcheActionRealise: IDemarche = {
	type: 'demarcheTimelineSimpleOut',
	etat: {
		code: 'RE',
		libelle: 'Réalisé'
	},
	debut: '2019-05-09T09:23:00+02:00',
	fin: '2020-05-08T09:23:00+02:00',
	id: '46222',
	pourquoi: {
		code: 'P03',
		libelle: 'Mes candidatures'
	},
	quoi: {
		code: 'Q12',
		libelle: "Rechercher des offres d'emploi ou des entreprises"
	},
	comment: {
		code: 'C12.02',
		libelle: 'Sur internet'
	},
	dateCreation: '2019-05-09T09:23:00+02:00',
	dateTimeline: '2019-06-26T00:00:00+02:00',
	echeanceDepassee: false,
	libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
	libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
	origineCreateur: 'INDIVIDU',
	origineDemarche: 'ACTION'
};

export const demarcheActionAnnule: IDemarche = {
  type: 'demarcheTimelineSimpleOut',
  etat: {
    code: 'AN',
    libelle: 'Annulé'
  },
  debut: '2019-05-09T09:23:00+02:00',
  fin: '2020-05-08T09:23:00+02:00',
  id: '46222',
  pourquoi: {
    code: 'P03',
    libelle: 'Mes candidatures'
  },
  quoi: {
    code: 'Q12',
    libelle: "Rechercher des offres d'emploi ou des entreprises"
  },
  comment: {
    code: 'C12.02',
    libelle: 'Sur internet'
  },
  dateCreation: '2019-05-09T09:23:00+02:00',
  dateTimeline: '2019-06-26T00:00:00+02:00',
  echeanceDepassee: false,
  libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
  libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
  origineCreateur: 'INDIVIDU',
  origineDemarche: 'ACTION'
};

export const demarcheActionEnCours: IDemarche = {
  type: 'demarcheTimelineSimpleOut',
  etat: {
    code: 'EC',
    libelle: 'En cours'
  },
  debut: '2019-05-09T09:23:00+02:00',
  fin: '2020-05-08T09:23:00+02:00',
  id: '46222',
  pourquoi: {
    code: 'P03',
    libelle: 'Mes candidatures'
  },
  quoi: {
    code: 'Q12',
    libelle: "Rechercher des offres d'emploi ou des entreprises"
  },
  comment: {
    code: 'C12.02',
    libelle: 'Sur internet'
  },
  dateCreation: '2019-05-09T09:23:00+02:00',
  dateTimeline: '2019-06-26T00:00:00+02:00',
  echeanceDepassee: false,
  libelleCourt: "Rechercher des offres d'emploi ou des entreprises sur internet",
  libelleLong: "Rechercher des offres d'emploi ou des entreprises sur internet",
  origineCreateur: 'INDIVIDU',
  origineDemarche: 'ACTION'
};
