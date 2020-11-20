import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = "http://localhost:3001/usuarios";

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

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateUser(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateKeypass(id: number, senha: Object): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch<Usuario>(url, senha).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteUser(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Usuario>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Algo deu errado!', true)
    return EMPTY
  }
}
