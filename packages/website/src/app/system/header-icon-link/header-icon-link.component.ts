import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-icon-link',
  templateUrl: './header-icon-link.component.html',
  styleUrls: ['./header-icon-link.component.scss']
})
export class HeaderIconLinkComponent {
  /**
   * Link to `svg` resource relative to project server root
   */
  @Input()
  assetPath: string;

  /**
   * URL to an external website
   */
  @Input()
  link: string;

  /**
   * Used in `alt` and `title` properties
   */
  @Input()
  description: string;
}
