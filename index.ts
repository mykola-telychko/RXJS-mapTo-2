import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/mapto
// Example 2: Mapping clicks to string

//emit every click on document
const srcClick$ = fromEvent(document, 'click');
//map all emissions to one value
const example = srcClick$.pipe(mapTo('GOODBYE WORLD!'));
const subscribe = example.subscribe((val) => console.log(val));
//output: (click)'GOODBYE WORLD!'...
