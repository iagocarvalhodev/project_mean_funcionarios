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
    this.getFuncionarios();
  }

  // adicionar funcionario
  addFuncionario(form: NgForm){
    this.funcionarioService.postFuncionario(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Funcionario Registrado' });
        this.getFuncionarios();
      });
  }

  // trazer todos os funcionarios
  getFuncionarios() {
    this.funcionarioService.getFuncionarios()
      .subscribe(res => {
          this.funcionarioService.funcionarios = res as Funcionario[];
          console.log(res);
      });
  }





  // função para resetar formulario
  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.funcionarioService.selectedFuncionario = new Funcionario;
    }
  }
}
