import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheCreateComponent } from './clothe-create.component';

describe('ClotheCreateComponent', () => {
  let component: ClotheCreateComponent;
  let fixture: ComponentFixture<ClotheCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClotheCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotheCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
