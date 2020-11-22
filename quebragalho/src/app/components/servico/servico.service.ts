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

  baseUrl = "http://localhost:4200/api/servicos";

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
      catchError((e) => this.errorHandler(e))
    );
  }
    
  
  getAll(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.baseUrl).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(_id: string): Observable<Servico> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<Servico>(url).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }
  
  update(servico: Servico): Observable<Servico> {
    const url = `${this.baseUrl}/${servico._id}`;
    return this.http.put<Servico>(url, servico).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(_id: string): Observable<Servico> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.delete<Servico>(url).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage('Algo deu errado!', true)
    return EMPTY
  }
}
