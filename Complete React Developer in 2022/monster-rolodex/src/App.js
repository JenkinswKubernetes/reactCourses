import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mascotas: [],
      searchField: ""
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

  handleChange = e => {
    this.setState({searchField: e.target.value })
  }
  render() {
    const { mascotas, searchField } = this.state;
    const filterMascotas = mascotas.filter(mascota => 
      mascota.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
        <h3>Mi primera app </h3>
        <SearchBox 
          placeholder='search pets'
          handleChange={this.handleChange}
        />
        <CardList mascotas={filterMascotas} />
      </div>
    );
  }
}

export default App;
