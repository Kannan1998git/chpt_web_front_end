import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  AfterViewInit {
  images = ['assets/img/Newslide/Picture harbour 11 Aug 07 363.jpg', 'assets/img/Newslide/12x18 (18).jpg', 'assets/img/Newslide/12x18 (33) - Copy.JPG', 'assets/img/Newslide/15.JPG', 'assets/img/Newslide/3.JPG',
            'assets/img/Newslide/DSC_0296.JPG', 'assets/img/Newslide/12x18 (16).jpg', 'assets/img/Newslide/12x18 (21).JPG', 'assets/img/slider/new slide2.png', 'assets/img/Newslide/new container.jpg'];
  activeImage!: string;
  autoplayInterval: number = 2000; // Autoplay interval in milliseconds

  changeImage(image: string) {
    this.activeImage = image;
  }
  ngOnInit() {
    this.startAutoplay();
  }


  ngAfterViewInit(): void {
    const clientsSwiper = new Swiper('.clients-slider', {
     speed: 400,
     loop: true,
     autoplay: {
       delay: 5000,
       disableOnInteraction: false
     },
     slidesPerView: 'auto',
     pagination: {
       el: '.clients-slider .swiper-pagination',
       clickable: true
     },
     breakpoints: {
       320: {
         slidesPerView: 2,
         spaceBetween: 40
       },
       480: {
         slidesPerView: 3,
         spaceBetween: 60
       },
       640: {
         slidesPerView: 4,
         spaceBetween: 80
       },
       992: {
         slidesPerView: 6,
         spaceBetween: 120
       }
     }
   });

       new Swiper('.gallery-slider', {
     speed: 400,
     loop: true,
     centeredSlides: true,
     autoplay: {
       delay: 4000,
       disableOnInteraction:false
     },
     slidesPerView: 'auto',
     pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
       clickable: true
     },
     breakpoints: {
       320: {
         slidesPerView: 1,
         spaceBetween: 20
       },
       575: {
         slidesPerView: 2,
         spaceBetween: 20
       },
       768: {
         slidesPerView: 3,
         spaceBetween: 20
       },
       992: {
         slidesPerView: 5,
         spaceBetween: 20
       }
     }
   });
 }
 startAutoplay() {
  let index = 0;
  setInterval(() => {
    this.activeImage = this.images[index];
    index = (index + 1) % this.images.length;
  }, this.autoplayInterval);
}

}
