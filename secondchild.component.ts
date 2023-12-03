import { Component ,Input } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent {
@Input () user! :User;

}
