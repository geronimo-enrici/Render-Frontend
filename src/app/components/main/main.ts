import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Main {
  @ViewChild('viewer') viewer!: ElementRef;

  toggleFullscreen() {
    const viewerElement = this.viewer.nativeElement;
    if (viewerElement.requestFullscreen) {
      viewerElement.requestFullscreen();
    } else if ((viewerElement as any).webkitRequestFullscreen) {
      (viewerElement as any).webkitRequestFullscreen(); 
    }
  }
  camTarget = '0m 1m 0m'; 
  camOrbit = '45deg 60deg 10m'; 

  irACuarto(cuarto: string) {
    if (cuarto === 'general') {
      this.camTarget = '0m 1m 0m'; 
      this.camOrbit = '45deg 60deg 15m'; 
    } 
    else if (cuarto === 'cocina') {

      this.camTarget = '2.5m 1.5m -1.2m'; 
      this.camOrbit = '0deg 75deg 3m';
    } 
    else if (cuarto === 'habitacion') {
      this.camTarget = '-3m 1.5m 2m';
      this.camOrbit = '90deg 80deg 3m'; 
    }
  }
}