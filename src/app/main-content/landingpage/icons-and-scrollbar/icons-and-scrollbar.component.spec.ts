import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAndScrollbarComponent } from './icons-and-scrollbar.component';

describe('IconsAndScrollbarComponent', () => {
  let component: IconsAndScrollbarComponent;
  let fixture: ComponentFixture<IconsAndScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsAndScrollbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsAndScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
