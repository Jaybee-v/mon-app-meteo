import styled from "styled-components"
import { WeatherCode } from "../../utils/data/WeatherCode"

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`
const CardTitle = styled.div`
    font-size: 20px;
    padding: 2px;
    font-weight: 600;
`
const CardCP = styled.div`
    font-size: 20px;
    border-bottom: 1px solid black;
    padding: 2px;
`
const CardAlt = styled.div`
    font-weight: 600;
    padding: 2px;
    font-size: 18px;
`
const WeatherCard = styled.div`
    font-size: 30px;
    padding: 8px;
`

function CardCity({ city, setCity, data, setData }) {
    function getWeather() {
        for (let i = 0; i < WeatherCode.length; i++) {
            if (data.weather === WeatherCode[i].id) {
                console.log(WeatherCode[i].description)
                return WeatherCode[i].description
            }
        }
    }
    return (
        <CardContainer>
            <CardTitle>{city.name}</CardTitle>
            <CardCP>{city.cp}</CardCP>
            {getWeather() ? <WeatherCard>{getWeather()}</WeatherCard> : null}
            <CardAlt>{city.altitude} mêtres d'altitude</CardAlt>
        </CardContainer>
    )
}

export default CardCity
