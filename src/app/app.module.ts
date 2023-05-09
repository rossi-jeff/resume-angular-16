import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ResumeComponent } from './resume/resume.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SchoolCardComponent } from './school-card/school-card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ReferenceCardComponent } from './reference-card/reference-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameFormComponent } from './name-form/name-form.component';
import { ContactMethodFormComponent } from './contact-method-form/contact-method-form.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    ContactComponent,
    ReferencesComponent,
    TestimonialsComponent,
    ResumeComponent,
    LinksComponent,
    HomeComponent,
    SchoolCardComponent,
    JobCardComponent,
    ReferenceCardComponent,
    CommentCardComponent,
    NameFormComponent,
    ContactMethodFormComponent,
    MessageFormComponent,
    AddressFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
