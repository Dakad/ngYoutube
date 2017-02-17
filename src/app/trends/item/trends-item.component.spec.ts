import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsItemComponent } from './trends-item.component';

describe('TrendsItemComponent', () => {
  let component: TrendsItemComponent;
  let fixture: ComponentFixture<TrendsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
