import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  // Descobrir como faz com angular e de maneira correta
  // Alterar no html os ID Activeclass1,2 3 e os ClickMenu1,2 e 3
  clickMenu1() {
    document.getElementById('ActiveClass1').classList.toggle('ativo')
  }
  clickMenu2() {
    document.getElementById('ActiveClass2').classList.toggle('ativo')
  }
  clickMenu3() {
    document.getElementById('ActiveClass3').classList.toggle('ativo')
  }




}
