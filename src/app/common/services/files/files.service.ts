// This service is used to get data from API
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  // API url. From here we get data
  apiUrl: string = 'https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json';

  constructor(private http: HttpClient) { }

  // This method get files/folders data from API
  getFiles() {
    // By default the methods from HttpClient returns Observable. Because the component what use this set of data don't be distroyed and can't unsubscribe the observable, I convert this to promise to prevent memory leak.
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response)
      .catch(error => error);
  }
}
