import React from 'react'
import Person from './Person'

function AdvanceListRender() {
    const persons = [
       {
           id:1,
           name:'Keith',
           age:45,
           skill:'python'
       },
       {
        id:2,
        name:'Max',
        age:65,
        skill:'react'
        },
        {
            id:3,
            name:'Manu',
            age:100,
            skill:'fotran'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return<div>{personList}</div>
}

export default AdvanceListRender    
