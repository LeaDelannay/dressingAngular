import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {environment} from 'mockData';
import {PiloteService} from './pilote.service';

describe('PiloteService', () => {
	let httpMock: HttpTestingController;
	let piloteService: PiloteService;
	const piloteResponse = {
		codeApplication: 'YYY',
		codeService: 'YYY',
		etatFonctionnalite: true,
		libelleService: 'Pilote YYY',
		messageIndisponibilite: 'test'
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule, HttpClientTestingModule],
			providers: [PiloteService]
		});
	});

	beforeEach(
		inject([HttpClient, HttpTestingController], (http: HttpClient, httpCtrl: HttpTestingController) => {
			piloteService = new PiloteService(http, environment);
			httpMock = httpCtrl;
		})
	);

	it("devrait récupérer l'etat du service", () => {
		// Given
		const expectedUri = `${environment.rest.ex040.service}?application=YYY&service=YYY`;
		let result;

		// When
		piloteService.getEtatService('YYY', 'YYY').subscribe(data => (result = data));

		// Then
		httpMock.expectOne(expectedUri).flush(piloteResponse);
		expect(result).toEqual(piloteResponse.etatFonctionnalite);
	});

	it("vérifie l'Uri d'appel du service et récupère l'état du pilote", () => {
		// Given
		const departement = '33';
		const application = 'EPE';
		const service = 'DREUsager';
		const expectedUri =
			`${environment.rest.ex040.pilote}?application=` +
			application +
			`&service=` +
			service +
			`&departement=` +
			departement;
		let result;

		// When
		piloteService.getEtatPilote(departement, application, service).subscribe(data => (result = data));

		// Then
		httpMock.expectOne(expectedUri).flush(piloteResponse);
		expect(result).toEqual(piloteResponse.etatFonctionnalite);
	});

	it("devrait retourner une erreur en cas de problème d'appel", () => {
		// Given
		const expectedUri = `${environment.rest.ex040.service}?application=YYY&service=YYY`;
		const error = {status: 401, statusText: 'FORBIDDEN'};
		let result;

		// When
		piloteService.getEtatService('YYY', 'YYY').subscribe(() => {}, err => (result = err));

		// Then
		httpMock.expectOne(expectedUri).error(new ErrorEvent('401'), error);
		expect(result.status).toEqual(error.status);
		expect(result.statusText).toEqual(error.statusText);
	});

	it("devrait retourner une erreur en cas de problème d'appel", () => {
		// Given

		const expectedUri = `${environment.rest.ex040.pilote}?application=XXX&service=XXX&departement=33`;
		const error = {status: 401, statusText: 'FORBIDDEN'};
		let result;

		// When
		piloteService.getEtatPilote('33', 'XXX', 'XXX').subscribe(() => {}, err => (result = err));

		// Then
		httpMock.expectOne(expectedUri).error(new ErrorEvent('401'), error);
		expect(result.status).toEqual(error.status);
		expect(result.statusText).toEqual(error.statusText);
	});
});
