import styled from "styled-components"

const THLogoWeather = styled.i`
    font-size: 50px;
`

function getLogoCardsCitiesHome(value) {
    if (value === 0) {
        return <THLogoWeather className="fa-solid fa-sun"></THLogoWeather>
    } else if (value > 0 && value < 3) {
        return <THLogoWeather className="fa-solid fa-cloud-sun"></THLogoWeather>
    } else if (value > 2 && value < 6) {
        return <THLogoWeather className="fa-solid fa-cloud"></THLogoWeather>
    } else if ((value > 5 && value < 10) || value === 16) {
        return <THLogoWeather className="fa-solid fa-smog"></THLogoWeather>
    } else if (value === 10 || value === 43 || value === 46) {
        return (
            <THLogoWeather className="fa-solid fa-cloud-sun-rain"></THLogoWeather>
        )
    } else if (value === 40 || value === 41 || value === 44 || value === 47) {
        return (
            <THLogoWeather className="fa-solid fa-cloud-rain"></THLogoWeather>
        )
    } else if (
        (value > 10 && value < 16) ||
        value === 42 ||
        value === 45 ||
        value === 48 ||
        value === 210 ||
        value === 211 ||
        value === 212
    ) {
        return (
            <THLogoWeather className="fa-solid fa-cloud-showers-heavy"></THLogoWeather>
        )
    } else if (
        (value > 19 && value < 23) ||
        (value > 59 && value < 69) ||
        value === 143
    ) {
        return <THLogoWeather className="fa-solid fa-snowflake"></THLogoWeather>
    } else if (
        (value > 29 && value < 33) ||
        (value > 69 && value < 79) ||
        (value > 229 && value < 233)
    ) {
        return (
            <THLogoWeather className="fa-solid fa-cloud-meatball"></THLogoWeather>
        )
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
        return (
            <THLogoWeather className="fa-solid fa-cloud-bolt"></THLogoWeather>
        )
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
        return <THLogoWeather className="fa-solid fa-bolt"></THLogoWeather>
    } else if (value === 235) {
        return <THLogoWeather className="fa-solid fa-icicles"></THLogoWeather>
    }
}

export default getLogoCardsCitiesHome
