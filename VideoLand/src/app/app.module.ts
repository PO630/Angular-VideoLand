import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonneesService } from './services/donnees.service';
//New import 
import { FormsModule } from '@angular/Forms' ;
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
// Component
import { BlogComponent } from './blog/blog.component';
import { NavigationbarComponent } from './tool/navigationbar/navigationbar.component';
import { AdminmenuComponent } from './tool/adminmenu/adminmenu.component';



//
const appRoutes: Routes = [
  { path: '', component: BlogComponent, },
  { path: 'Blog', component: BlogComponent },
  { path: 'Adminmenu',      component: AdminmenuComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavigationbarComponent,
    AdminmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true } )
  ],
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
