import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {environment} from '../../environments/environment';
import {AppConfigurationToken} from '../configuration/app-configuration.token';
import {SuggestionsComponent} from './suggestions.component';
import {TmsModule, TmsService} from '@pe-angular-communs/tms';
import {ServicesModule} from '../services/services.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LayoutConfigurationToken, NavigationService} from '@pe-angular-communs/candidat-layout';
import {layoutToken, suggestion} from 'mockData';
import {LoggerService} from '@pe-angular-communs/logger';
import {
	BsModalRefMock,
	BsModalServiceMock,
	ModalDirectiveMock,
	TmsServiceMock,
	SuggestionsServiceMock
} from 'mockService';
import {BsModalRef, BsModalService} from 'pe-ngx-bootstrap';
import {SuggestionsService} from '../services/services/suggestions.service';
import {ModalVoletSuggestionComponent} from './modal-volet-suggestion/modal-volet-suggestion.component';
import {of} from 'rxjs';
import {listeSuggestions} from '../../__tests__/data/listeSuggestions';
import {AccesUtilisateurService} from 'app/services/services/acces-utilisateur.service';

describe('### Component :: SuggestionsComponent', () => {
	let fixture: ComponentFixture<SuggestionsComponent>;
	let suggestionsComponent: SuggestionsComponent;

	const oldResetTestingModule = TestBed.resetTestingModule;

	beforeAll(done =>
		(async () => {
			TestBed.resetTestingModule();
			TestBed.configureTestingModule({
				imports: [
					HttpClientTestingModule,
					ServicesModule,
					RouterTestingModule.withRoutes([]),
					TmsModule.forRoot(environment.configTms)
				],
				providers: [
					SuggestionsService,
					NavigationService,
					AccesUtilisateurService,
					{provide: AppConfigurationToken, useValue: environment},
					{provide: LayoutConfigurationToken, useValue: layoutToken},
					{provide: SuggestionsService, useClass: SuggestionsServiceMock},
					{
						provide: LoggerService,
						useValue: {
							debug: (...message: string[]) => {},
							warn: (...message: string[]) => {},
							info: (...message: string[]) => {}
						}
					},
					{provide: BsModalService, useClass: BsModalServiceMock},
					{provide: BsModalRef, useClass: BsModalRefMock},
					{provide: TmsService, useClass: TmsServiceMock}
				],
				declarations: [SuggestionsComponent, ModalVoletSuggestionComponent, ModalDirectiveMock],
				schemas: [NO_ERRORS_SCHEMA]
			});
			await TestBed.compileComponents();

			TestBed.resetTestingModule = () => TestBed;
		})()
			.then(done)
			.catch(done.fail)
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SuggestionsComponent);
		suggestionsComponent = fixture.componentInstance;
	});

	afterAll(() => {
		// reinstate resetTestingModule method
		TestBed.resetTestingModule = oldResetTestingModule;
		TestBed.resetTestingModule();
	});

	it('should be render', () => {
		expect(fixture).toBeTruthy();
		expect(suggestionsComponent).toBeTruthy();
	});

	it('doit initialiser la page', () => {
		spyOn((suggestionsComponent as any).accesUtilisateurService, 'getConseilsPersoAccessible').and.returnValue(
			of(true)
		);
		suggestionsComponent.ngOnInit();
		expect((suggestionsComponent as any).accesUtilisateurService.getConseilsPersoAccessible).toHaveBeenCalled();
	});

	it('doit mettre à jour la css en fonction de l etat de la suggestion non lue', () => {
		expect(suggestionsComponent.cssUnread('N')).toBe('unread');
	});

	it('doit mettre à jour la css en fonction de l etat de la suggestion lue', () => {
		expect(suggestionsComponent.cssUnread('L')).toBe('read');
	});

	it("doit ouvrir la modale d'aide", () => {
		spyOn((suggestionsComponent as any).modalService, 'show').and.returnValue({content: {getFocusOnFermer: () => {}}});

		suggestionsComponent.openModalAide();

		expect((suggestionsComponent as any).modalService.show).toHaveBeenCalled();
	});

	it('doit fermer le volet de suggestion sur clic bouton fermer', () => {
		spyOn((suggestionsComponent as any).renderer, 'removeClass');

		suggestionsComponent.handleOnHide();
		expect((suggestionsComponent as any).renderer.removeClass).toHaveBeenCalled();
	});
	it('la page doit être prête', () => {
		expect(suggestionsComponent.isPageReady()).toBeFalsy();
		suggestionsComponent.afficherPage = true;
		expect(suggestionsComponent.isPageReady()).toBeFalsy();
		suggestionsComponent.appelEx029OK = true;
		expect(suggestionsComponent.isPageReady()).toBeTruthy();
		suggestionsComponent.afficherPage = false;
		expect(suggestionsComponent.isPageReady()).toBeFalsy();
	});

	it('doit appeler le service "acceder"', () => {
		suggestionsComponent.suggestions = [suggestion];
		spyOn((suggestionsComponent as any).suggestionsService, 'acceder').and.callFake(() => {
			return of('test');
		});
		suggestionsComponent.appelServiceAcceder('2134545642');
		expect((suggestionsComponent as any).suggestionsService.acceder).toHaveBeenCalled();
	});

	it('doit afficher le volet détail sans objets en entrée', () => {
		spyOn((suggestionsComponent as any).modalService, 'show').and.returnValue({
			content: {
				onClicPaginationEvent: of({}),
				onAfficherPopinSuppressionEvent: of({}),
				setVisible: () => {},
				init: () => {}
			}
		});
		spyOn(document, 'getElementsByClassName').and.returnValue([{}, {class: 'test', setAttribute: () => {}}]);

		suggestionsComponent.afficherVoletDetail(suggestion);
		expect((suggestionsComponent as any).modalService.show).toHaveBeenCalled();
	});

	it('doit afficher le volet détail avec des objets en entrée et suivant', () => {
		spyOn((suggestionsComponent as any).modalService, 'show').and.returnValue({
			content: {
				onClicPaginationEvent: of({suggestionEnCours: suggestion, suivant: true}),
				onAfficherPopinSuppressionEvent: of({}),
				setVisible: () => {},
				init: () => {}
			}
		});
		spyOn(document, 'getElementsByClassName').and.returnValue([{}, {class: 'test', setAttribute: () => {}}]);

		mockPourNgOnInit();
		suggestionsComponent.afficherVoletDetail(listeSuggestions[0]);
		expect((suggestionsComponent as any).modalService.show).toHaveBeenCalled();
		expect((suggestionsComponent as any).loggerService).not.toHaveBeenCalled();
	});

	it('doit afficher le volet détail avec des objets en entrée et précédent', () => {
		spyOn((suggestionsComponent as any).modalService, 'show').and.returnValue({
			content: {
				onClicPaginationEvent: of({suggestionEnCours: suggestion, suivant: false}),
				onAfficherPopinSuppressionEvent: of({}),
				setVisible: () => {},
				init: () => {}
			}
		});
		spyOn(document, 'getElementsByClassName').and.returnValue([{}, {class: 'test', setAttribute: () => {}}]);
		mockPourNgOnInit();
		suggestionsComponent.afficherVoletDetail(listeSuggestions[1]);
		expect((suggestionsComponent as any).modalService.show).toHaveBeenCalled();
		expect((suggestionsComponent as any).loggerService).not.toHaveBeenCalled();
	});

	it('doit afficher la popin de suppression', () => {
		spyOn((suggestionsComponent as any).modalService, 'show').and.returnValue({
			content: {
				onSuppressionSuggestion: of({}),
				init: () => {}
			}
		});

		suggestionsComponent.afficherPopinSuppression(suggestion);
		expect((suggestionsComponent as any).modalService.show).toHaveBeenCalled();
	});

	it('doit afficher la popin de suppression en ayant trouvé la suggestion', () => {
		suggestionsComponent.suggestions = [suggestion];
		spyOn((suggestionsComponent as any).modalService, 'show').and.returnValue({
			content: {
				onSuppressionSuggestion: of({suggestion}),
				init: () => {}
			}
		});

		suggestionsComponent.afficherPopinSuppression(suggestion);
		expect((suggestionsComponent as any).modalService.show).toHaveBeenCalled();
	});

	it('doit afficher la popin de suppression en ayant trouvé la suggestion', () => {
		suggestionsComponent.suggestions = [suggestion];
		spyOn((suggestionsComponent as any).modalService, 'show').and.returnValue({
			content: {
				onSuppressionSuggestion: of({suggestion}),
				init: () => {}
			}
		});

		suggestionsComponent.modalVolet = {
			hide: () => {},
			content: {
				isVisible: () => {
					return true;
				}
			}
		};

		suggestionsComponent.afficherPopinSuppression(suggestion);
		expect((suggestionsComponent as any).modalService.show).toHaveBeenCalled();
	});

	it('doit rediriger vers une page d indispo en cas d erreur', () => {
		spyOn((suggestionsComponent as any).router, 'navigate');
		spyOn((suggestionsComponent as any).accesUtilisateurService, 'getConseilsPersoAccessible').and.returnValue(
			of(false)
		);
		mockPourNgOnInit();
		expect((suggestionsComponent as any).router.navigate).toHaveBeenCalledWith(['/indisponible'], {
			queryParams: {from: 'demarcheretouremploi'}
		});
	});

	function mockPourNgOnInit() {
		spyOn((suggestionsComponent as any).suggestionsService, 'getSuggestions').and.returnValue(of(listeSuggestions));
		spyOn(suggestionsComponent as any, 'loggerService');

		suggestionsComponent.ngOnInit();
	}
});
