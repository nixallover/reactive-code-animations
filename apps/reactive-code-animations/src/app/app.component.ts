import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  path: string;
}
@Component({
  selector: 'rca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems: MenuItem[] = [
    { name: 'Carousel', path: '/examples/carousel' },
    { name: 'Nx Cloud Illustration', path: '/examples/nx-cloud-illustration' },
    { name: 'Click Counter', path: '/examples/click-counter' },
    { name: 'Series', path: '/examples/series' },
  ];
}
