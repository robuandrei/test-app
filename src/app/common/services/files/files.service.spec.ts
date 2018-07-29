import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FilesService } from './files.service';

describe('FilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('should be created', inject([FilesService], (service: FilesService) => {
    expect(service).toBeTruthy();
  }));

  it('GET method should be accepted', inject([HttpTestingController, FilesService],
  (httpMock: HttpTestingController, service: FilesService) => {
      service.getFiles()
        .then(response => response);
        
      const req = httpMock.expectOne('https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json');
      expect(req.request.method).toEqual('GET');
      
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});
