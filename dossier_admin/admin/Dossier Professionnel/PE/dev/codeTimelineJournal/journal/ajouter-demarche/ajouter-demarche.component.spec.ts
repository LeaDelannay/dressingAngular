import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AjouterDemarcheComponent} from './ajouter-demarche.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BsModalService} from 'pe-ngx-bootstrap';
import {BsModalServiceMock, TmsServiceMock} from 'mockService';
import {TmsService} from '@pe-angular-communs/tms';

describe('AjouterDemarcheComponent', () => {
	let component: AjouterDemarcheComponent;
	let fixture: ComponentFixture<AjouterDemarcheComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [AjouterDemarcheComponent],
				providers: [
					{provide: BsModalService, useClass: BsModalServiceMock},
					{provide: TmsService, useClass: TmsServiceMock}
				],
				schemas: [NO_ERRORS_SCHEMA]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AjouterDemarcheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
