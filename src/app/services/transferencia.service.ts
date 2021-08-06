import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTransferencia: any[];

  private url: string = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {
    this.listaDeTransferencia = []
  }

  public get transferencias(){
    return this.listaDeTransferencia;
  }

  public adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    //this.transferencias.push(transferencia);
    return this.http.post<Transferencia>(this.url , transferencia);
  }

  private hidratar(transferencia): void{
    transferencia.data = new Date();
  }

  getTodasTransferencias(): Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>(this.url);
  }

}
