import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {

  slides = [
    {img: "/assets/logosFarmacias/soyfarmaceutico.png"},
    {img: "/assets/logosFarmacias/farmaciasTech.png"},
    {img: "/assets/logosFarmacias/farmaciasEs.png"},
    {img: "/assets/logosFarmacias/farmaciasCom.png"},
    {img: "/assets/logosFarmacias/farmaciasJobs.png"}
  ];

  slides2 = [
    {img: "/assets/partners/nixfarma.jpg"},
    {img: "/assets/partners/google.png"},
    {img: "/assets/partners/unycop.png"},
    {img: "/assets/partners/nostic.png"}
  ]
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 1, "swipe": true, "autoplay": true, "autoplaySpeed": 2000};
  slideConfigBig = {"slidesToShow": 3, "slidesToScroll": 1, "swipe": true, "autoplay": true, "autoplaySpeed": 2000};

  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;

  prevImg() {
    this.slickModal.slickPrev();
  }

  nextImg() {
    this.slickModal.slickNext();
  }

  
/*   addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e: any)  {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }
 */}

