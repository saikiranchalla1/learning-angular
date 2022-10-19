import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [
    // LoggingService, REMOVE THIS HERE SINCE ITS ADDED TO THE APP MODULE
    // AccountService REMOVE THIS TO USE THE SERVICE FROM THE PARENT
  ]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  constructor(private loggingService: LoggingService, private accountsService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    
    // this.loggingService.logStatusChange(accountStatus); WE NO LONGER NEED THIS HERE, SINCE WE'RE USING IT IN THE ACCOUNTS SERVICE
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
