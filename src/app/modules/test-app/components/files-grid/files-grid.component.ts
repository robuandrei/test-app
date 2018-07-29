import { FilesService } from './../../../../common/services/files/files.service';
import { Component, OnInit } from '@angular/core';

import { Entry } from './../../../../common/interfaces/entry';

@Component({
  selector: 'app-files-grid',
  templateUrl: './files-grid.component.html',
  styleUrls: ['./files-grid.component.scss']
})
export class FilesGridComponent implements OnInit {

  // Items array
  items: Array<Entry>[];

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    // Get files/folders data from the API when component is initializated
    this.filesService.getFiles()
      .then(response => {
        // Assign response to items
        this.items = response.list.entries
      })
      .catch(error => console.log(error));
  }

}
