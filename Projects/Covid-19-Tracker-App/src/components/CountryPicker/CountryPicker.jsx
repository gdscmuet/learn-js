import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

// importing styles
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../API';


const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect (() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
},[]);

    console.log(fetchedCountries);
    

    return(
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue ="" onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value =""> Global</option>
                {fetchedCountries.map((country, index)=> 
                    <option key = {index} value ={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;