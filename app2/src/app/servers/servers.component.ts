import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Creation';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created';
  }

  onUpdateServerName(event: Event) {
    // first i type event.target.value but it didnt work
    // then i type <HTMLInputElement>event.target.value to explain the .target but it didnt work because of .value
    // finally i type (<HTMLInputElement>event.target).value; and it works! :)
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
