import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth';
import { Router } from '@angular/router';

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  estilo: string;
  precio: number;
  metrosCuadrados: number;
  habitaciones: number;
  banos: number;
  niveles: number;
  imagenUrl: string;
  esPremium: boolean;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo implements OnInit {
  proyectos: Proyecto[] = [];
  filtroActivo: string = 'Todos';
  cargando: boolean = true;

  private apiUrl = 'https://localhost:7248/api/Catalogo'; 

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.cargando = true;
    this.http.get<Proyecto[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.proyectos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al conectar con la tabla Proyectos:', err);
        this.cargando = false;
      }
    });
  }

  setFiltro(estilo: string) {
    this.filtroActivo = estilo;
  }

  get proyectosFiltrados() {
    if (this.filtroActivo === 'Todos') return this.proyectos;
    return this.proyectos.filter(p => p.estilo === this.filtroActivo);
  }

  explorarModelo(modeloElegido: any) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    const misRendersGuardados = JSON.parse(localStorage.getItem('mis_renders') || '[]');
    const nuevoRender = {
      id: new Date().getTime(),
      nombreOriginal: modeloElegido.nombre,
      fechaAgregado: new Date(),
      modeloDatos: modeloElegido
    };
    
    misRendersGuardados.push(nuevoRender);
    localStorage.setItem('mis_renders', JSON.stringify(misRendersGuardados));

    this.router.navigate(['/mis-renders']);
  }
}