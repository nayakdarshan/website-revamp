import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicDetailsCardComponent } from './basic-details-card/basic-details-card.component';
import { PersonalSkillsComponent } from './personal-skills/personal-skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BasicDetailsCardComponent,
    PersonalSkillsComponent,
    WorkExperienceComponent,
    CertificationsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactMeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
