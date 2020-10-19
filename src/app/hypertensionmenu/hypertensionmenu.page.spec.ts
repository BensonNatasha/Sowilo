import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HypertensionmenuPage } from './hypertensionmenu.page';

describe('HypertensionmenuPage', () => {
  let component: HypertensionmenuPage;
  let fixture: ComponentFixture<HypertensionmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypertensionmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HypertensionmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
