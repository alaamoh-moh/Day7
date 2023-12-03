import { Component , Output ,EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent {
@Output() Usertrans : EventEmitter<User> = new EventEmitter<User> ();

users : User[] = [
  {name:"alaa",
    city:"alex",
    id:1,

  },
  {name:"alaa",
  city:"alex",
  id:2,

},
{name:"alaa",
city:"alex",
id:3,

},
]

adduser(par:any){
  this.users.push({
    name:par,
  city:"alex",
  id:2,
  })
}

delet(index:number){
  this.users.splice(index,1);


}

usertrans (pat:User){
  this.Usertrans.emit(pat);
}

};

