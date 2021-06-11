import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HospedeService } from 'src/app/core/services/hospede.service';
import { Hospede } from 'src/app/shared/models/hospedes.model';

@Component({
  selector: 'app-hospedes',
  templateUrl: './hospedes.component.html',
  styleUrls: ['./hospedes.component.css']
})
export class HospedesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    // private hospedeService: HospedeService,
  ) { }

  hospedeForm: FormGroup;
  hospede: Hospede;
  hospedes: Hospede[] = [];

  mockHospede: Hospede[] = [
    {
      id: 1,
      nome: 'Matheus',
      email: 'matheus@yahoo.com.br',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },
    {
      id: 1,
      nome: 'Brenda',
      email: 'BrendaH-tinha@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },
    {
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    },{
      id: 1,
      nome: 'Ana',
      email: 'LaRevoltadita@yahoo.com',
      rg: '321',
      cpf: '123',
      dataNasc: '31-10-1995',
      telefone: '12-95123123',
      status: 1
    }

  ];


  dataSource = new MatTableDataSource<Hospede>(this.mockHospede);
  columnsToDisplay = [
    'id',
    'nome',
    'email',
    'rg',
    'cpf',
    'dataNasc',
    'telefone',
    'status',
    'editar',
    'excluir'
  ];

  ngOnInit(): void {
    this.getHospedes();
  }

  getHospedes(): void {
    console.log('error', `Falha ao carregar Hospedes.`);

    // this.hospedes.push(new Hospede());
    // this.dataSource.data = this.hospedes;
    // this.hospedeService.getAll().subscribe(
    //   (hospedes) => {
    //     this.hospedes = hospedes;
    //     this.dataSource.data = this.hospedes;
    //   },
    //   (err) => {
    //     console.log('error', `Falha ao carregar Hospedes.`);
    //     console.log(err);
    //   }
    // );
  }

  applyFilter(event: Event) {
    console.log(event, "event");
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  adicionarHospede(modalHospede): void {
    console.log('adicionarHospede');
     this.hospede = new Hospede();
     this.iniciaForm();

     const dialogRef = this.dialog.open(modalHospede, {
       width: '850px'
     });

  }

  iniciaForm(){
    console.log("iniciaform ok")
    //   this.reviewForm = this.formBuilder.group({
    //   sprintId: ['', Validators.required],
    //   tituloReview: ['', Validators.required],
    //   dataReview: ['', Validators.required],
    //   horaInicio: ['', Validators.required],
    //   horaFim: ['', Validators.required],
    //   recorrencia: [false, Validators.required],
    //   tipoRecorrencia: [''],
    //   tempoRecorrencia: [''],
    //   diaRecorrencia: [''],
    //   status: [1, Validators.required],
    //   idParticipante: ['', Validators.required]
    // })
  }
}



