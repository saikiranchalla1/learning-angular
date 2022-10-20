import {NgModule} from '@angular/core'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

// DEFINE THE ROUTES HERE

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent },
    ] },
    // {path: 'users/:id/:name', component: UsersComponent },
    {path: 'servers', component: ServersComponent, children:[
      {path: ':id', component: ServerComponent },
    {path: ':id/edit', component: EditServerComponent },
    ] },
    {path: 'not-found', component: PageNotFoundComponent},
    {path: "**", redirectTo: '/not-found'}, // catch all paths that are not defined using **. This must be the last route in the list
    // {path: 'servers/:id', component: ServerComponent },
    // {path: 'servers/:id/edit', component: EditServerComponent },
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
