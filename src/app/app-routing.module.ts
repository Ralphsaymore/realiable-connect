import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PropertyComponent } from './components/property/property.component';


const routes: Routes = [
  {path:'register/.', component: RegisterComponent},
  {path: 'login/.' , component: LoginComponent},
  {path: 'backend/.', component: BackendComponent},
  {path:'welcome/.' , component: WelcomeComponent},
  {path:'home/.', component: HomeComponent},
  {path: 'property/.',component:PropertyComponent},
  {path:'file-upload/.', component: FileUploadComponent},
  {path: '', redirectTo:'welcome/.', pathMatch:'full'}
];

@NgModule({    
  imports: [RouterModule.forRoot(routes,{ useHash: false, initialNavigation: 'enabled' })],    
  exports: [RouterModule] 
})
export class AppRoutingModule { }
