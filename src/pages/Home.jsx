import { useEffect, useState } from "react"
import Header from "../components/Home/Header"
import styled from "styled-components"
import CitiesFindList from "../components/Home/CitiesFindList"
import CardCitiesHome from "../components/Home/CardCitiesHome"
import axios from "axios"

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const cities = [
    { name: "Paris", insee: 75056 },
    { name: "Marseille", insee: 13055 },
    { name: "Bordeaux", insee: 33063 },
]
function Home() {
    const [searchByCity, setSearchByCity] = useState([])
    const [parisData, setParisData] = useState()
    const [marseilleData, setMarseilleData] = useState()
    const [bordeauxData, setBordeauxData] = useState()
    useEffect(() => {
        async function getData() {
            try {
                const token = process.env.REACT_APP_API_TOKEN
                for (let i = 0; i < cities.length; i++) {
                    const codeInsee = cities[i].insee
                    const res = await axios.get(
                        `https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&insee=${codeInsee}`
                    )
                    console.log(res)
                    if (codeInsee === 75056) {
                        setParisData(res.data)
                        console.log(res)
                    } else if (codeInsee === 13055) {
                        setMarseilleData(res.data)
                        console.log("MARSEILLE")
                    } else if (codeInsee === 33063) {
                        setBordeauxData(res.data)
                        console.log("BORDEAUX")
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])
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
            <CardCitiesHome
                parisData={parisData}
                setParisData={setParisData}
                marseilleData={marseilleData}
                setMarseilleData={setMarseilleData}
                bordeauxData={bordeauxData}
                setBordeauxData={setBordeauxData}
            />
            {/* INPUT DE RECHERCHE / AJOUT EN FAVORIS */}
            {/* POSSIBLE SUPPRIMER VILLE */}
        </HomeWrapper>
    )
}

export default Home
