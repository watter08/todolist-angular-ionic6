import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {TodoComponentModule} from '../components/Todo/todo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage ]
})
export class HomePageModule {}
