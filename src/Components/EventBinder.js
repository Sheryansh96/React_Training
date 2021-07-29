 import React, { Component } from 'react';
 
 class EventBinder extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : 'hello'
        }

        this.Clickhandler = this.Clickhandler.bind(this)
    }
    Clickhandler(){
        this.setState({
            message:'Goodbye'
        })

    }
     render() {
         return (
             <div>
                 <div>{this.state.message}</div>
                 {/* <button onClick={this.Clickhandler.bind(this)}>Click</button> */}
                 {/* <button onClick={() => this.Clickhandler()}>Click</button> */}
                 <button onClick = {this.Clickhandler}>Click</button>
             </div>
         );
     }
 }
 
 export default EventBinder;