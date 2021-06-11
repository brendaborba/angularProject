import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layout/sidebar/sidebar.component';
import { ReservasComponent } from './layout/aside-content/agendamentos/reservas/reservas.component';
import { HospedagensComponent } from './layout/aside-content/agendamentos/hospedagens/hospedagens.component';
import { CadastroComponent } from './layout/aside-content/quartos/cadastro/cadastro.component';
import { CadastroFuncionariosComponent } from './layout/aside-content/usuarios/cadastro-funcionarios/cadastro-funcionarios.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideContentComponent } from './layout/aside-content/aside-content.component';
import { HospedesComponent } from './layout/aside-content/agendamentos/hospedes/hospedes.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogConfirmacaoComponent } from './layout/dialog/dialog-confirmacao/dialog-confirmacao.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ReservasComponent,
    HospedagensComponent,
    CadastroComponent,
    CadastroFuncionariosComponent,
    HeaderComponent,
    AsideContentComponent,
    HospedesComponent,
    DialogConfirmacaoComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
