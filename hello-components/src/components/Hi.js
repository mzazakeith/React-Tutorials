import React from "react";

const Hi = () =>{
    return React.createElement('div',{id:'hello', class:'dummyClass'}, 
    React.createElement('h1',null, 'Hi Mzaza no JSX'))
}

export default Hi