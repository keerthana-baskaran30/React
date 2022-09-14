import React from 'react';
import Function1,{Function2} from './components/Functional';
import Class from './components/Class';

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hi</h1>
                <Function1 name= 'Kiki'/>
                <Class/>
                <Function2/>
                <Function1 name= 'Keerthana'/>
                <Function1/>
            </div>
        )
    }
}
export default App;