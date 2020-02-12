import { enableProdMode } from '@angular/core';

import { ReproElement } from './app/repro.element';

enableProdMode();

customElements.define('repro-element', ReproElement);
