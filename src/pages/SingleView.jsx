import styled from "styled-components"
import Header from "../components/SingleView/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import Temperature from "../components/SingleView/Temperature"
import CardCity from "../components/SingleView/CardCity"
import Wind from "../components/SingleView/Wind"

const SingleViewWrapper = styled.div``

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
            <Temperature data={data} setData={setData} />
            <Wind data={data} setData={setData} />
        </SingleViewWrapper>
    )
}

export default SingleView
