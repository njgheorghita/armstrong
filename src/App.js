import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Armstrong</h1>
        </div>
        <div className="App-intro">
          <h1> machine learning </h1>
          <h2> kaggle </h2>
          <h2> tensorflow </h2>
          <h2> scikit </h2>
            <ul>
              <li className="front_page_list"><a href="https://www.udacity.com/course/intro-to-machine-learning--ud120" target="_blank"> udacity course introducing machine learning with scikit (free!) </a></li>
              <li className="front_page_list"><a href="https://www.youtube.com/watch?v=elojMnjn4kk&list=PL5-da3qGB5ICeMbQuqbbCOQWcS6OYBr5A" target="_blank"> youtube course introducing machine learning with scikit </a></li>
            </ul>
          <h1> blockchain </h1>
          <h2> bitcoin </h2>
            <ul>
              <li className="front_page_list"><a href="https://www.youtube.com/watch?v=xUNGFZDO8mM" target="_blank"> watch andreas school the canadian senate on bitcoin and it's benefits </a></li>
              <li className="front_page_list"><a href="https://www.youtube.com/watch?v=1sOxtBiBpE4" target="_blank"> watch andreas and joe rogan talk about why and how blockchains will impact society </a></li>
              <li className="front_page_list"><a href="https://bitcoin.org/bitcoin.pdf" target="_blank"> nerd out on the original bitcoin white paper </a></li>
              <li className="front_page_list"><a href="https://solidity.readthedocs.io/en/develop/" target="_blank"> coursera course on bitcoin and cryptocurrency </a></li>
            </ul>
          <h2> ethereum </h2>
            <ul>
              <li className="front_page_list"><a href="https://souptacular.gitbooks.io/ethereum-tutorials-and-tips-by-hudson/content/giant_ethereum_resource_list.html" target="_blank"> giant ethereum resource list </a></li>
              <li className="front_page_list"><a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank"> nerd out on the original ethereum white paper </a></li>
              <li className="front_page_list"><a href="https://solidity.readthedocs.io/en/develop/" target="_blank"> solidity docs </a></li>
            </ul>
        </div>
      </div>
    )
  }G
}

export default App;
