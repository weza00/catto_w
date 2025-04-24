import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrl: './lol.component.css'
})
export class LolComponent {
  private audio = new Audio('assets/laugh.mp3');
  catto = 'assets/catto.jpg';
  
  ngOnInit(): void {
    this.audio.load();
    this.audio.loop = true;
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
