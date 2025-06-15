import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent {
  @Input() candidate: any;
  @Output() close = new EventEmitter<void>();

  sections = ['email', 'linkedin', 'instagram', 'manuscript', 'books', 'boe'];
  sectionIndex = 0;

  nextSection() {
    if (this.sectionIndex < this.sections.length - 1) this.sectionIndex++;
  }

  prevSection() {
    if (this.sectionIndex > 0) this.sectionIndex--;
  }

  get currentSection() {
    return this.sections[this.sectionIndex];
  }

  closeModal() {
    this.close.emit();
  }
}
