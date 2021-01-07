import React, { Component } from 'react'
import MovieSearch from './components/movieSearch'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>React movie search!</h1>
        <MovieSearch />
      </div>
    )
  }
}

export default App