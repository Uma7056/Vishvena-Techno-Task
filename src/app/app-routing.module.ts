import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertiseComponent } from './MyComponents/expertise/expertise.component';
import { ContactUsComponent } from './MyComponents/contact-us/contact-us.component';

const routes: Routes = [
  {path:"",component:ExpertiseComponent},
  {path:"contact",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
