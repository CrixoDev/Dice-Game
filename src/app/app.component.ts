import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dice-game';
  dice1 = '../assets/img/dice1.png';
  dice2 = '../assets/img/dice2.png';
  number1 = 1;
  number2 = 2;
  
  animateClass: string = '';
  showWinMessage: boolean = false;

  rollDice(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;

    this.dice1 = '../assets/img/dice' + this.number1 + '.png';
    this.dice2 = '../assets/img/dice' + this.number2 + '.png';

    
    this.animateClass = 'animate__animated animate__bounce';
    setTimeout(() => {
      this.animateClass = '';
    }, 1000); 
     // Mostrar el mensaje de victoria después de 1 segundo
     setTimeout(() => {
      this.showWinMessage = this.number1 === this.number2;
    }, 1000);
  }
}
