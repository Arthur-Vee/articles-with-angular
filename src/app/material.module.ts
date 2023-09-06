import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
  
  ]
})
export class MaterialModule { 

}