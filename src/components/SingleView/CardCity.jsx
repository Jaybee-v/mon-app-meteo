import styled from "styled-components"

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
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
