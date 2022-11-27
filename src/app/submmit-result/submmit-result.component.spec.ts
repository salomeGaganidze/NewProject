import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmmitResultComponent } from './submmit-result.component';

describe('SubmmitResultComponent', () => {
  let component: SubmmitResultComponent;
  let fixture: ComponentFixture<SubmmitResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmmitResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmmitResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
