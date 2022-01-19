import { Component, OnInit } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

/* Import constants */
import * as PROJECT_CONSTANTS from '../../../utils/Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public title = PROJECT_CONSTANTS.PROJECT_NAME.FULL;
  public loginConst = PROJECT_CONSTANTS.LOGIN;

  constructor() { }

  ngOnInit(): void {
  }

}
