import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let changeableURL= url;

    if (country) {
        changeableURL = `${url}/countries/${country}`;
    }
    try{

        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableURL);

        const modifiedData ={confirmed, recovered, deaths, lastUpdate};
        
        return modifiedData;
        
    }catch (error){
        return error;
        
    }
}

export const fetchDailyData = async() => {
    try{
        const { data }  = await axios.get(`${url}/daily`);

            return data.map(({confirmed, deaths, reportDate: date}) => ({confirmed: confirmed.total, deaths:deaths.total, date}));
        

    }catch(error){
        return error;
    }
}

export const fetchCountries = async () => {
try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) =>   country.name);
        
}catch(error){
    return error;
    
}
}