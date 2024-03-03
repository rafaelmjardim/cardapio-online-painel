import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LucideAngularModule, Home, PackageSearch, ShoppingCart } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateProductComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({Home, PackageSearch, ShoppingCart})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
