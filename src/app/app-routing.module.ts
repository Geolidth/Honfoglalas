import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharPageComponent } from './char-page/char-page.component';
import { KaraktergenComponent } from './karaktergen/karaktergen.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'karaktergen', component: KaraktergenComponent, pathMatch: 'full' },
  { path: 'char-page' , component: CharPageComponent, pathMatch: 'full' },
  { path: 'skills' , component: SkillsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
