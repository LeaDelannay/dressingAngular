import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalVoletJournalComponent} from './modal-volet-journal.component';
import {BsModalRef} from 'pe-ngx-bootstrap';
import {BsModalRefMock} from 'mockService';

describe('ModalVoletJournalComponent', () => {
	let component: ModalVoletJournalComponent;
	let fixture: ComponentFixture<ModalVoletJournalComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ModalVoletJournalComponent],
				providers: [{provide: BsModalRef, useClass: BsModalRefMock}]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalVoletJournalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
