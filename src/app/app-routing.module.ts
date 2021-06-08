import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
{path:'' , component:HomeComponent},
{path:'aboute', component:AbouteComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'services', component:ServicesComponent},
{path:'contactus',component:ContactUsComponent},
{path:'***',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
