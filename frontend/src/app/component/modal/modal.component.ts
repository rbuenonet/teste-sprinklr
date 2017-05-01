import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() info : any = "";
  @Output() option : any = new EventEmitter();

  private time : number;

  constructor() { }

  ngOnInit() {
    console.log(this.info)
  }

  close(){
    this.info.display = 'none';
  }

  select(option){
    this.close();
    this.option.next(option);
  }

  valueTime(){
    this.close();
    this.option.next({button: this.time})
  }

}
