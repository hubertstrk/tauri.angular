import {Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-button.component.html',
})
export class ButtonComponent {
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'transparent'
    | 'light' = 'transparent';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() rounded = true;
  @Input() badgeColor: string = 'bg-sky-600';
  @Input() icon: SafeHtml | null = null;

  @ContentChildren('projectedContent', {descendants: true, read: ElementRef})
  projectedContent!: QueryList<ElementRef>;

  @Output() clicked = new EventEmitter<Event>();

  get computedClasses(): string {
    const base = `
      ${this.rounded ? 'rounded-full' : 'rounded'}
      px-2 py-2 font-medium focus:outline-none transition
    `;
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    const variants = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-green-500 text-white hover:bg-green-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
      transparent: `bg-transparent text-gray-700 dark:text-gray-200${
        this.rounded
          ? ' hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full'
          : ' hover:bg-gray-100 dark:hover:bg-gray-700'
      }`,
      light: `bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200${
        this.rounded
          ? ' hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full'
          : ' hover:bg-gray-200 dark:hover:bg-gray-700'
      }`,
    };

    return `${base} ${sizes[this.size]} ${variants[this.variant]} ${
      this.disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;
  }

  onClick(event: Event) {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
