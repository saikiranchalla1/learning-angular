import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverCOntentInput : ElementRef; // CODE CHANGES HERE
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput);
    console.log(nameInput.value);
    console.log(this.serverCOntentInput);
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
     this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverCOntentInput.nativeElement.value})
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });

    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverCOntentInput.nativeElement.value});
  }

}
