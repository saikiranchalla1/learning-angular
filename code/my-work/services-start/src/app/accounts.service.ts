import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
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
      
      constructor(private loggingSerivce: LoggingService) {

      }

      statusUpdated= new EventEmitter<string>();

      addAccount(name: string, status: string) {
          this.accounts.push({name: name, status: status});
          this.loggingSerivce.logStatusChange(status);
      }

      updateStatusStatus(id: number, status: string) {
          this.accounts[id].status = status;
          this.loggingSerivce.logStatusChange(status);
          this.statusUpdated.emit(status);
      }
}
