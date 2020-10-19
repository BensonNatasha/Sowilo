import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhorientationPage } from './phorientation.page';

describe('PhorientationPage', () => {
  let component: PhorientationPage;
  let fixture: ComponentFixture<PhorientationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhorientationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhorientationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
