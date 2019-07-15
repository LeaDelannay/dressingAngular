import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JournalComponent} from './journal.component';
import {EcheancePasseeComponent} from './echeance-passee/echeance-passee.component';
import {TimelineComponent} from './timeline/timeline.component';
import {BsModalRef, BsModalService} from 'pe-ngx-bootstrap';
import {
	BsModalRefMock,
	BsModalServiceMock,
	DemarcheServiceMock,
	IndividuServiceMock,
	ModalDirectiveMock
} from 'mockService';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TmsServiceMock} from '../../__tests__/service';
import {TmsModule, TmsService} from '@pe-angular-communs/tms';
import {DemarcheService} from '../services/services/demarche.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppConfigurationToken} from '../configuration/app-configuration.token';
import {environment} from '../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {ServicesModule} from '../services/services.module';
import {LayoutConfigurationToken, NavigationService} from '@pe-angular-communs/candidat-layout';
import {layoutToken, suggestion} from 'mockData';
import {LoggerService} from '@pe-angular-communs/logger';
import {IndividuService} from '../services/services/individu.service';
import {ModalAideJournalComponent} from './modal-aide-journal/modal-aide-journal.component';
import {of, throwError} from 'rxjs';

describe('JournalComponent', () => {
	let fixture: ComponentFixture<JournalComponent>;
	let journalComponent: JournalComponent;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					HttpClientTestingModule,
					ServicesModule,
					RouterTestingModule.withRoutes([]),
					TmsModule.forRoot(environment.configTms)
				],
				providers: [
					DemarcheService,
					NavigationService,
					{provide: AppConfigurationToken, useValue: environment},
					{provide: LayoutConfigurationToken, useValue: layoutToken},
					{provide: BsModalService, useClass: BsModalServiceMock},
					{provide: BsModalRef, useClass: BsModalRefMock},
					{provide: TmsService, useClass: TmsServiceMock},
					{provide: DemarcheService, useClass: DemarcheServiceMock},
					{provide: IndividuService, useClass: IndividuServiceMock},
					{
						provide: LoggerService,
						useValue: {
							debug: (...message: string[]) => {},
							warn: (...message: string[]) => {},
							info: (...message: string[]) => {}
						}
					}
				],
				declarations: [
					JournalComponent,
					EcheancePasseeComponent,
					TimelineComponent,
					ModalAideJournalComponent,
					ModalDirectiveMock
				],
				schemas: [NO_ERRORS_SCHEMA]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(JournalComponent);
		journalComponent = fixture.componentInstance;
		// the second parameter 'fr' is optional
		registerLocaleData(localeFr, 'fr');
		fixture.detectChanges();
	});

	it('should be render', () => {
		expect(fixture).toBeTruthy();
		expect(journalComponent).toBeTruthy();
	});

	it('doit initialiser la page', () => {
		spyOn((journalComponent as any).navigationService, 'lire').and.returnValue(of({typo: 'RA1'}));
		journalComponent.ngOnInit();
		expect(journalComponent.appelEx040OK).toBeDefined();
		expect((journalComponent as any).navigationService.lire).toHaveBeenCalled();
	});

	it("doit ouvrir la modale d'aide", () => {
		spyOn((journalComponent as any).modalService, 'show').and.returnValue({content: {getFocusOnFermer: () => {}}});
		journalComponent.openModalAide();
		expect((journalComponent as any).modalService.show).toHaveBeenCalled();
	});

	it("doit rediriger vers la page d'indisponibilité si candidat", () => {
		spyOn((journalComponent as any).navigationService, 'lire').and.returnValue(of({typo: 'C1'}));
		spyOn((journalComponent as any).router, 'navigate');
		journalComponent.ngOnInit();
		expect((journalComponent as any).router.navigate).toHaveBeenCalledWith(['/indisponible'], {
			queryParams: {from: 'journalretouremploi'}
		});
		expect((journalComponent as any).navigationService.lire).toHaveBeenCalled();
	});

	it('doit verifier le code Saphir puis le pilote', () => {
		spyOn((journalComponent as any).navigationService, 'lire').and.returnValue(of({typo: 'DE4'}));
		spyOn((journalComponent as any).individuService, 'getCodeSaphir').and.returnValue(
			of({agence: {codeSaphir: '33500'}})
		);
		spyOn((journalComponent as any).piloteService, 'getEtatPilote').and.returnValue(of({etatFonctionnalite: true}));
		journalComponent.ngOnInit();
		expect((journalComponent as any).piloteService.getEtatPilote).toHaveBeenCalledWith('33', 'EPE', 'PN118DREJRE');
		expect((journalComponent as any).navigationService.lire).toHaveBeenCalled();
	});

	it('doit verifier le code Saphir non rempli puis les coordonnees puis le pilote', () => {
		spyOn((journalComponent as any).navigationService, 'lire').and.returnValue(of({typo: 'DE1'}));
		spyOn((journalComponent as any).individuService, 'getCodeSaphir').and.returnValue(of({agence: {}}));
		spyOn((journalComponent as any).piloteService, 'getEtatPilote').and.returnValue(of({etatFonctionnalite: true}));
		journalComponent.ngOnInit();
		expect((journalComponent as any).piloteService.getEtatPilote).toHaveBeenCalledWith('33', 'EPE', 'PN118DREJRE');
		expect((journalComponent as any).navigationService.lire).toHaveBeenCalled();
	});

	it('doit rediriger vers une page d indispo en cas d erreur', () => {
		spyOn((journalComponent as any).router, 'navigate');
		spyOn((journalComponent as any).navigationService, 'lire').and.returnValue(throwError('KO'));
		journalComponent.ngOnInit();
		expect((journalComponent as any).router.navigate).toHaveBeenCalledWith(['/indisponible'], {
			queryParams: {from: 'journalretouremploi'}
		});
	});
});
