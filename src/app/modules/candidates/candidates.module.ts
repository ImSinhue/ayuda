import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';


@NgModule({
  declarations: [
    CandidatesComponent,
    CandidateDetailComponent // ✅ Solo una vez
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule
  ],
  exports: [CandidateDetailComponent] // ✅ Exporta si se usa en otro módulo (como el dashboard)
})
export class CandidatesModule { }

