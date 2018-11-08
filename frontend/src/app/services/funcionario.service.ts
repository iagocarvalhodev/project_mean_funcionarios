import { Funcionario } from './../models/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  selectedFuncionario: Funcionario;
  funcionarios: Funcionario[];

  readonly URL_API = 'http://localhost:3000/api/funcionarios';

  constructor(private http: HttpClient) {
      this.selectedFuncionario = new Funcionario();
   }


  getFuncionarios() {
    return this.http.get(this.URL_API);
  }

  postFuncionario(funcionario: Funcionario) {
    return this.http.post(this.URL_API, funcionario);
  }

  putFuncionario(funcionario: Funcionario) {
    return this.http.put(this.URL_API + `/${funcionario._id}`, funcionario);
  }

  deleteFuncionario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
