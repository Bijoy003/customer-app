import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, exhaustMap, filter, from, fromEvent, interval, map, mergeMap, scan, Subject, switchMap, takeUntil, takeWhile, throttleTime, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-reactive-programming',
  templateUrl: './rxjs-reactive-programming.component.html',
  styleUrl: './rxjs-reactive-programming.component.scss'
})
export class RxjsReactiveProgrammingComponent {
  searchControl = new FormControl();
  searchResults: string[] = [] ;


  ngOnInit(){
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(searchTerm => {
        this.searchResults.push(searchTerm);
      });

    let source = from([1, 2, 3, 4, 5]);
    console.log('map');
    const mapExample = source.pipe(
      map(value => value * 10)  // Output: 10, 20, 30, 40, 50
    );
    mapExample.subscribe(console.log);

    console.log('filter');
    const filterExample = source.pipe(
      filter(value => value % 2 === 0)
    );
    filterExample.subscribe(console.log); // Output: 2, 4
    
    console.log('Scan');
    const scanExample = source.pipe(
      scan((acc, cur) => acc + cur, 0)
    )
    scanExample.subscribe(console.log);

    console.log('distinctUntilChanged');
    source = from([1, 1, 2, 2, 3, 3]);
    const distinctUntilChangedExample = source.pipe(
      distinctUntilChanged()  // Output: 1, 2, 3
    );
    distinctUntilChangedExample.subscribe(console.log);

    source = from([1, 2, 3]);
    // Subscribes to new inner observables without waiting for previous ones to complete.
    console.log('MergeMap')
    const mergeMapExample = source.pipe(
      mergeMap(value => from([value, value * 2]))
    );
    mergeMapExample.subscribe(console.log); // Output: 1, 2, 2, 4, 3, 6....

    // Waits for the previous inner observable to complete before subscribing to the next one.
    console.log('ConcatMap')
    const concatMapExample = source.pipe(
      concatMap(value => from([value, value * 2]))
    );
    concatMapExample.subscribe(console.log); // Output: 1, 2, 2, 4, 3, 6....

    // Unsubscribes from the previous inner observable when a new one arrives.
    console.log('SwitchMap')
    const switchMapExample = source.pipe(
      switchMap(value => from([value, value * 2]))
    );
    switchMapExample.subscribe(console.log); // Output: 1, 2, 2, 4, 3, 6....

    // New inner observables are ignored until the current one completes.
    console.log('ExhaustMap')
    const exhaustMapExample = source.pipe(
      exhaustMap(value => from([value, value * 2]))
    );
    exhaustMapExample.subscribe(console.log); // Output: 1, 2, 2, 4, 3, 6....

    console.log('takeUntil')
    const slow$ = interval(1000);
    const stop$ = new Subject<void>();
    
    setTimeout(() => {
      stop$.next();
      stop$.complete();
    }, 5000);
    // emit every 100 ms
    const fast$ = interval(100).pipe(
        takeUntil(slow$)
    );
    fast$.pipe(takeUntil(stop$)).subscribe({
      next(n) {
        console.log('fast:',n);
      },
      complete() {
        console.log('I am unsubscribed!');
      }
    });
    slow$.pipe(takeUntil(stop$)).subscribe({
      next(n) {
        console.log('Slow:', n);
      },
      complete() {
        console.log('Slow unsubscribed!');
      }
    });

    fast$.pipe(
      (takeUntil(stop$)),
      filter(Boolean),
      distinctUntilChanged(),
      throttleTime(500)
    )
    .subscribe({
      next(n){
        console.log('distinctUntilChanged: ', n);
      },
      complete(){
        console.log('distinctUntilChanged completed');
      }
    });

    // takeWhile
    console.log('takeWhile')
    const stream$ = interval(1000).pipe(
      takeWhile(n => n < 5)
    );
    
    stream$.subscribe({
      next(n) {
        console.log(n)
      },
      complete() {
        console.log('takeWhile: I am unsubscribed!')
      }
    });

    // bufferTime
    // accepts an amount of time in milliseconds and will batch the stream every n milliseconds in an array.
  }
}
