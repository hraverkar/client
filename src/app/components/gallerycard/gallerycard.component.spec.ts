import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerycardComponent } from './gallerycard.component';

describe('GallerycardComponent', () => {
  let component: GallerycardComponent;
  let fixture: ComponentFixture<GallerycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
