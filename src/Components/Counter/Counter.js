import React from 'react';


class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count+1});
    }

    decrement = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count-1});
        }
    }

// Props n'est accessible que dans le constructeur, car la méthode render() n'est pas dans le 
// même scope.
// C'est le mot-clé "this" qui va permettre à render() de récupérer le contenu de props.


    render() {
        return (
            <div>
            Count : {this.state.count}
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </div>
        )
            
        }
    }






export default Counter;
