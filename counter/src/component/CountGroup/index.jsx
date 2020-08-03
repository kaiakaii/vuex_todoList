import React from 'react';
import Counter from '../Counter/index';

class CountGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: '',total:0}

    }
    handelChange = event => {
        this.setState({
            count: Number(event.target.value),
        })
    }
    inParent = () =>{
        this.setState({
            total: this.state.total+1
        })
    }
    delParent = () =>{
        this.setState({
            total: this.state.total-1
        })

    }

    render() {
        return (
            <div>
                <span>Number of counters:</span><input type="number" value={this.state.count} onChange={this.handelChange} />
                <p>Total:{this.state.total}</p>
                {new Array(this.state.count).fill(0).map((key, index) => <Counter key={index} inParent={this.inParent} delParent={this.delParent}/>)}
            </div>

        )
    }

}

export default CountGroup;