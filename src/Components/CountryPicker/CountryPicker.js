import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import classes from './CountryPicker.module.css'
import { fetchCountries } from '../../Api'

const CountryPicker = (props) => {              //props destructered
    const [recievedCountries, SetCountries] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            SetCountries(await fetchCountries());
        }
        fetchApi();
    }, [SetCountries]);

    return (
        <div>
            <FormControl className={classes.formControl}>
                <NativeSelect defaultValue=" " onChange={(e) => props.handleCountryChange(e.target.value)} style={{ width: "200PX", textAlign: "center" }}>
                    <option value=''>Global</option>
                    {recievedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
