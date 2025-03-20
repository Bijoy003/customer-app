import { Component } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrl: './web-worker.component.scss'
})
export class WebWorkerComponent {
  worker!: Worker;
  counter = 0;
  result: number | null = null;

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('../my-worker.worker.ts', import.meta.url));

      this.worker.onmessage = ({ data }) => {
        this.result = data;
      };
    }
  }

  calculateFibonacci(input: number) {
    this.result = fibonacci(Math.min(input,45));
  }

  calculateFibonacciAsync(input: number) {
    fibonacciAsync(Math.min(input,45)).then((res) =>{
      this.result = res;
    });
  }

  count(){
    this.counter++;
  }
  
  startWorker(input: number) {
    if (this.worker) {
      this.worker.postMessage(Math.min(input,45));
    }
  }

  ngOnDestroy() {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciAsync(n: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fibonacci(n));
    }, 0); // Delay execution to free the main thread
  });
}

