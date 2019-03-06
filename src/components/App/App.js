import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {


  componentDidMount() {
    this.getGiphy();
  }

  getGiphy = (event) => {
    axios({
      method: 'GET',
      url: '/random',
    }).then((response) => {
      console.log('for you david', response);

      this.props.dispatch({


        type: 'SET_RANDOM',
        payload: response.data
      })
    
    })

  }

  yeetGiphy = () => {
    this.getGiphy();
  }





  render() {
    // console.log(this.props.random.image_original_url);

    return (
      <div>
        <header className="App-header">
          <h1>Random Giphy API</h1>
        </header>
        <>
          <img src={this.props.reduxStore.randomGiph.image_original_url} />
          <button onClick={this.yeetGiphy}>New Gif</button>
        </>
        <p></p>
      </div>
    );
  }
}

const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(App);