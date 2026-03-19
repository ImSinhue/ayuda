import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  readonly faqs = [
    {
      question: '¿De qué eres capaz?',
      answer:
        'Si te preguntas "¿qué eres capaz?", puedo revisar un proyecto, analizar su estructura y guiarte para ejecutarlo con los comandos adecuados.',
    },
    {
      question: '¿Eres capaz de que te pase un proyecto y lo ejecutes?',
      answer:
        'Sí. Compárteme el repositorio o los archivos clave, junto con el objetivo esperado, y puedo ayudarte a instalar dependencias, ejecutar el proyecto y revisar los resultados.',
    },
  ];
}
