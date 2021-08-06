import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter();

  public valor: number;
  public destino: number;

    public transferir(): void{
        console.log('Solicitada nova transferencia');
        const objEmitir = {valor: this.valor, destino: this.destino}
        this.aoTransferir.emit(objEmitir);

        this.limparCampos();
    }

    public limparCampos(): void{
      this.valor = 0;
      this.destino = 0;
    }

}
