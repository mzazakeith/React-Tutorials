import {Map} from 'immutable';

// using immutable

let book = Map({title:"Harry potter"});

function publish(book){
    return book.set("isPublished",true)
}

book = publish(book);

// console.log(book.get("title"))
console.log(book.toJS())