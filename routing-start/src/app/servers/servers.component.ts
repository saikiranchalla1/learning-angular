import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    // here although we are using relative path, the navigate method doesn't know which path we are.
    // so this doesn't throw any error.
    // we can modify this behavior by adding the relativeTo parameter
    // we can get the previous route the user is on using the Activated Route
    
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
