import { useState } from "react"
import Header from "../components/Home/Header"
import styled from "styled-components"
import CitiesFindList from "../components/Home/CitiesFindList"
import CardCitiesHome from "../components/Home/CardCitiesHome"

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

function Home() {
    const [searchByCity, setSearchByCity] = useState([])
    return (
        <HomeWrapper>
            <Header
                searchByCity={searchByCity}
                setSearchByCity={setSearchByCity}
            />
            <CitiesFindList
                searchByCity={searchByCity}
                setSearchByCity={setSearchByCity}
            />
            <CardCitiesHome />
        </HomeWrapper>
    )
}

export default Home
