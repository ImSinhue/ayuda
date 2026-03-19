import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewComponent]
    });
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the capability questions and answers', () => {
    fixture.detectChanges();
    const textContent = fixture.nativeElement.textContent;
    expect(textContent).toContain('¿De qué eres capaz?');
    expect(textContent).toContain('¿Eres capaz de que te pase un proyecto y lo ejecutes?');
    expect(textContent).toContain('¿qué eres capaz?');
    expect(textContent).toContain('Sí. Compárteme el repositorio o los archivos clave');
  });
});
