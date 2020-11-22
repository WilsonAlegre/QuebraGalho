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

  baseUrl = "http://localhost:4200/api/usuarios";

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
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(_id: string): Observable<Usuario> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<Usuario>(url).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }

  updateUser(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/${usuario._id}`;
    return this.http.put<Usuario>(url, usuario).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }

  updateKeypass(_id: string, senha: Object): Observable<Usuario> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.patch<Usuario>(url, senha).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteUser(_id: string): Observable<Usuario> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.delete<Usuario>(url).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Algo deu errado!', true)
    return EMPTY
  }
}
