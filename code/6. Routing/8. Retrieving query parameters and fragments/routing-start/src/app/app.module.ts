import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

// ADD THE IMPORTS

import {Routes, RouterModule} from '@angular/router';
// DEFINE THE ROUTES HERE

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'users', component: UsersComponent },
  {path: 'users/:id/:name', component: UsersComponent }, //Add a new route to add id to the path
  {path: 'servers', component: ServersComponent },
  {path: 'servers/:id/edit', component: EditServerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
