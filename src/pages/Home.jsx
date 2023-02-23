// import axios from "axios"
// import { useEffect, useState } from "react"
import { useState } from "react"
import Header from "../components/Home/Header"
import styled from "styled-components"
import CitiesFindList from "../components/Home/CitiesFindList"
import CardCitiesHome from "../components/Home/CardCitiesHome"

// const TitleCity = styled.p``
const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

function Home() {
    const [searchByCity, setSearchByCity] = useState([])
    // const cities = [
    //     { name: "Paris", insee: 75056 },
    //     { name: "Marseille", insee: 13055 },
    //     { name: "Bordeaux", insee: 33063 },
    // ]
    console.log(searchByCity)
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
