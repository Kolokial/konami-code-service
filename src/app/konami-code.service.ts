import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KonamiCodeService {

  private code: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  private index: number = 0;

  private _stopListening: () => void;
  private renderer: Renderer2;

  private callback: () => void = () => { };

  constructor(private rendereFactory: RendererFactory2) {
    this.init();
  }

  public startListening(): void {
    if (this.renderer) {
      this.listenForKeyboardEvent();
    }
  }

  public stopListening(): void {
    if (this._stopListening) {
      this._stopListening();
    }
  }

  public setCodeCompleteMethod(callback: () => void): void {
    this.callback = callback;
  }

  private init(): void {
    this.setupRenderer();
    this.listenForKeyboardEvent();
  }

  private setupRenderer(): void {
    this.renderer = this.rendereFactory.createRenderer(null, null);
  }

  private listenForKeyboardEvent(): void {
    this._stopListening = this.renderer.listen('body', 'keyup', (event: KeyboardEvent) => {
      this.checkForCodeInput(event.keyCode);
    });
  }

  private checkForCodeInput(keyCode: number): void {
    if (this.keyExistsInCode(keyCode) && this.isCodeComplete(keyCode)) {
      this.doCallback();
    } else if (this.keyExistsInCode(keyCode)) {
      this.index++;
    } else {
      this.resetIndex();
    }
  }

  private keyExistsInCode(keyCode): boolean {
    return keyCode === this.code[this.index];
  }

  private isCodeComplete(keys): boolean {
    return (this.index === this.code.length - 1);
  }

  private resetIndex(): void {
    this.index = 0;
  }

  private doCallback(): void {
    if (this.callback) {
      this.callback();
    }
  }
}
