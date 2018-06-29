import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { FlepzAccountService } from '../services/flepz-account.service';

@Injectable()
export class FlepzAccountExistsGuard implements CanActivate {
    constructor(private flepzAccountService: FlepzAccountService, private router: Router) { }

    execute(): boolean {
        if (this.flepzAccountService.account) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }

    canActivate(): boolean {
        return this.execute();
    }
}
