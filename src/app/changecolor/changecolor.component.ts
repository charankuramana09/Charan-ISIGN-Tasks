import { Component } from '@angular/core';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrl: './changecolor.component.sass'
})
export class ChangecolorComponent {
  backgroundColor: string = 'red'; // Initial background color

  // Function to change background color
  changeBackgroundColor(color: string): void {
    this.backgroundColor = color;
  }
}
