import { Component } from '@angular/core';
import { UserService } from '../../../shared/_services/user.service';

@Component({
  selector: 'app-subscription-banner',
  templateUrl: './subscription-banner.component.html',
  styleUrls: ['./subscription-banner.component.css'],
})
export class SubscriptionBannerComponent {
  user = false;
  dialogVisible = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  showDialog() {
    this.dialogVisible = true;
  }

  signUp() {
    this.userService.signUp();
    this.dialogVisible = false;
  }
}
