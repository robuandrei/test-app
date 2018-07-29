import { TestAppModule } from './test-app.module';

describe('TestAppModule', () => {
  let testAppModule: TestAppModule;

  beforeEach(() => {
    testAppModule = new TestAppModule();
  });

  it('should create an instance', () => {
    expect(testAppModule).toBeTruthy();
  });
});
