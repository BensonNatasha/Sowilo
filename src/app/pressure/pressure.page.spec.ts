import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PressurePage } from './pressure.page';

describe('PressurePage', () => {
  let component: PressurePage;
  let fixture: ComponentFixture<PressurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PressurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
