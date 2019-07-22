import {HttpClientTestingModule} from '@angular/common/http/testing';
import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {LayoutConfigurationToken, NavigationService} from '@pe-angular-communs/candidat-layout';
import {AppConfigurationToken} from 'app/configuration/app-configuration.token';
import {layoutToken} from 'mockData';
import {of, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AccesUtilisateurService} from './acces-utilisateur.service';
import {IndividuService} from './individu.service';
import {PiloteService} from './pilote.service';

describe('AccesUtilisateurService', () => {
	let accesUtilisateurService: AccesUtilisateurService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				AccesUtilisateurService,
				PiloteService,
				IndividuService,
				NavigationService,
				{provide: AppConfigurationToken, useValue: environment},
				{provide: LayoutConfigurationToken, useValue: layoutToken}
			]
		});
	});

	beforeEach(
		inject([], () => {
			accesUtilisateurService = TestBed.get(AccesUtilisateurService);
		})
	);

	it(
		'should be created',
		inject([AccesUtilisateurService], (service: AccesUtilisateurService) => {
			expect(service).toBeTruthy();
		})
	);

	it(
		'doit retourner le booléen false si candidat',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'C'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {}}));
			spyOn(TestBed.get(IndividuService), 'getCoordonneesIndividu').and.returnValue(of({codePostal: '12345'}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeFalsy();
		})
	);

	it(
		'doit retourner le booléen false si DE et pas de coordonnées ni de codeSaphir',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {}}));
			spyOn(TestBed.get(IndividuService), 'getCoordonneesIndividu').and.returnValue(of({codePostal: ''}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeFalsy();
		})
	);

	it(
		'doit retourner le booléen true si DE et coordonnées car pas de codeSaphir',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {}}));
			spyOn(TestBed.get(IndividuService), 'getCoordonneesIndividu').and.returnValue(of({codePostal: '12345'}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeTruthy();
		})
	);

	it(
		'doit retourner le booléen true si DE et codeSaphir PN118JREDE',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {codeSaphir: '12345'}}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeTruthy();
		})
	);

	it(
		'doit retourner le booléen true si DE et codeSaphir DREusager',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {codeSaphir: '12345'}}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getConseilsPersoAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeTruthy();
		})
	);

	it(
		'doit retourner le booléen false si DE etatPilote fermé',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {codeSaphir: '12345'}}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(false));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeFalsy();
		})
	);

	it(
		'doit retourner le booléen false si le service navigationService est en erreur',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(throwError('erreur navigation'));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {codeSaphir: '12345'}}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeFalsy();
		})
	);

	it(
		'doit retourner le booléen false si le service individuService est en erreur : récupération codeSaphir',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(throwError('erreur individu cs'));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeFalsy();
		})
	);

	it(
		'doit retourner le booléen false si le service individuService est en erreur : récupération adresse postale',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {}}));
			spyOn(TestBed.get(IndividuService), 'getCoordonneesIndividu').and.returnValue(throwError('erreur individu cp'));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(of(true));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeFalsy();
		})
	);

	it(
		'doit retourner le booléen false si le service piloteService est en erreur',
		fakeAsync(() => {
			let result: boolean;
			let estPasseEnRetourDuService: boolean = false;
			spyOn(TestBed.get(NavigationService), 'lire').and.returnValue(of({typo: 'D'}));
			spyOn(TestBed.get(IndividuService), 'getCodeSaphir').and.returnValue(of({agence: {codeSaphir: '12345'}}));
			spyOn(TestBed.get(PiloteService), 'getEtatPilote').and.returnValue(throwError('erreur pilote'));

			accesUtilisateurService.getJREAccessible().subscribe(data => {
				estPasseEnRetourDuService = true;
				result = data;
			});
			tick();
			expect(estPasseEnRetourDuService).toBeTruthy();
			expect(result).toBeFalsy();
		})
	);
});
