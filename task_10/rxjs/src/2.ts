import { Observable, range, map, filter } from "rxjs";

const observable$: Observable<number> = range(1, 6);

observable$.pipe(
    map(
        (num: number): number => {
            try {
                if ( num > 5) {
                    throw new Error();
                } else {
                    return (-1) * num + 6;
                }
            }
        }
    ), 
    filter((num: number) => num !== undefined)
)
.subscribe(
    v => console.log(v),
    err => console.log(err),
    () => console.log("Complete") 
)

