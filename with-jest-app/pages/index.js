// Home page of application.

// Imported components and necessary libraries to interact with reat and next
import Head from 'next/head'
import Image from 'next/image'
import ConvertInput from "../components/convertInput";
import ConvertOutput from "../components/convertOutput";
import convertToRoman from "../components/convertToRoman";
import ReactDOM from "react-dom";
import React, { Component } from 'react';

import styles from '@/pages/index.module.css'

// Main app class
class Home extends React.Component{
  
  constructor() {
    super();
    this.state = {
      output: ""
    };
    
    this.handleInput = this.handleInput.bind(this);
  }

// function to handle and bind the entered value with input and 
// give the result as an output.
  handleInput(e) {
    this.setState({
      output: convertToRoman(e.target.value)
    });
  }

  // rendering our app on the web page.
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Roman Numeral</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="App container">
          <h1 className="container__label">Roman Numeral Converter</h1>
           {/* Input component called */}
          <ConvertInput onChange={this.handleInput} />

          {/* Output component called as a result*/}
          <ConvertOutput value={this.state.output} />
        </div>
      </div>
    )
  }
}

// Exporting our main component in order to render on web page.
export default Home