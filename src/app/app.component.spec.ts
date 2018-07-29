import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilesGridComponent } from './modules/test-app/components/files-grid/files-grid.component';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule],
      declarations: [
        AppComponent,
        FilesGridComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
