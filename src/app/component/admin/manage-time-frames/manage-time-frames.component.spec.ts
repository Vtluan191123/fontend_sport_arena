import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTimeFramesComponent } from './manage-time-frames.component';

describe('ManageTimeFramesComponent', () => {
  let component: ManageTimeFramesComponent;
  let fixture: ComponentFixture<ManageTimeFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTimeFramesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTimeFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
