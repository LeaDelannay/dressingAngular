import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clothe-detail',
  templateUrl: './clothe-detail.component.html',
  styleUrls: ['./clothe-detail.component.css']
})
export class ClotheDetailComponent implements OnInit {

   @Input() name;

   constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onEdit(){

  }

  onDelete(){

  }
  
}
