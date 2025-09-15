import { Component } from '@angular/core';
import { Dataservice } from '../dataservice';

@Component({
  selector: 'app-accounts',
  standalone: false,
  templateUrl: './accounts.html',
  styleUrl: './accounts.css'
})
export class Accounts {
users:any[]=[]
bankName:any[]=[]
filteredData:any[]=[]
selectedBank:any
branchLocation:any
selectedBranch:any
selectedAccount:any
total=0;
constructor(private Dataservice:Dataservice){
  this.refresh()
}

refresh(){
  this.Dataservice.getData().subscribe(x=>{
    this.users=x;
    let b=this.users.map(x=>x.bankName)
    let s=new Set(b)
    this.bankName=[...s]
    this.filteredData=this.users

    this.total=this.filteredData.reduce((t,i)=>t+i.balance,0)
  })
}

 filterData(){
    let temp = this.filteredData
    if(this.selectedBank == ''){
      temp = this.users
    }
    if(this.selectedBank){
      temp = this.users.filter(x => x.bankName == this.selectedBank)
        let br = temp.map(x=>x.branchLocation)
      let sr = new Set(br)
      this.branchLocation = [...sr]
    
    }
    if(this.selectedBranch){
      temp = temp.filter(x => x.branchLocation == this.selectedBranch)
    }
    this.filteredData = temp
  }



}
