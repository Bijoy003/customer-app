import { Component, Inject } from '@angular/core';
import { TestDiHeirarchyCounterService } from '../../../core/Services/test-di-heirarchy-counter.service';
import { ParentLoggerService } from '../../../core/Services/parent-logger.service';
import { ChildLoggerService } from '../../../core/Services/child-logger.service';

const APP_CONFIG = Object.freeze({
  apiURL:'http://localhost:4200',
  isTest: true,
})

//Hierarchical Injectors → Where is it created?
//Factory Providers → How is it created?
//Multi-Providers → How many values exist?

// Factory Providers (custom creation logic): Angular calls a function to create the value
export function getLogger(isParent: Boolean)
{
  return isParent ? new ParentLoggerService() : new ChildLoggerService();
}

@Component({
  selector: 'app-di-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [
    {
      provide: TestDiHeirarchyCounterService, useClass: TestDiHeirarchyCounterService
    },

    // UseClass example
    {
      provide: ParentLoggerService, useClass: ParentLoggerService
    },
    // {
    //   provide: ParentLoggerService, useClass: ChildLoggerService
    // },

    // UseExisting Example, if there is a service alraedy exist it will use that.
    // {
    //   provide: ParentLoggerService, useClass: ParentLoggerService
    // },
    // {
    //   provide: ChildLoggerService, useClass: ParentLoggerService
    // },
    {
      provide: ParentLoggerService, useClass: ParentLoggerService
    },
    // {
    //   provide: ChildLoggerService, useExisting: ParentLoggerService
    // },
    {
      provide: ChildLoggerService, useClass: ChildLoggerService
    },


    // UseValue example
    {
      provide: 'APP_CONFIG', useValue: APP_CONFIG
    },

    // UseFactory example
    
    {
      provide: 'IS_TEST', useValue: true
    },
    {
      provide: 'LoggerService', useFactory: getLogger, deps:['IS_TEST']
    },
  ]
})
export class ParentDiTestComponent {
  constructor(public counter: TestDiHeirarchyCounterService, 
    public logger: ParentLoggerService, 
    public logger2: ChildLoggerService, 
    @Inject('APP_CONFIG') appConfig: any,
  @Inject('LoggerService') loggerService: any) {
      loggerService.log("LoggerService: test");
      console.log(appConfig);
    }

  increment() {
    this.counter.value++;
  }

  printparentLog(){
    this.logger.log("test log");
  }

  printchildLog(){
    this.logger2.log("test log");
  }

  printChildLogCount()
  {
    console.log(this.logger.logCount);
  }

  printParentLogCount()
  {
    console.log(this.logger2.logCount);
  }
}