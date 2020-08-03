import React from 'react';
import Counter from '../Counter/index';

class CountGroup extends React.Component{


    render(){
        return (
            new Array(5).fill(0).map((key,value)=>{return <Counter key={value}/>})
        )
    }
    
}

export default CountGroup;