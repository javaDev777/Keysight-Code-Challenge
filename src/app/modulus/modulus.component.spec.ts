import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulusComponent } from './modulus.component';

describe('ModulusComponent', () => {
  let component: ModulusComponent;
  let fixture: ComponentFixture<ModulusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
