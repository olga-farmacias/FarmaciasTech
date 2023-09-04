import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  estado: boolean = sessionStorage.getItem('phone-banner') == 'closed';
  subMenu: boolean = false;

  url$: Observable<string> = new Observable<string>();

  constructor(private elementRef: ElementRef,
    private router: Router){
      router.events.subscribe( (val) => {
        
        this.subMenu = false;
        });
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
