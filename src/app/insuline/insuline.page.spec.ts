import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsulinePage } from './insuline.page';

describe('InsulinePage', () => {
  let component: InsulinePage;
  let fixture: ComponentFixture<InsulinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsulinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsulinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
