import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import {TextEditorComponent} from './text-editor/text-editor.component';


const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path: 'image-upload', component: ImageUploadComponent},
    {path: 'create-pdf', component: CreatePdfComponent},
    {path: 'text-editor', component: TextEditorComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
