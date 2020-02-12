import { ɵrenderComponent } from '@angular/core';

import { ReproComponent } from './repro.component';

export class ReproElement extends HTMLElement {
  private component: ReproComponent;

  constructor() {
    super();

    this.component = ɵrenderComponent(ReproComponent, { host: this });
  }
}
