import React from 'react'

function Lists(props){
    // const names = ['jio' , 'lenna', 'piou']
    return (
        // <div>
        //     {names.map(name => <div><b>{name}</b></div>)}        
        // </div>
        <div>
            {props.obj.map(object => <p key={object.name}>{object.name} - {object.age}</p>)}
        </div>
    )
}

Lists.defaultProps = {
    obj : [{name:'jio',age:"default"} , {name:'lenna'}, {name:'piou'}]
}


export function ObjectList(){
    const obj = [
        {
            name:"mena",
            age : 32,
        },
        {
            name:"paloe",
            age: 34,
        },
        {
            name:"poco",
            age:45,
        }
    ]
   const [obj1,obj2,obj3] = obj
   console.log(obj1)
   
    return (
        // <div>
        //     {obj.map(object => <div>{object.name} - {object.age}</div>)}
        // </div>
        <div>
            <Lists  obj={obj}/>
        </div>
    )
}
export default Lists