import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';


declare var M: any;


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
  }

  addFuncionario(form: NgForm){
    this.funcionarioService.postFuncionario(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Funcionario Registrado' });
      });
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.funcionarioService.selectedFuncionario = new Funcionario;
    }
  }
}
