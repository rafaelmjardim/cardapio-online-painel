import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';

import { LucideAngularModule, Home, PackageSearch, ShoppingCart, X, User, LogOut, Search, Archive, Box, BadgeDollarSign, HandCoins } from 'lucide-angular';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    LucideAngularModule.pick({Home, PackageSearch, ShoppingCart, X, User, LogOut, Search, Archive, Box, BadgeDollarSign, HandCoins}),
  ],
  exports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    LucideAngularModule
  ]
})
export class SharedModule { }
