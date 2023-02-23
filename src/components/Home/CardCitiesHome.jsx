import styled from "styled-components"
import { colors } from "../../utils/style/colors"
// import axios from "axios"
// import { useEffect, useState } from "react"

const CardCitiesHomeWrapper = styled.section`
    background-color: ${colors.background};
    padding: 0 15px 15px 15px;
`
const CardCitiesDiv = styled.div`
    background-color: #ccc;
    height: 80px;
    margin: 30px 0;
    border-radius: 15px;
    border: 5px solid ${colors.hover};
    padding: 15px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        box-shadow: 6px 6px 5px ${colors.hover}, -6px -6px 5px ${colors.hover};
    }
`
const CityName = styled.p`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
`
const cities = [
    { name: "Paris", insee: 75056 },
    { name: "Marseille", insee: 13055 },
    { name: "Bordeaux", insee: 33063 },
]

function CardCitiesHome() {
    // const [cityData, setCityData] = useState([])
    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const token = process.env.REACT_APP_API_TOKEN
    //             const responseHour = await axios.get(
    //                 `https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&insee=75056`
    //             )
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    // })
    // (document.location.href = `/city?id=${city.insee}`)

    return (
        <CardCitiesHomeWrapper>
            {cities.map((city) => (
                <CardCitiesDiv
                    key={`${city.insee}`}
                    onClick={(e) => console.log(city.insee)}
                >
                    <CityName>{city.name}</CityName>
                </CardCitiesDiv>
            ))}
        </CardCitiesHomeWrapper>
    )
}

export default CardCitiesHome
