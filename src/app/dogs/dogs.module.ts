import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DogsRoutingModule } from './dogs-routing.module';
import { DogsComponent } from './dogs.component';

@NgModule({
  declarations: [DogsComponent],
  imports: [CommonModule, DogsRoutingModule],
})
export class DogsModule {}
