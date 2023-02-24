import styled from "styled-components"
import SUN from "../../assets/meteo/ensoleillé.jpg"
import QQNUAGE from "../../assets/meteo/qqNuages.jpg"
import NUAGEUX from "../../assets/meteo/nuageux.jpg"
import BROUILLARD from "../../assets/meteo/brouillard.jpg"
import PTITEPLUIE from "../../assets/meteo/petitepluie.jpg"
import PLUIE from "../../assets/meteo/pluie.jpg"
import NEIGE from "../../assets/meteo/neige.jpg"
import ORAGE from "../../assets/meteo/orages.jpg"
import PLUIENEIGE from "../../assets/meteo/pluieneige.jpg"
import GRELE from "../../assets/meteo/grele.jpg"

const WeatherImage = styled.img`
    max-height: 180px;
    width: 100%;
    background-size: 100% 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: blur(1px);
    opacity: 0.8;
`

function getImageWeather(value) {
    if (value === 0) {
        return <WeatherImage src={SUN} />
    } else if (value > 0 && value < 3) {
        return <WeatherImage src={QQNUAGE} />
    } else if (value > 2 && value < 6) {
        return <WeatherImage src={NUAGEUX} />
    } else if ((value > 5 && value < 10) || value === 16) {
        return <WeatherImage src={BROUILLARD} />
    } else if (value === 10 || value === 43 || value === 46) {
        return <WeatherImage src={PTITEPLUIE} />
    } else if (value === 40 || value === 41 || value === 44 || value === 47) {
        return <WeatherImage src={PTITEPLUIE} />
    } else if (
        (value > 10 && value < 16) ||
        value === 42 ||
        value === 45 ||
        value === 48 ||
        value === 210 ||
        value === 211 ||
        value === 212
    ) {
        return <WeatherImage src={PLUIE} />
    } else if (
        (value > 19 && value < 23) ||
        (value > 59 && value < 69) ||
        value === 143
    ) {
        return <WeatherImage src={NEIGE} />
    } else if (
        (value > 29 && value < 33) ||
        (value > 69 && value < 79) ||
        (value > 229 && value < 233)
    ) {
        return <WeatherImage src={PLUIENEIGE} />
    } else if (
        value === 100 ||
        value === 101 ||
        value === 103 ||
        value === 106 ||
        (value > 119 && value < 129) ||
        value === 130 ||
        value === 131 ||
        value === 133 ||
        value === 136 ||
        value === 137
    ) {
        return <WeatherImage src={ORAGE} />
    } else if (
        value === 102 ||
        (value > 103 && value < 106) ||
        value === 107 ||
        value === 108 ||
        value === 132 ||
        value === 134 ||
        value === 135 ||
        value === 138 ||
        value === 140 ||
        value === 141
    ) {
        return <WeatherImage src={ORAGE} />
    } else if (value === 235) {
        return <WeatherImage src={GRELE} />
    }
}

export default getImageWeather
