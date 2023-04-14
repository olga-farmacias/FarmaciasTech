import { Component, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {

@Input() bannerClosed= false;

  isMenuOpen: boolean = false;
  showsSubMenu: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


}

@Directive({
  selector: '[hamburgerToggle]'
})
export class HamburgerToggleDirective {
  constructor(private el: ElementRef) {

  }
  @HostListener('click')
  onClick(): void {
    const menu = this.el.nativeElement.parentElement;
    menu.isMenuOpen = !menu.isMenuOpen;
  }
}
