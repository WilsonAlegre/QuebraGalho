import { ServicoService } from './../servico.service';
import { Servico } from './../servico.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServicoDetalheResolver implements Resolve<Servico> {

    constructor(private servicoService: ServicoService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {

        let _id = route.params['_id'];

        return this.servicoService.getById(_id);
    }
}