import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list.component.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mascotas: []
    }
  }
  // lifecicle methods
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({mascotas: users}))
    .catch(error => {
      console.log(error, "something going wrong")
    });
  }

  render() {
    return (
      <div className="App">
        <CardList mascotas={this.state.mascotas} />
      </div>
    );
  }
}

export default App;
