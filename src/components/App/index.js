/**
 * Import
 */
import React,{Component } from 'react';
import Formulaire from '../form';
import CardHeader from '../card';
import Head from '../head';



import './app.scss';
import 'antd/dist/antd.css'
/**
 * Code
 */
class App extends Component  {
     state={

     }



  handleclikChoose = choose =>{
    console.log(choose)
  }

  handleReceiveSubmit = values =>{
    console.log(values)
  }

  render(){

    return(
    
      <div id='app'>
        <div className="head">
          <Head />
        </div>
        <header className='header'>
            <div className="header_image"></div>
            <CardHeader handleclikChoose={this.handleclikChoose}/>
        </header>
        <content className='content'>   
            <Formulaire  handleReceiveSubmit={this. handleReceiveSubmit}/>
        </content>
        
      </div>
    )
  }
}
  


/**
 * Export
 */
export default App;
