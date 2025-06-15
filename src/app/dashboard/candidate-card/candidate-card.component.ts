import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent {
  @Input() candidate: any;
  @Output() openDetail = new EventEmitter<any>();

  open() {
  console.log('[🖱️ Click] Card clicado:', this.candidate);
  this.openDetail.emit(this.candidate);
}

}
