import React from 'react';
import classes from './App.module.css';
import { Cards, Charts, CountryPicker } from './Components'
import { fetchData } from './Api'
import coronaImage from './Images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    return (
      <div className={classes.container}>
        <img className={classes.image} src={coronaImage} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={this.state.data} country={this.state.country} />
      </div>
    );

  }
}
export default App;
