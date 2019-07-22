import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {coordonnees, environment, informationsConseiller} from 'mockData';
import {IndividuService} from './individu.service';

describe('IndividuService', () => {
	let httpMock: HttpTestingController;
	let individuService: IndividuService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule, HttpClientTestingModule],
			providers: [IndividuService]
		});
	});

	beforeEach(
		inject([HttpClient, HttpTestingController], (http: HttpClient, httpCtrl: HttpTestingController) => {
			individuService = new IndividuService(http, environment);
			httpMock = httpCtrl;
		})
	);

	it('devrait récupérer les coordonnées utilisateur', () => {
		const expectedUri = `${environment.rest.ex002.individu}`;

		let result;

		individuService.getCoordonneesIndividu().subscribe(data => (result = data));

		httpMock.expectOne(expectedUri).flush(coordonnees);

		expect(result).toEqual(coordonnees);
	});

	it('devrait récupérer le code Saphir d un DE', () => {
		const expectedUri = `${environment.rest.ex002.conseiller}`;

		let result;

		individuService.getCodeSaphir().subscribe(data => (result = data));

		httpMock.expectOne(expectedUri).flush(informationsConseiller);

		expect(result).toEqual(informationsConseiller);
	});
});
