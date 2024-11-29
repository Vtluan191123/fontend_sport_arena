import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootfieldDetailComponent } from './footfield-detail.component';

describe('FootfieldDetailComponent', () => {
  let component: FootfieldDetailComponent;
  let fixture: ComponentFixture<FootfieldDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootfieldDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootfieldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
