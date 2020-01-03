import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPanelComponent } from './adm-panel.component';

describe('AdmPanelComponent', () => {
  let component: AdmPanelComponent;
  let fixture: ComponentFixture<AdmPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
