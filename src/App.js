import React, { Component } from 'react';
import Header from './component/Header/Header';
import Grid from './component/Grid/Grid';
import AGGrid from './component/AGGrid/AGGrid';
import './App.css';

class App extends Component {
  state = {
    dataResult: null
  }

  componentDidMount(){
    fetch('http://svk-cabbie-app.herokuapp.com/api/drivers')
    .then(resp => resp.json())
    .then(dataResult => {
      console.log(dataResult);
      this.setState({
        dataResult
      });
    })
  }

  render() {
    const { dataResult } = this.state;
    return (
      <div className="App">
        <Header title="React Grid Playground" />
        {
          (dataResult)?
          // <Grid data={dataResult.results} />:
          <AGGrid data={dataResult.results} />:
          null
        }        
      </div>
    );
  }
}

export default App;
