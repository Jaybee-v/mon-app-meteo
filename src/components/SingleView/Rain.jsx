import styled from "styled-components"
import { colors } from "../../utils/style/colors"

const RainContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 10px;
`
const Logo = styled.i`
    font-size: 40px;
    padding: 10px;
    color: ${colors.water};
`

const NoRain = styled.i`
    font-size: 50px;
    padding: 10px;
    color: ${colors.water};
`

const ProbaRain = styled.span``
const NoRainText = styled.span``

function Rain({ data, setData }) {
    return (
        <div>
            <ProbaRain>{data.probarain}% qu'il pleuve</ProbaRain>
            {data.rr10 > 0 ? (
                <RainContainer>
                    <Logo className="fa-solid fa-droplet" />
                </RainContainer>
            ) : (
                <RainContainer>
                    <NoRain className="fa-solid fa-droplet-slash" />
                    <NoRainText>Pas de pluie</NoRainText>
                </RainContainer>
            )}
        </div>
    )
}

export default Rain
