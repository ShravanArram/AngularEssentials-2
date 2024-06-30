import { Component,EventEmitter,Input,Output,Signal, computed, input, signal } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


// interface User{

//   avatar:string,
//   name:string,
//    id:string;
// } 

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})



export class UserComponent {

  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;
  // @Input() id!:string;
  @Input({required:true}) user!:User;

  @Input({required:true}) selected!:Boolean;
  @Output() select = new EventEmitter();

  // name = input.required<string>(); //This is signal method of passing values
  
  
  //selecteduser = DUMMY_USERS[randomIndex];
  //selecteduser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(() => 'assets/users/' + this.selecteduser().avatar);

  get imagePath() {
   return  'assets/users/' + this.user.avatar;
  }

  onSelectUser()
  {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // //this.selecteduser = DUMMY_USERS[randomIndex];
    // this.selecteduser.set(DUMMY_USERS[randomIndex]);
  }
  
}
