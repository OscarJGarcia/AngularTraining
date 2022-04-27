import { ConfirmationGuard } from './guards/confirmation.guard';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsResolveService } from './services/meals/meals-resolve.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  {
    path: 'shop',
    component: ShopComponent,
    resolve: [MealsResolveService],
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
    canDeactivate: [ConfirmationGuard],
  },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
