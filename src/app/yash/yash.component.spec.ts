import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YashComponent } from './yash.component';

describe('YashComponent', () => {
  let component: YashComponent;
  let fixture: ComponentFixture<YashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
