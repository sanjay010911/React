import React, { Component } from 'react';

 class click extends Component {
    constructor(props){
        super(props);

        this.state={
            count: 0
        };
    }
    UpdateClick = () => {
        this.setState({ count:this.state.count + 1 });
    };
    

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onclick={this.UpdateClick}>clicked {count} time</button>
            </div>
        );
    }
}

//export default click;