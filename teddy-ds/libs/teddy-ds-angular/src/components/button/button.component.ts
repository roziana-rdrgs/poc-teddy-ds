/* eslint-disable @nx/enforce-module-boundaries */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonBaseStyle} from "./../../../../shared/design-tokens"
@Component({
  selector: 'lib-teddy-ds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styles: [
    `button {
      width: ${ButtonBaseStyle.size["small"].width};
      height: ${ButtonBaseStyle.size["small"].height};
      background-color: ${ButtonBaseStyle.backgroundColor};
      color: ${ButtonBaseStyle.color};
      border-radius: ${ButtonBaseStyle.borderRadius};
      font-family: ${ButtonBaseStyle.fontFamily};
      font-size: ${ButtonBaseStyle.fontSize};
    }`
  ]
})
export class ButtonComponent {

  @Input() size: 'small' | 'large' = 'large';
}
