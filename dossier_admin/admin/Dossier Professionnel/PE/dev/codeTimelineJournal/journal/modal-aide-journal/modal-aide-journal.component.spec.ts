import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalAideJournalComponent} from './modal-aide-journal.component';
import {BsModalRefMock} from '../../../__tests__/service';
import {BsModalRef} from 'pe-ngx-bootstrap';

describe('ModalAideJournalComponent', () => {
	let component: ModalAideJournalComponent;
	let fixture: ComponentFixture<ModalAideJournalComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ModalAideJournalComponent],
				providers: [{provide: BsModalRef, useClass: BsModalRefMock}]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalAideJournalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
