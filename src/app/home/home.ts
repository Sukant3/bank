import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { Mail } from '../mail';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  time: any = 0
  id: any
  actual: any
  isRunning = false
  s: any = 0
  ms: any = 0
  m: any = 0
  sec: any = 0
  to: string = ''
  subject: string = ''
  text: string = ''
  email: any={}
  left = { time: 0, id: null as any, m: 0, sec: 0, ms: 0 };


  right = { time: 0, id: null as any, m: 0, sec: 0, ms: 0 };
  constructor(private mail: Mail) {
  }

  sendmail() {
    this.mail.postmail(this.email).subscribe(x => {
      
    })
    alert("Email Successfully sent")

  }

  ngOnInit(): void {

  }
  start() {
    if (this.isRunning = true) {
      this.id = setInterval(() => {
        this.time = this.time + 1;

        this.s = Math.floor(this.time / 100)
        this.ms = this.time % 100
        this.m = Math.floor(this.s / 60)
        this.sec = this.s % 60
      }, 10)
    }

  }
  pause() {
    this.isRunning = false;
    clearInterval(this.id)
  }
  stop() {
    this.pause()
    this.s = 0
    this.m = 0
    this.ms = 0
    this.sec = 0
  }


  startLeft() {
    this.stopLeft();
    this.left.time = 0;
    this.left.id = setInterval(() => {
      this.left.time++;
      let s = Math.floor(this.left.time / 100);
      this.left.ms = this.left.time % 100;
      this.left.m = Math.floor(s / 60);
      this.left.sec = s % 60;
    }, 10);
  }

  stopLeft() {
    if (this.left.id) clearInterval(this.left.id);
  }

  startRight(event: MouseEvent) {
    event.preventDefault();
    this.stopRight();
    this.right.time = 0;
    this.right.id = setInterval(() => {
      this.right.time++;
      let s = Math.floor(this.right.time / 100);
      this.right.ms = this.right.time % 100;
      this.right.m = Math.floor(s / 60);
      this.right.sec = s % 60;
    }, 10);
  }

  stopRight() {
    if (this.right.id) clearInterval(this.right.id);
  }

  pauseAll() {
    this.stopLeft();
    this.stopRight();
  }

  stopAll() {
    this.pauseAll();
    this.left = { time: 0, id: null, m: 0, sec: 0, ms: 0 };
    this.right = { time: 0, id: null, m: 0, sec: 0, ms: 0 };
  }


click(){
  alert('success')
}

}
