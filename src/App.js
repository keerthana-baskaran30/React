import React from 'react';
import Function1, { Function2 } from './components/Functional';
import Class, { ClassProps } from './components/Class';
import Counter from './components/Counter';
import Event, { ClassEvent, EventClass } from './components/Eventhandling';
import Lists, { ObjectList } from './components/Lists'
import Form from './components/Form'
import Mount from './components/Mounting';
import Updating from './components/Updating';
import Calculator from './components/Lifting'
import Child from './components/Child';
import ComponentProps, { Contacts, Chat } from './components/ComponentProps';
import Inheritance, { ChildOne, ChildTwo } from './components/Inheritance';
import Parent, { ParentClass } from './components/Parent';
import Refs from './components/Refs';
import Pure from './components/Pure'
import Context, { ComponentA, ComponentB } from './components/Context';
import Ancestor from './components/UpLift';
import Error, { CounterError } from './components/Error';
import TryCatch from './components/TryCatch';
import Clicker from './components/Wrapped'
import Clicker2 from './components/Wrapped2'
import ClassRef from './components/ClassRef';
import ClassRefParent from './components/ClassRefParent';
import Render, { RenderProps } from './components/Render';
import Portals from './components/Portals';
import HookBasic from './components/HooksBasic';
import Hook2 from './components/Hook2';


export const ContextObject = React.createContext()


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi</h1>
                {/* <Function1 name={90}/> */}
                {/* <Function1 name= 'Keerthana'/> */}
                {/* <Function1>This is function closing</Function1> */}
                {/* <Function2/> */}
                {/* <Class name="jelly"/> */}
                {/* <ClassProps name= 'joey'>This is Class Props  </ClassProps> */}
                {/* <ClassProps/> */}
                {/* <Counter/> */}
                {/* <Event/> */}
                {/* <EventClass/> */}
                {/* <Lists/> */}
                {/* <ObjectList/> */}
                {/* <Form formname = "FORM1"/> */}
                {/* <Mount/> */}
                {/* <Updating/> */}
                {/* <Calculator prop = {"dcm"}>cdcd</Calculator> */}
                {/* <Child/> */}
                {/* <Parent/> */}
                {/* <ComponentProps left={<Contacts/>} right={<Chat/>} /> */}
                {/* <Inheritance/>
                <ChildOne/>
                <ChildTwo/> */}
                {/* <Refs/> */}
                {/* <ParentClass/> */}
                {/* <Pure/> */}

                <ContextObject.Provider value="context value">
                    <Context/>
                </ContextObject.Provider>

                {/* <Ancestor/> */}

                {/* <Error>
                    <CounterError/>
                </Error> */}

                {/* <TryCatch/> */}

                {/* <Clicker name="kelly" id='3'/> */}
                {/* <Clicker2/> */}


                {/* <ClassRefParent/> */}
                {/* <RenderProps name="jekli"/>
                <Portals/> */}

                {/* <HookBasic value="prosp variable" /> */}
                {/* <Hook2/> */}


            </div>
        )
    }
}
export default App;