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
import CustomHook, { CustomHook2 } from './components/CustomHook';
import Reducer from './components/Reducer';
import UseEffectHook from './components/UseEffectHook'
import AxiosComponent from './components/AxiosComponent';
import AxiosExample from './components/AxiosExample';
import ComponentDidMount from './components/ComponentDidMount'
import AddAxios from './components/AddAxios';

import { BrowserRouter,Router, Switch, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';


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

                {/* <ContextObject.Provider value="context value">
                    <Context/>
                </ContextObject.Provider> */}

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

                {/* <CustomHook hook={"one"}/>
                <CustomHook2/> */}
                {/* <Reducer/> */}

                {/* <UseEffectHook/> */}

                {/* <AxiosExample/> */}


                {/* <ComponentDidMount/> */}
                {/* <AddAxios/> */}

                <Router>
                    <Routes>
                        <Route index Path="/" element={<Home />} />
                        <Route Path="about" element={<About />} />
                    </Routes>
                    </Router>
                
            </div>
        )
    }
}
export default App;