export class ParentLoggerService{
    logCount = 0;

    constructor(){
        console.log("Parent logger is constructed");
        this.logCount++;
    }

    onInit(){
        console.log("Parent logger Initialized.");
        this.logCount++
    }

    log(msg: string){
        console.log("Parent: " + msg);
        this.logCount++;
    }
}