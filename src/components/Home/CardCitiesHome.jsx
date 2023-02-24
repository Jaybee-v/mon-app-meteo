import styled from "styled-components"
import { colors } from "../../utils/style/colors"
// import axios from "axios"
// import { useEffect, useState } from "react"
import CardCity from "./CardCity"

const CardCitiesHomeWrapper = styled.section`
    background-color: ${colors.background};
    padding: 0 15px 15px 15px;
`

// const cities = [
//     { name: "Paris", insee: 75056 },
//     { name: "Marseille", insee: 13055 },
//     { name: "Bordeaux", insee: 33063 },
// ]

function CardCitiesHome({
    parisData,
    setParisData,
    marseilleData,
    setMarseilleData,
    bordeauxData,
    setBordeauxData,
}) {
    // const [parisData, setParisData] = useState([])
    // const [marseilleData, setMarseilleData] = useState([])
    // const [bordeauxData, setBordeauxData] = useState([])
    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const token = process.env.REACT_APP_API_TOKEN
    //             let i = 0
    //             while (i < cities.length) {
    //                 const codeInsee = cities[i].insee
    //                 const res = await axios.get(
    //                     `https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&insee=${codeInsee}`
    //                 )
    //                 if (codeInsee === 75056) {
    //                     setParisData(res.data)
    //                     console.log(res)
    //                 } else if (codeInsee === 13055) {
    //                     setMarseilleData(res.data)
    //                     console.log("MARSEILLE")
    //                 } else if (codeInsee === 33063) {
    //                     setBordeauxData(res.data)
    //                     console.log("BORDEAUX")
    //                 }
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getData()
    // }, [])

    return (
        <CardCitiesHomeWrapper>
            <CardCity parisData={parisData} setParisData={setParisData} />
            <CardCity
                marseilleData={marseilleData}
                setMarseilleData={setMarseilleData}
                // onClick={
                //     (document.location.href = `/city?id=${marseilleData.city.insee}`)
                // }
            />
            <CardCity
                bordeauxData={bordeauxData}
                setBordeauxData={setBordeauxData}
                // onClick={
                //     (document.location.href = `/city?id=${bordeauxData.city.insee}`)
                // }
            />
        </CardCitiesHomeWrapper>
    )
}

export default CardCitiesHome
