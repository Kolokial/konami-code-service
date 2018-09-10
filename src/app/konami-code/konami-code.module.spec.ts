import { KonamiCodeModule } from './konami-code.module';

describe('KonamiCodeModule', () => {
  let konamiCodeModule: KonamiCodeModule;

  beforeEach(() => {
    konamiCodeModule = new KonamiCodeModule();
  });

  it('should create an instance', () => {
    expect(konamiCodeModule).toBeTruthy();
  });
});
