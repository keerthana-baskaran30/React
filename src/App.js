import React from 'react';
import Function1,{Function2} from './components/Functional';
import Class, { ClassProps } from './components/Class';
import Counter from './components/Counter';
import Event, { ClassEvent, EventClass } from './components/Eventhandling';
import Lists,{ObjectList} from './components/Lists'
import Form from './components/Form'
import Mount from './components/Mounting';
import Updating from './components/Updating';

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hi</h1>
                {/* <Function1 name= 'Kiki'/>
                <Function1 name= 'Keerthana'/>
                <Function1>This is function closing</Function1>
                <Function2/>
                <Class name="jelly"/>
                <ClassProps name= 'joey'>This is Class Props  </ClassProps>
                <ClassProps/>
                <Counter/>
                <Event/>
                <EventClass/> */}
                {/* <ClassEvent/> */}
                {/* <Lists/>
                <ObjectList/> */}
                {/* <Form/> */}
                {/* <Mount/> */}
                <Updating/>
               
                
                
            </div>
        )
    }
}
export default App;