import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  estado: boolean = sessionStorage.getItem('phone-banner') == 'closed';
  subMenu: boolean = false;

  constructor(private elementRef: ElementRef){
  }
  
  cambiarEstado(): void {
    this.estado = !this.estado;
    sessionStorage.setItem('phone-banner', 'closed');
  }

  openServicios(): void {
    this.subMenu = !this.subMenu;
  }

  closeSubMenu(): void {
    this.subMenu = false;
  }

  @HostListener('document: click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if(!clickedInside) {
      this.closeSubMenu();
    }
  }

  
}
