import { Component, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {

@Input() bannerClosed= false;

  isMenuOpen: boolean = false;
  showsSubMenu: boolean = false;


constructor(private router: Router){
  router.events.subscribe( (val) => {
        
      this.isMenuOpen = false;
      this.showsSubMenu = false;
  });
}

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
