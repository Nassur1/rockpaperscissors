import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nassur';
  userselected:string;
  compselected:string;
  compWeapon=["rock","paper","scissors"];
  userscore=0;
  compscore=0;
  action:string;
  status:String;
  userpick(weapon:string){
    this.userselected=weapon
    console.log('user selected',this.userselected)
    setTimeout(()=>{
      const randomnumber=Math.floor(Math.random()*3)
      this.compselected=this.compWeapon[randomnumber]
      console.log('comp selected',this.compselected)
      this.checkresult()

    },500)

  }
clearfield(){
  setTimeout(()=>{
  this.status=""
  this.userselected=""
  this.compselected=""
},1300)
 
}

reset(){
  this.status=""
  this.userselected=""
  this.compselected=""
  this.userscore = 0;
  this.compscore = 0;
}


  win(user,comp){
  this.userscore++; 
  this.userselected=user
  this.compselected=comp
  this.action="beats"
  this.status="you win!"
  this.clearfield()
  
  }
  lose(user,comp){
    this.compscore++
    this.userselected=user
  this.compselected=comp
  this.action="loses to"
  this.status="you lose!" 
  this.clearfield()

  }
  draw(user,comp){
    this.userselected=user
  this.compselected=comp
this.action="and"
this.status="you draw" 
 this.clearfield()
}
  checkresult(){
    const userchoice=this.userselected
    const computerchoice=this.compselected
    switch(userchoice+computerchoice){
      case"rockscissors":
      case"paperrock":
      case"scissorspaper":
      this.win(userchoice,computerchoice)
      break;
      case "scissorsrock":
      case "rockpaper":
      case "paperscissors":
      this.lose(userchoice,computerchoice)
      break;
      default:
      this.draw(userchoice,computerchoice)
        break;


     
    }

  }
};