import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DorientationPage } from './dorientation.page';

describe('DorientationPage', () => {
  let component: DorientationPage;
  let fixture: ComponentFixture<DorientationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorientationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DorientationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
