import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() opened: boolean = false
  @Output() menuToggle : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  toggle()
  {
    this.opened = !this.opened
    this.menuToggle.emit(this.opened)
  }
}
