import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mis-renders',
  standalone: true,
  templateUrl: './misrenders.html',
  styleUrl: './misrenders.css'
})
export class MisRenders implements OnInit {
  misProyectos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://localhost:7248/api/renders')
      .subscribe({
        next: (data: any) => {
          this.misProyectos = data;
        },
        error: (err) => console.error('Error al cargar renders', err)
      });
  }
}