import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: 'contact', component: ContactPageComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}