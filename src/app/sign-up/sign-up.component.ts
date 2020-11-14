import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { MyServeceService } from '../service/my-servece.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user;
  userList: any;
  isSubmited = false;
  constructor(private userService: MyServeceService) {
    this.user = new User('', '', '', '', '', '', '', '', '');
   }

  ngOnInit(): void {
    this.getUsers();
  }
 submit(): void {
  this.userService.saveUser(this.user)
  .subscribe(user => {
    console.log(user);
  });
  this.isSubmited = true;
 }

 getUsers(): void{

  this.userService.getUsers()
  .subscribe(data => {
    console.log(data);
    this.userList = data;
  });
}

}
