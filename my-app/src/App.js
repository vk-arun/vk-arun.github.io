import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render(){
    const {monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(

      <div className='App'>
        
              <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder ='Search Monster'
        handleChange = { e => this.setState({ searchField: e.target.value })
      }/>
          <CardList monsters= {filteredMonster}/>
    
        </div>
    )
  }
}

export default App;


/**
 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */