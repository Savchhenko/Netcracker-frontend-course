import {range, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

const output = document.querySelector(".output");
const numbers$: Observable<number> = range(1, 100);

function checkNumberIsPrime(num: number): boolean {
    let isPrime: boolean = false;

    if (num === 1 || num === 2 || num === 3) {
        return isPrime = true;
    }

    for (let i:number = 2; i < num; i++) {
        if (!(num % i)) {
            return isPrime = false;
        } else {
            isPrime = true;
        }
    }

    return isPrime;
}
 
numbers$.pipe(
    filter(v => checkNumberIsPrime(v)),
);
numbers$.subscribe(v => {
    output!.innerHTML = output?.textContent + " " + v;
});
