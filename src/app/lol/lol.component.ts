import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrl: './lol.component.css'
})
export class LolComponent implements OnInit {
  private audio: HTMLAudioElement | null = null;
  catto = 'assets/catto.jpg';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecuta este código en el navegador
      this.audio = new Audio('assets/laugh.mp3');
      this.audio.loop = true;
      this.audio.load();
      this.audio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
