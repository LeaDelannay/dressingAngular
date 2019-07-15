import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EcheancePasseeComponent} from './echeance-passee.component';

describe('EcheancePasseeComponent', () => {
	let component: EcheancePasseeComponent;
	let fixture: ComponentFixture<EcheancePasseeComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [EcheancePasseeComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(EcheancePasseeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
