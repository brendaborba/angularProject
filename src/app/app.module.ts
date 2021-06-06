import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layout/sidebar/sidebar.component';
import { AgendamentosComponent } from './layout/aside-content/agendamentos/agendamentos.component';
import { QuartosComponent } from './layout/aside-content/quartos/quartos.component';
import { UsuariosComponent } from './layout/aside-content/usuarios/usuarios.component';
import { ReservasComponent } from './layout/aside-content/agendamentos/reservas/reservas.component';
import { HospedagensComponent } from './layout/aside-content/agendamentos/hospedagens/hospedagens.component';
import { CadastroComponent } from './layout/aside-content/quartos/cadastro/cadastro.component';
import { CadastroFuncionariosComponent } from './layout/aside-content/usuarios/cadastro-funcionarios/cadastro-funcionarios.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideContentComponent } from './layout/aside-content/aside-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AgendamentosComponent,
    QuartosComponent,
    UsuariosComponent,
    ReservasComponent,
    HospedagensComponent,
    CadastroComponent,
    CadastroFuncionariosComponent,
    HeaderComponent,
    AsideContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
