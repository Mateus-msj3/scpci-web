import { Component, OnInit } from '@angular/core';
import {LoadingService} from "../../service/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public loadindService: LoadingService) { }

  ngOnInit(): void {
  }

}
