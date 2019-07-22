import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimelineComponent} from './timeline.component';
import {BsModalService} from 'pe-ngx-bootstrap';
import {DemarcheService} from '../../services/services/demarche.service';
import {BsModalServiceMock, DemarcheServiceMock} from 'mockService';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppConfigurationToken} from '../../configuration/app-configuration.token';
import {environment} from '../../../environments/environment';
import {IndisponibilitePartielleComponent} from '../../indisponible/indisponibilitePartielle.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {demarcheActionRealise, demarcheJREConseillerEnCours, demarcheJREDEEnCours,  demarcheJREDERealise, demarcheJREDEAnnule, demarcheActionAnnule, demarcheActionEnCours, demarcheJREConseillerAnnule, demarcheJREConseillerRealise} from 'mockData';

describe('TimelineComponent', () => {
	let component: TimelineComponent;
	let fixture: ComponentFixture<TimelineComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [HttpClientTestingModule],
				declarations: [TimelineComponent, IndisponibilitePartielleComponent],
				providers: [
					{provide: AppConfigurationToken, useValue: environment},
					{provide: BsModalService, useClass: BsModalServiceMock},
					{provide: DemarcheService, useClass: DemarcheServiceMock}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TimelineComponent);
		component = fixture.componentInstance;
		registerLocaleData(localeFr, 'fr');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('doit tester si la démarche est modifiable', function() {
		expect(component.isDemarcheModifiable(demarcheJREConseillerEnCours)).toBeTruthy();
		expect(component.isDemarcheModifiable(demarcheJREDEEnCours)).toBeTruthy();
		expect(component.isDemarcheModifiable(demarcheActionRealise)).toBeFalsy();
	});

	it('doit tester si le message non modifiable s\'affiche', function() {
		expect(component.isAffichageMessageNonModifiable(demarcheActionEnCours)).toBeTruthy();
		expect(component.isAffichageMessageNonModifiable(demarcheJREConseillerEnCours)).toBeFalsy();
		expect(component.isAffichageMessageNonModifiable(demarcheJREDEEnCours)).toBeFalsy();
		expect(component.isAffichageMessageNonModifiable(demarcheActionAnnule)).toBeFalsy();
		expect(component.isAffichageMessageNonModifiable(demarcheActionRealise)).toBeFalsy();
	});

	it('doit tester si l\'encadré contenant le bouton oui s\'affiche', function() {
		expect(component.isAffichageLAvezVousFait(demarcheJREConseillerEnCours)).toBeTruthy();
		expect(component.isAffichageLAvezVousFait(demarcheJREDEEnCours)).toBeTruthy();
    expect(component.isAffichageLAvezVousFait(demarcheJREConseillerAnnule)).toBeFalsy();
    expect(component.isAffichageLAvezVousFait(demarcheJREConseillerRealise)).toBeFalsy();
    expect(component.isAffichageLAvezVousFait(demarcheJREDEAnnule)).toBeFalsy();
    expect(component.isAffichageLAvezVousFait(demarcheJREDERealise)).toBeFalsy();
    expect(component.isAffichageLAvezVousFait(demarcheActionEnCours)).toBeFalsy();
		expect(component.isAffichageLAvezVousFait(demarcheActionAnnule)).toBeFalsy();
		expect(component.isAffichageLAvezVousFait(demarcheActionRealise)).toBeFalsy();
	});

	it('doit tester si le bouton non s\'affiche', function() {
		expect(component.isAffichageBoutonNon(demarcheJREDEEnCours)).toBeTruthy();
    expect(component.isAffichageBoutonNon(demarcheJREDEAnnule)).toBeFalsy();
    expect(component.isAffichageBoutonNon(demarcheJREDERealise)).toBeFalsy();
    expect(component.isAffichageBoutonNon(demarcheJREConseillerEnCours)).toBeFalsy();
    expect(component.isAffichageBoutonNon(demarcheJREConseillerAnnule)).toBeFalsy();
    expect(component.isAffichageBoutonNon(demarcheJREConseillerRealise)).toBeFalsy();
    expect(component.isAffichageBoutonNon(demarcheActionEnCours)).toBeFalsy();
    expect(component.isAffichageBoutonNon(demarcheActionAnnule)).toBeFalsy();
    expect(component.isAffichageBoutonNon(demarcheActionRealise)).toBeFalsy();
	});

  it('doit tester si le code de l\'état de la démarche est réalisé, en cours ou annulé et retourner une classe en fonction', function() {
    expect(component.getClassEtatDemarche(demarcheJREDEEnCours)).toBe('todo');
    expect(component.getClassEtatDemarche(demarcheJREDEAnnule)).toBe('cancelled');
    expect(component.getClassEtatDemarche(demarcheJREDERealise)).toBe('done');
  });

  it('doit tester si la démarche est echeance , la classe est outdated', function() {
    expect(component.getClassEcheanceDepassee(demarcheJREDEAnnule)).toBe('outdated');
    expect(component.getClassEcheanceDepassee(demarcheJREDEEnCours)).toBeFalsy();
  });

  it('doit tester si le code du pourquoi de la démarche est P01, P02, P03, P04 ou P05 et retourner une classe en fonction', function() {
    expect(component.getClassEcheance(demarcheJREConseillerEnCours)).toBe('competences');
    expect(component.getClassEcheance(demarcheJREConseillerAnnule)).toBe('formation');
    expect(component.getClassEcheance(demarcheJREConseillerRealise)).toBe('candidatures');
    expect(component.getClassEcheance(demarcheJREDEEnCours)).toBe('entretiens');
    expect(component.getClassEcheance(demarcheJREDERealise)).toBe('entreprise');
  });

});
