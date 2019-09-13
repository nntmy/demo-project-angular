import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Subscription } from "rxjs";
import { Todo } from "./../../todo";

import { NgxSoapService, Client } from "ngx-soap";

Todo;
Subscription;
TodoService;

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  @Output("outColor") colorConnect = new EventEmitter<string>();
  sendColor: string;
  public colorDefault: string;
  public check: boolean = false;

  //Soap
  client: Client | any;

  message: any;
  callColumns = [
    "Call ID",
    "Type",
    "Uri",
    "Display Name",
    "Duration",
    "Timestamp"
  ];
  listCallsLog = [];
  //Soap
  //public clickValue:boolean = false ;
  constructor(public todoSer: TodoService, private soap: NgxSoapService) {
    // this.soap.createClient('assets/CallLog.wsdl').then(client => this.client = client);
    // console.log('soapppppppp',this.client);
  }

  ngOnInit() {
    this.colorDefault = "CE398C";
    const options2 = {
      endpoint: `https://10.250.161.37:8043/sopi/services/CallLog`
    };
    this.soap
      .createClient("./../assets/CallLog.wsdl", options2)
      .then(client => {
        client.addHttpHeader(
          "Authorization",
          "Basic " + btoa("8410000@dev.team.com:1234")
        );
        this.client = client;
        console.log("client", this.client);
        this.getCallsLog();
      });
  }

  getColor(event: string) {
    this.colorDefault = event;
    this.sendColor = event; //gan mau cho input
    //console.log('mau lay duoc '+ this.colorDefault);
  }
  //nhan mau tu todo
  setMyStyles() {
    //console.log('set my style');
    let styles = {
      "background-color": this.colorDefault
    };
    return styles;
  }

  getCallsLog() {
    const body = {
      opi: "8410000@dev.team.com"
    };
    console.log("22222");
    console.log("3333333", this.client);
    this.client.getIncomingCallLogs(body).subscribe(
      res => {
        console.log(
          "logs data",
          res.result.getCallLogsReturn.getCallLogsReturn
        );
        this.listCallsLog = res.result.getCallLogsReturn.getCallLogsReturn;
      },
      err => {
        console.log("eeeeeeeeeeeeeeeeeeee", err);
      }
    );
  }
}
