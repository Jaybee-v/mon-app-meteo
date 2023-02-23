import styled from "styled-components"
import Header from "../components/SingleView/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import Temperature from "../components/SingleView/Temperature"
import CardCity from "../components/SingleView/CardCity"
import Wind from "../components/SingleView/Wind"
import Rain from "../components/SingleView/Rain"
import { colors } from "../utils/style/colors"
import TableWeatherByHour from "../components/SingleView/TableWeatherByHour"

const SingleViewWrapper = styled.div``
const DetailsWrapper = styled.section`
    border: 3px solid ${colors.background};
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 2px;
    margin: 15px 15px;
`
const Title = styled.h2``

function SingleView({ props }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get("id")
    console.log(id)

    const [city, setCity] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        async function getMeteo() {
            try {
                const token = process.env.REACT_APP_API_TOKEN
                const response = await axios.get(
                    `https://api.meteo-concept.com/api/forecast/daily?token=${token}&insee=${id}`
                )
                setCity(response.data.city)
                setData(response.data.forecast[0])
                console.log(response)
                console.log(test.getHours())
            } catch (err) {
                console.log(err)
            }
        }
        getMeteo()
    }, [])

    return (
        <SingleViewWrapper>
            <Header />
            <CardCity
                city={city}
                setCity={setCity}
                data={data}
                setData={setData}
            />
            <Title>Météo journalière:</Title>
            <DetailsWrapper>
                <Temperature data={data} setData={setData} />
                <Rain data={data} setData={setData} />
                <Wind data={data} setData={setData} />
            </DetailsWrapper>
            <Title>Météo par heure:</Title>
            <TableWeatherByHour />
        </SingleViewWrapper>
    )
}

export default SingleView
