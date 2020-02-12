import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
  ɵdetectChanges,
} from '@angular/core';

import { NgClass, CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'repro-element',
  template: `
    <button (click)="onToggle()">
      {{label}}
    </button>
    <span [ngClass]="{'some-class': isExpanded}">Text</span>
  `,
})
export class ReproComponent {
  label = 'toggle';

  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
    ɵdetectChanges(this);
  }
}

@NgModule({
  declarations: [
    ReproComponent,
  ],
  imports: [CommonModule],
})
class RenderModule {}
