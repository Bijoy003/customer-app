export class ChildLoggerService{
    logCount = 0;
    constructor(){
        console.log("Child logger is constructed");
        this.logCount++;
    }

    onInit(){
        console.log("Child logger Initialized.");
        this.logCount++
    }

    log(msg: string){
        console.log("Child: " + msg);
        this.logCount++;
    }
}                                                                     