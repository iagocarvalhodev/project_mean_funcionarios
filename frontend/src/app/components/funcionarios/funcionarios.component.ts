import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
  }

}
