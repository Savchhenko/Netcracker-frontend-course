import {range, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

const output = <HTMLElement>document.querySelector(".output");
const numbers$: Observable<number> = range(1, 100);

function checkNumberIsPrime(num: number): boolean {
    let isPrime: boolean = true;
    
    for (let i: number = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            return isPrime;
        } 
    }

    return isPrime;
}
 
numbers$.pipe(
    filter(v => checkNumberIsPrime(v)),
);
numbers$.subscribe(v => {
    output.innerHTML = output.textContent + " " + v;
});
