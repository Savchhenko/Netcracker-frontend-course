import {Observable} from "rxjs";

const observable$: Observable<number> = new Observable(subscriber => {
    setTimeout(() => subscriber.next(5), 1000);
    setTimeout(() => subscriber.next(4), 1500);
    setTimeout(() => subscriber.next(3), 2000);
    setTimeout(() => subscriber.next(2), 2500);
    setTimeout(() => subscriber.next(1), 3000);
    setTimeout(() => subscriber.error("Some error"), 3500);
    setTimeout(() => subscriber.complete(), 4000);
});

observable$.subscribe(
    v => console.log(v),
    err => console.log(err),
    () => console.log("Complete")    
);
