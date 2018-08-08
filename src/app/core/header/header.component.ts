import { Component, Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()
export class HeaderComponent  {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService, private router: Router) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  
  onGetData() {
  this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
