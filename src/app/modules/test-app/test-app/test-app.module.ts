import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../../../../node_modules/@angular/common/http';

import { FilesService } from './../../../common/services/files/files.service';
import { FilesGridComponent } from '../components/files-grid/files-grid.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [FilesGridComponent],
  // Export components to be used in another modules
  exports: [FilesGridComponent],
  // Create one instance of File Service for this module
  providers: [FilesService]
})
export class TestAppModule { }
