import styled from "styled-components"
import { colors } from "../../utils/style/colors"

const CardContainer = styled.section`
    border: 3px solid ${colors.background};
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: fit-content;
    padding: 10px;
    border-radius: 15px;
`
const CardTitle = styled.div`
    font-size: 20px;
    padding: 2px;
    font-weight: 600;
`
const CardCP = styled.div`
    font-size: 20px;
    border-bottom: 1px solid black;
    padding: 2px;
`
const CardAlt = styled.div`
    font-weight: 600;
    padding: 2px;
    font-size: 18px;
`

function CardCity({ city, setCity }) {
    return (
        <CardContainer>
            <CardTitle>{city.name}</CardTitle>
            <CardCP>{city.cp}</CardCP>
            <CardAlt>{city.altitude} mêtres d'altitude</CardAlt>
        </CardContainer>
    )
}

export default CardCity
