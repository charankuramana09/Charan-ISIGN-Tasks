import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    trigger('buttonAnimation', [
      state('void', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),
      transition('void => *', animate('500ms ease-out')),
      transition('* => void', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  
  // Function to disable the Disable button
  disableButton(): void {
    console.log("Disable button clicked");
    // Disable the button
    const disableBtn = document.getElementById("disableBtn") as HTMLButtonElement;
    disableBtn.disabled = true;
  }
  }

