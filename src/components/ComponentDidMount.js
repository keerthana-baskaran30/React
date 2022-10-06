import React ,{useState,useEffect}from "react";


// export default class ComponentDidMount extends React.Component {
//     state = {value: ' NOT INITIALISED '};

//     componentDidMount() {
//         setInterval(() => {this.setState(() => ({
//             value: 'INITIALISED'
//         }))},5000);
//     }

//     render() {
//         console.log("rendering" , this.state.value)
//         return <div>{this.state.value}</div>;
//     }
// }


export default function ComponentDidMount(){
    const [value, setValue] = useState(' NOT INITIALISED ');

    // useEffect(() => {
    //     console.log(value)
    //     setInterval(() => {
    //         setValue(() => 'INITIALISED')
    //     },5000)
        
    // });

    useEffect(() => {
        setValue(() => 'INITIALISED')
    }, []);

    return (
        <div>{value}</div>
        
    )
}
