import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  lista: string[] = ['REGISTRO','CARGA DE DOCUMENTOS','INFORMACION PERSONAL','INFORMACION FINANCIERA','INFORMACION BANCARIA','BENEFICIARIOS','CONFIRMACION'] 

}
