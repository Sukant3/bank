import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';
import Papa from 'papaparse';
@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards implements OnInit {
  data:any[]=[]
  csv :any
  url:any
  config = {
	quotes: false, //or array of booleans
	quoteChar: '"',
	escapeChar: '"',
	delimiter: ",",
	header: true,
	newline: "\r\n",
	skipEmptyLines: false, //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.

}
constructor(private Dataservice:Dataservice){}
ngOnInit(): void {
    this.Dataservice.getData().subscribe(x=>{this.data = x;
this.csv = Papa.unparse(this.data,this.config)

let csvData = new Blob([this.csv], { type: 'text/csv;charset=utf-8;' });
    this.url = window.URL.createObjectURL(csvData);

      })
      
    
}
}
