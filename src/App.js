import React from 'react';
import Function1,{Function2} from './components/Functional';
import Class, { ClassProps } from './components/Class';
import Counter from './components/Counter';
import Event, { ClassEvent, EventClass } from './components/Eventhandling';


class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hi</h1>
                <Function1 name= 'Kiki'/>
                <Function1 name= 'Keerthana'/>
                <Function1>This is function closing</Function1>
                <Function2/>
                <Class name="jelly"/>
                <ClassProps name= 'joey'>This is Class Props  </ClassProps>
                <ClassProps/>
                <Counter/>
                <Event/>
                <EventClass/>
                {/* <ClassEvent/> */}
               
                
                
            </div>
        )
    }
}
export default App;