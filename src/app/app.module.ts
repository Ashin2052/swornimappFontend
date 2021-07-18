import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {CatagoryListComponent} from './catagory-list/catagory-list.component';
import {CatagoryFormComponent} from './catagory-form/catagory-form.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AuthGuardService} from './services/auth-service/auth.guard';
import {AuthService} from './services/auth-service/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule, MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatSelectModule, MatSlideToggleModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {
  BreakPointRegistry,
  FlexLayoutModule, FlexOrderStyleBuilder,
  FlexStyleBuilder, LayoutAlignStyleBuilder, LayoutGapStyleBuilder,
  LayoutStyleBuilder, MediaMarshaller,
  PrintHook,
  ShowHideStyleBuilder, StylesheetMap,
  StyleUtils, ɵMatchMedia
} from '@angular/flex-layout';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { TokenInterceptor } from './services/auth-service/jwt.interceptor';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ConfirmDialogComponent,
    LoginComponent,
    ProductListComponent,
    ProductFormComponent,
    CatagoryListComponent,
    CatagoryFormComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    AdminHeaderComponent,
    AdminMainPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    NgtUniversalModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    MatMenuModule
  ],
  entryComponents: [CatagoryFormComponent, ConfirmDialogComponent, ProductFormComponent],
  providers: [AuthGuardService, AuthService,
    StyleUtils, StyleUtils, StylesheetMap,
    MediaMarshaller, ɵMatchMedia, BreakPointRegistry,
    PrintHook, LayoutStyleBuilder,
    LayoutAlignStyleBuilder,
    LayoutGapStyleBuilder,
    FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder , {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    },
  }],
})
export class AppModule {
}
