import { LoggingService } from "./logging.service";
import {Injectable} from '@angular/core';

@Injectable() // ADD THIS TO THE SERVICE "WHERE" A SERVICE IS TO BE INJECTED
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];


      constructor(private loggingService: LoggingService){}

      addAccount(name: string, status: string) {
        this.accounts.push({
            name: name, 
            status: status
        });
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}
