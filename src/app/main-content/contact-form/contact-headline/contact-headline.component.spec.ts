import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeadlineComponent } from './contact-headline.component';

describe('ContactHeadlineComponent', () => {
  let component: ContactHeadlineComponent;
  let fixture: ComponentFixture<ContactHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactHeadlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
