import styled from "styled-components"
import { colors } from "../../utils/style/colors"

const TemperatureWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 10px;
`
const MaxT = styled.div`
    font-size: 35px;
    color: ${colors.hot};
    padding: 5px;
`
const MinT = styled.div`
    font-size: 35px;
    color: ${colors.cold};
    border-bottom: 1px solid black;
    padding: 5px;
`

function Temperature({ data, setData }) {
    return (
        <TemperatureWrapper>
            <MinT>{data.tmin}°C</MinT>
            <MaxT>{data.tmax}°C</MaxT>
        </TemperatureWrapper>
    )
}

export default Temperature
