import { useEffect, useLayoutEffect, useState } from "react";

const Home=(props)=>{

    useEffect(() => {
        console.log('mount it!');
    }, []); 

    const [name, setName]=useState('vinod');
    const [count, setCount]=useState(0);

    const data=useState("some data");
    console.log(data[0],data[1]);
    
    console.log(props);
    return <div><h1>Home Page {name}</h1><button onClick={()=>{setName('naidu '+count);setCount(count+1)}}>click</button></div>
}


export default Home