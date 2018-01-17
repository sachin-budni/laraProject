import { Component } from '@angular/core';

@Component({
  selector: 'test-comp',
  template: '<h1> {{title}} </h1>',
  styles:[
    
  ],
  animations:[
    
  ]
})

export class TestComponent
{
    title = 'component from test';
    public componenentName = "componenent Name from test";
}
