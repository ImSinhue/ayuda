import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ✔️ Formularios y HTTP
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <-- Añadido FormsModule aquí
import { HttpClientModule } from '@angular/common/http';

// ✔️ Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { CandidateListComponent } from './dashboard/candidate-list/candidate-list.component';
import { CandidateCardComponent } from './dashboard/candidate-card/candidate-card.component';
import { CandidatesModule } from './modules/candidates/candidates.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    CandidateListComponent,
    CandidateCardComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
CandidatesModule,
    // Añadidos
    FormsModule,           // <-- Aquí
    ReactiveFormsModule,
    HttpClientModule,

    // Angular Material Modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
