import styled from "styled-components"
import moment from "moment/moment"
import { useEffect, useState } from "react"
import { colors } from "../../utils/style/colors"

const TableContainer = styled.section`
    background-color: #ccc;
    padding: 20px 10px;
`
const Table = styled.table`
    width: 100%;
    border-bottom: 1px solid ${colors.background};
`

const THead = styled.thead``

const TR = styled.tr`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const TH = styled.th`
    padding: 5px;
    font-size: 20px;
`

const THLogo = styled.i``

const TBody = styled.tbody``

const TD = styled.td`
    padding: 5px;
`

function TableWeatherByHour({ dataHour }) {
    function getHour(value) {
        const test = new Date(value)
        console.log(test.getHours())
        const H = test.getHours()
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
