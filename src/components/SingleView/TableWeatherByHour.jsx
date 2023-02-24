import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import getWeather from "../../utils/functions/apiCall"

const TableContainer = styled.section`
    background-color: #ccc;
    padding: 20px 10px;
`
const Table = styled.table`
    width: 100%;
    border-bottom: 1px solid ${colors.background};
    border-radius: 15px;
    background-color: #fff;
    margin-bottom: 15px;
`
const THead = styled.thead``
const TR = styled.tr`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`
const TH = styled.th`
    padding: 5px;
    font-size: 20px;
`
const THLogo = styled.i``
const TBody = styled.tbody``
const TD = styled.td`
    padding: 20px 5px;
`

function TableWeatherByHour() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [dataHour, setDataHour] = useState([])
    const id = searchParams.get("id")

    useEffect(() => {
        async function getWeather() {
            try {
                const token = process.env.REACT_APP_API_TOKEN

                const responseHour = await axios.get(
                    `https://api.meteo-concept.com/api/forecast/nextHours?token=${token}&insee=${id}`
                )

                console.log(responseHour.data.forecast[0].datetime)

                setDataHour(responseHour.data.forecast)
            } catch (err) {
                console.log(err)
            }
        }
        getWeather()
    }, [])

    function getHour(value) {
        const test = new Date(value)
        console.log(test.getHours())
        let H = test.getHours()
        if (H === 0) {
            H = "00"
        }
        return H
    }

    return (
        <TableContainer>
            {dataHour.map((hour) => (
                <Table key={hour.datetime}>
                    <THead>
                        <TR>
                            <TH>
                                <THLogo className="fa-regular fa-clock"></THLogo>
                            </TH>
                            <TH>
                                <THLogo className="fa-solid fa-cloud-sun-rain"></THLogo>
                            </TH>
                            <TH>
                                <THLogo className="fa-solid fa-droplet"></THLogo>
                            </TH>
                            <TH>
                                <THLogo className="fa-solid fa-temperature-three-quarters"></THLogo>
                            </TH>
                            <TH>
                                <THLogo
                                    className="fa-solid fa-wind"
                                    style={{ color: "#9CA0A1" }}
                                ></THLogo>
                            </TH>
                            <TH>
                                <THLogo
                                    className="fa-solid fa-wind"
                                    style={{ color: "#E13A35" }}
                                ></THLogo>
                            </TH>
                        </TR>
                    </THead>
                    <TBody>
                        <TR>
                            <TD>
                                {getHour(hour.datetime) ? (
                                    <p>{getHour(hour.datetime)}h</p>
                                ) : (
                                    <p>Rien n'est chargé</p>
                                )}
                            </TD>
                            <TD>{getWeather(hour.weather)}</TD>
                            <TD>{hour.rr10}mm</TD>
                            <TD>{hour.temp2m}°C</TD>
                            <TD>{hour.wind10m}km/h</TD>
                            <TD>{hour.gust10m}km/h</TD>
                        </TR>
                    </TBody>
                </Table>
            ))}
        </TableContainer>
    )
}

export default TableWeatherByHour
