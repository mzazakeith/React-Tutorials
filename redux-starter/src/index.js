import {compose , pipe} from 'lodash/fp'; 


let input = "  Javascript   "

const trim= str => str.trim();
// const wrapInDiv = str => `<div> ${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// compose(wrapInDiv, toLowerCase, trim)

const transform= pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));


// updating objects
const person = {
    name : "Keith",
    address:{
        country: "Kenya",
        city: "Nairobi"
    }
};

const updated = {
    ... person,
    address:{
        ... person.address,
        city: "Machakos"
    },
    name: "Mzaza"
}

console.log(updated)

// updating arrays

const numbers = [1,2,3]

const endAdd = [...numbers, 4]
console.log(endAdd)

const frontAdd = [4, ...numbers]
console.log(frontAdd)

// adding at a specific point 

const index = numbers.indexOf(2);
const added = [...numbers.slice(0,index), 4, ...numbers.slice(index)]
console.log(added)

// removing 

const removed =  numbers.filter(n => n !== 2);
console.log(removed)


// updating

const updating = numbers.map(n => n===2 ? 20 : n)
console.log(updating)


// immutability

let book = Map({title:"Harry potter"});

function publish(book){
    return book.set("isPublished",true)
}

book = publish(book);

// console.log(book.get("title"))
console.log(book.toJS())