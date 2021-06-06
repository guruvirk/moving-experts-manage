import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatSpinner, MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GooglePlacesDirective } from './directives/google-places.directive';
import { GoogleAddressComponent } from './components/google-address/google-address.component';
import { SnackBarComponent } from './services/ux.service';
import { HttpClientModule } from '@angular/common/http';
import { ProcessingIndicatorComponent } from './components/processing-indicator/processing-indicator.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { MatCardModule } from '@angular/material';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglePlacesDirective,
    GoogleAddressComponent,
    SnackBarComponent,
    ProcessingIndicatorComponent,
    LoginComponent,
    OrderComponent,
    OrdersComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [GooglePlacesDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
