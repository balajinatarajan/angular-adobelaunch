import { Injectable } from '@angular/core';
import { FlepzAccount } from '../interfaces/flepz-account.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FlepzAccountService {

  account: FlepzAccount;

  constructor(
    private http: HttpClient
  ) { }

  getAccount(account: FlepzAccount): Observable<FlepzAccount> {
    return this.http.get(environment.APIS.FLEPZ_ACCOUNT)
      .pipe(map((response) => {
        this.account = response as FlepzAccount;
        return this.account;
      }));
  }

}
