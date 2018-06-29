import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlepzAccount } from '../../interfaces/flepz-account.interface';
import { FlepzAccountService } from '../../services/flepz-account.service';
import { UnsubscribeComponent } from '../../abstract/unsubscribe-component.abstract';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-flepz',
  templateUrl: './flepz.component.html',
  styleUrls: ['./flepz.component.scss']
})
export class FlepzComponent extends UnsubscribeComponent implements OnInit {
  flepzAccountForm: FormGroup;
  @Output() success = new EventEmitter<FlepzAccount>();
  @Output() error = new EventEmitter<Error>();

  constructor(
    private fb: FormBuilder,
    private flezpAccountService: FlepzAccountService,
  ) {
    super();
  }

  ngOnInit() {
    this.flepzAccountForm = this.fb.group({
      id: [],
      firstName: [],
      lastName: [],
      email: [],
      phone: [],
      zipCode: []
    });
  }

  submit($event: Event): void {
    $event.preventDefault();
    this.flezpAccountService.getAccount(this.flepzAccountForm.value)
      .pipe(takeUntil(this.destroy$)).subscribe((account) => {
        this.success.emit(account);
      });
  }

}
