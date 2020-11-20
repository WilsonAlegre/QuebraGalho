import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { Servico } from './servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  baseUrl = "http://localhost:3001/servicos";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['red-snackbar'] : ['green-snackbar', 'azul-escuro']
    });
  }

  
  create(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.baseUrl, servico).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
    
  
  getAll(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(id: number): Observable<Servico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Servico>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  update(servico: Servico): Observable<Servico> {
    const url = `${this.baseUrl}/${servico.id}`;
    return this.http.put<Servico>(url, servico).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Servico> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Servico>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage('Algo deu errado!', true)
    return EMPTY
  }
}
