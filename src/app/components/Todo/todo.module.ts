import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TodoComponent } from './todo.component';
import { TodoByCategoryPipe } from 'src/app/Pipes/TodoByCategory.Pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule, 
    RouterModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
  declarations: [TodoComponent , TodoByCategoryPipe],
  exports: [TodoComponent]
})
export class TodoComponentModule {}
