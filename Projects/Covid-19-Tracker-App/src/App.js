import React from 'react';
//importing components using new-syntax (create index.js on components folder)
import {Cards, Chart, CountryPicker, Footer} from './components';
import {fetchData} from './API/';


// importing styles.css for App
import styles from './App.module.css';

// importing images

import coronaImage from './images/covid19.png';
import fightCorona from './images/covid.png';

class App extends React.Component {

  state = {
    data : {},
    country: '',
  }

  

  async componentDidMount() {
    const data = await fetchData();

    // console.log(fetchedData);
    this.setState({data});
    
    
  }


  handleCountryChange = async (country) => {

    const data = await fetchData(country);

    this.setState({data, country: country});
    
    
      //fetch the data
      // get the state
  }
  
  render() {
    const { data, country }  = this.state;

    return(
    <div className = {styles.container}>
    <img src ={coronaImage} className = {styles.image} alt ="COVID-19" />
    <img src ={fightCorona} className = {styles.covidFight} alt ="Fight-COVID-19" />
      <Cards data = {data} />
      <CountryPicker handleCountryChange = {this.handleCountryChange}/>
      <Chart data = {data} country = {country}/>
      <Footer />
    </div>
    );
  }
}

export default App;