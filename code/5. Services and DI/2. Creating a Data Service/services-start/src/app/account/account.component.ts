import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';
// import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
    LoggingService,
    AccountService
  ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountService) {

  }
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});

    this.accountsService.updateStatus(this.id, status);


    //WRONG WAY TO USE A SERVICE
    // const service = new LoggingService();
    // service.logStatusChange(status);

    // RIGHT WAY
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
