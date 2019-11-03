import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user-class/user';
import { UserService } from './user-http/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
