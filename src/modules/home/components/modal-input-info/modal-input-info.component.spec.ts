import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInputInfoComponent } from './modal-input-info.component';

describe('ModalInputInfoComponent', () => {
  let component: ModalInputInfoComponent;
  let fixture: ComponentFixture<ModalInputInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInputInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInputInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
