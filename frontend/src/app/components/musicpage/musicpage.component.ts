import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicpage',
  templateUrl: './musicpage.component.html',
  styleUrls: ['./musicpage.component.sass']
})
export class MusicpageComponent implements OnInit {
  testTitle: string = "Dainsleif";
  testAudioUrl: string = "../assets/Dainsleif.mp3";
  isplaying = false;
  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    this.audio.src = this.testAudioUrl;
    this.audio.crossOrigin = 'anonymous';
    this.audio.volume = 0.5;
    this.audio.loop = true;
  }

  play() {
    console.log("play");
    if (this.isplaying) {
      this.audio.pause();
      
      this.isplaying = false;
    } else {
      var prom = this.audio.play();
      if (prom) {
        console.log("Asdf");
      }
      this.isplaying = true;
    }
  }

  changeVol(event: any) {
    this.audio.volume = event.value;
  }

}
