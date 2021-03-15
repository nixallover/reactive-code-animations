import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxCloudIllustrationComponent } from './nx-cloud-illustration.component';

describe('NxCloudIllustrationComponent', () => {
  let component: NxCloudIllustrationComponent;
  let fixture: ComponentFixture<NxCloudIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxCloudIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxCloudIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
