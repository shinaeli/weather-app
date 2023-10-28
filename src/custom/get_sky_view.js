import clouds from '../assets/images/clouds.png';
import clear from '../assets/images/clear.png';
import drizzle from '../assets/images/drizzle.png';
import Thunderstorm from '../assets/images/Thunderstorm.png';
import Atmosphere from '../assets/images/Atmosphere.png';
import rain from '../assets/images/rain.png';
import snow from '../assets/images/snow.png';
import mist from '../assets/images/mist.png';
import fog from '../assets/images/fog.png';
import haze from '../assets/images/haze.png';

export const getSkyView = check => {
    let output;

    if(check === 'Clouds') {
        output = clouds;
    } else if(check === 'Drizzle') {
        output = drizzle;
    } else if(check === 'Rain') {
        output = rain;
    } else if(check === 'Clear') {
        output = clear;
    } else if(check === 'Atmosphere') {
        output = Atmosphere;
    } else if(check === 'Snow') {
        output = snow;
    } else if(check === 'Thunderstorm') {
        output = Thunderstorm;
    } else if(check === 'Mist') {
        output = mist;
    } else if(check === 'Fog') {
        output = fog;
    } else if(check === 'Haze') {
        output = haze;
    }

    return output;
}