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

const SingleViewWrapper = styled.div``
const DetailsWrapper = styled.section`
    border: 3px solid ${colors.background};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
`

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
            } catch (err) {
                console.log(err)
            }
        }
        getMeteo()
    }, [id])
    return (
        <SingleViewWrapper>
            <Header />
            <CardCity city={city} setCity={setCity} />
            <DetailsWrapper>
                <Temperature data={data} setData={setData} />
                <Rain data={data} setData={setData} />
                <Wind data={data} setData={setData} />
            </DetailsWrapper>
        </SingleViewWrapper>
    )
}

export default SingleView
