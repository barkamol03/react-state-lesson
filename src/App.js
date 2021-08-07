import React from 'react'
import './app.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Webbrain Academy',
            count: 0,
        } 
    } 
    render(){
        const change =()=> {
            this.setState({title: 'IT Academy', count: 1}) 
        } 

        let plus =()=>{
            if (this.state.count < 10) this.setState({count: this.state.count +1}) 
            if (this.state.count === 0) this.setState({count: 0})
        }

        let minus =()=>{
            if (this.state.count > 0) {
                this.setState({count: this.state.count -1})
            }
        } 

        let titlechange =(e)=>{
            console.log(e.target.value);
            this.setState({title: e.target.value}) 
        }

        return <div>
            <h1>{this.state.title} {this.state.count}</h1> 
            <input type='text' onChange={titlechange}/>
            <button onClick={change}>Change</button>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button> 
        </div>
    }
}

export default App 