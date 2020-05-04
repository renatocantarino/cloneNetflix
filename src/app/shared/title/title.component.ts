import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() movie: any;
  @ViewChild('trailer', { static: true }) trailer: ElementRef<HTMLVideoElement>;
  constructor() { }


  ngOnInit(): void {
  }

  play() {

    this.trailer.nativeElement.play()
  }

  stop() {
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause()
  }

  getMuted() {
    return this.trailer.nativeElement.muted;
  }

  toggleSound() {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }


}
