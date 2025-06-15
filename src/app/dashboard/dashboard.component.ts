import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  candidates = [/* tu lista de candidatos */];
  selectedCandidate: any = null;

  openCandidateDetail(candidate: any) {
    console.log('[📥 Evento] Candidato recibido del card:', candidate);
    this.selectedCandidate = candidate;
  }

  closeCandidateDetail() {
    console.log('[❌ Modal cerrado]');
    this.selectedCandidate = null;
  }
}
