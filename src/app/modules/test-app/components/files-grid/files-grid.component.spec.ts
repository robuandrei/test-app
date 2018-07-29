import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesGridComponent } from './files-grid.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HttpClientModule } from '../../../../../../node_modules/@angular/common/http';

import { FilesService } from './../../../../common/services/files/files.service';

describe('FilesGridComponent', () => {
  let component: FilesGridComponent;
  let fixture: ComponentFixture<FilesGridComponent>;
  let service: FilesService;
  let filesArr = [];
  let foldersArr = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule],
      declarations: [FilesGridComponent],
      providers: [FilesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesGridComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(FilesService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('items should be undefined', async(() => {
    expect(component.items).toBeUndefined();
  }));

  it('pagination information should exist', async(() => {
    service.getFiles()
      .then(response => {
        expect(response.list.pagination.count).toBe(7);
        expect(response.list.pagination.totalItems).toBe(7);
        expect(response.list.pagination.maxItems).toEqual(100);
      })
  }));

  it('entries data should to be 6', async(() => {
    service.getFiles()
      .then(response => {
        expect(response.list.entries.length).toBe(6);
      });
  }));

  it('files type should to be 5', async(() => {
    service.getFiles()
      .then(response => {
        filesArr =
          response.list.entries.filter(entry => entry.entry.target.file !== undefined);
        expect(filesArr.length).toBe(5);
      });
  }));

  it('folder type should to be 1', async(() => {
    service.getFiles()
      .then(response => {
        foldersArr =
          response.list.entries.filter(entry => entry.entry.target.folder !== undefined);
        expect(foldersArr.length).toBe(1);
      });
  }));

});
