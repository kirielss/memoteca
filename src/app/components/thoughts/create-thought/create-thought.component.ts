import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  pensamento = {
    id: '1',
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: 'modelo1'

  }

  constructor() {}

  ngOnInit(): void {

  }

  createThought() {
    alert('Pensamento criado com sucesso!');
  }

  cancelThought() {
    alert('Pensamento cancelado com sucesso!');
  }

}
