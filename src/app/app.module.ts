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
import {HttpClientModule} from '@angular/common/http';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
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
import {HomePageHeaderComponent} from './home-page-header/home-page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    ProductListComponent,
    ProductFormComponent,
    CatagoryListComponent,
    CatagoryFormComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    AdminHeaderComponent,
    HomePageHeaderComponent
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
  ],
  entryComponents: [CatagoryFormComponent],
  providers: [AuthGuardService, AuthService,
    StyleUtils, StyleUtils, StylesheetMap,
    MediaMarshaller, ɵMatchMedia, BreakPointRegistry,
    PrintHook, LayoutStyleBuilder,
    LayoutAlignStyleBuilder,
    LayoutGapStyleBuilder,
    FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder ,
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
