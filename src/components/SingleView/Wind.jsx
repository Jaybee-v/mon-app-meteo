import styled from "styled-components"
import { colors } from "../../utils/style/colors"

const WindWrapper = styled.section`
    border: 3px solid ${colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 10px;
    border-radius: 15px;
`

const Logo = styled.i`
    font-size: 50px;
    padding: 10px;
    color: red;
`

const WindStrength = styled.span``

function Wind({ data, setData }) {
    return (
        <WindWrapper>
            <Logo className="fa-solid fa-wind" />
            <WindStrength>Moyen: {data.wind10m} km/h</WindStrength>
            <WindStrength>Rafales à {data.gust10m} km/h</WindStrength>
        </WindWrapper>
    )
}

export default Wind
