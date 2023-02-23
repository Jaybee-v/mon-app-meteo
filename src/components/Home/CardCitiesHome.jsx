import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import axios from "axios"
import { useState } from "react"

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

// function getMeteo() {
//     for (let i = 0; i > cities.length; i++) {
//         console.log(cities)
//     }
// }

function CardCitiesHome() {
    // const [paris, setParis] = useState([])
    // const [marseille, setMarseille] = useState([])
    // const [bordeaux, setBordeaux] = useState([])
    // function getMeteo(value) {
    //     try {
    //         const token = process.env.REACT_APP_API_TOKEN

    //         axios
    //             .get(
    //                 `https://api.meteo-concept.com/api/forecast/daily?token=${token}&insee=${value}`
    //             )
    //             .then(function (response) {
    //                 console.log(response)
    //                 // switch (value) {
    //                 //     case 75056:
    //                 //         setParis(response.data.forecast[0])
    //                 //         return (
    //                 //             <CardCitiesHomeWrapper>
    //                 //                 <CardCitiesDiv
    //                 //                     key={`${paris.cp}`}
    //                 //                     onClick={() => console.log(`${paris}`)}
    //                 //                 >
    //                 //                     <CityName>{paris}</CityName>
    //                 //                 </CardCitiesDiv>
    //                 //             </CardCitiesHomeWrapper>
    //                 //         )
    //                 //         break
    //                 //     case 13055:
    //                 //         setMarseille(response.data.forecast[0])
    //                 //         break
    //                 //     case 33063:
    //                 //         setBordeaux(response.data.forecast[0])
    //                 //         break

    //                 //     default:
    //                 //         break
    //                 // }
    //                 // setSearchByCity(response.data.cities)
    //             })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    // for (let i = 0; i < cities.length; i++) {
    //     console.log(cities[i].name)
    //     switch (cities[i].insee) {
    //         case 75056:
    //             getMeteo(75056)
    //             break
    //         case 13055:
    //             getMeteo(13055)
    //             break
    //         case 33063:
    //             getMeteo(33063)
    //             break

    //         default:
    //             break
    //     }
    // }

    return (
        <CardCitiesHomeWrapper>
            {cities.map((city) => (
                <CardCitiesDiv
                    key={`${city.name}-${city.insee}`}
                    onClick={() =>
                        (document.location.href = `/city?id=${city.insee}`)
                    }
                >
                    <CityName>{city.name}</CityName>
                </CardCitiesDiv>
            ))}
        </CardCitiesHomeWrapper>
    )
}

export default CardCitiesHome
