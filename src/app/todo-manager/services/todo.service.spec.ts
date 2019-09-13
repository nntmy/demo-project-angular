import { TestBed } from "@angular/core/testing";

import { TodoService } from "./todo.service";

import { Todo } from "../todo";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { of } from "rxjs";
import { HttpClientModule, HttpClient } from "@angular/common/http";

describe("TodoService", () => {
  let httpClientSpy: { get: jasmine.Spy,post:jasmine.Spy};
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ HttpClient, TodoService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post']);
    service = new TodoService(<any> httpClientSpy);
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const expected: Todo[] =
      [
      { id: 1, title: "A", date: "2019-09-12", status: true, block: "A" },
     
    ];

    httpClientSpy.get.and.returnValue(of(expected));

    service.getTodo().subscribe(
      heroes => expect(heroes).toEqual(expected, 'expected '),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should add expected heroes ', () => {
    const expected: Todo[] =
      [
      { id: 1, title: "A", date: "2019-09-12", status: true, block: "A" },
      { id: 2, title: "B", date: "2019-09-12", status: true, block: "B" },
      
    ];
    const exp :Todo={ id: 3, title: "B", date: "2019-09-12", status: true, block: "B" };

    //spyOn(service,'addNewtask').and.returnValue(of(expected));
    httpClientSpy.post.and.returnValue(of(expected));

    service.addNewtask(exp).subscribe(
      heroes => {expect(heroes.length).toEqual(2);
      console.log('kkkkkkkkkkkkkkkkkkkkk',heroes,heroes.length);},
      fail
    );
    //expect(service.addNewtask(exp)).toBe(3, 'one call');
    
  });
});
