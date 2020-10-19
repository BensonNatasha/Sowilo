import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlycemicPage } from './glycemic.page';

describe('GlycemicPage', () => {
  let component: GlycemicPage;
  let fixture: ComponentFixture<GlycemicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlycemicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlycemicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
