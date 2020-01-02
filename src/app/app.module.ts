import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';

const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        UserDetailComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ImageUploadComponent,
        CreatePdfComponent,
        TextEditorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SmartTableModule,
        NgxEditorModule,
        HttpClientModule,
        NotifierModule.withConfig(customNotifierOptions)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
