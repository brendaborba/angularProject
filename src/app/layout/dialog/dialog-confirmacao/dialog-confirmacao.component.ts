import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Data {
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-dialog-confirmacao',
  templateUrl: './dialog-confirmacao.component.html',
  styleUrls: ['./dialog-confirmacao.component.css']
})
export class DialogConfirmacaoComponent implements OnInit {

  titulo: string = '';
  texto: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Data) { }

  ngOnInit(): void {
    this.titulo = this.data.titulo;
    this.texto = this.data.texto;
  }
}
