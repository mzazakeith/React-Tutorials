import React from 'react'

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
    const personList = persons.map(person => (
        <h3>
            I am {person.name}. I am {person.age} years old. I am good at {person.skill}
        </h3>
    ))
    return<div>{personList}</div>
}

export default AdvanceListRender
