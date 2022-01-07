import {Observable, fromEvent, mergeWith} from "rxjs";

const body = document.getElementById("body");
const btnsArr = [...document.querySelectorAll(".btn")];
const handlers: any[] = [];

console.log("Something succesful");

btnsArr.forEach((elem) => {
    handlers.push(fromEvent(elem, "click"));
});

const [handler1$, handler2$, handler3$] = handlers;

handler1$.pipe(
    mergeWith(handler2$, handler3$),
)
.subscribe((v: Observable<Event>) => {
    body!.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;
})






