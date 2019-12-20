import {Input, Component, Output, EventEmitter, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  focus() {
    this.error = '';
  }

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.value)
        .then(value => this.router.navigate(['/tours']))
        .catch(reason => this.error = "Invalid email or password")
    }
  }
}
