import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import getImageWeather from "../../utils/functions/getImageWeather"
import { Link } from "react-router-dom"
import getLogoCardsCitiesHome from "../../utils/functions/getLogoWeatherCardsHome"

const CardCitiesDiv = styled.article`
    height: 180px;
    margin: 30px 0;
    border-radius: 15px;
    border: 5px solid ${colors.hover};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        box-shadow: 6px 6px 5px ${colors.hover}, -6px -6px 5px ${colors.hover};
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    hoverflow: hidden;
`
const CardP = styled.p`
    z-index: 999;
    font-size: 40px;
    color: #fff;
    text-shadow: ${colors.background} 1px 0 10px;
`

const Text = styled.p`
    z-index: 999;
    font-size: 30px;
    font-weight: 600;
    color: #0f0f0f;
    padding: 5px 0 0 20px;
`

const ImageWrapper = styled.div`
    position: relative;
    top: 0;
`

const TextContainer = styled.div`
    position: relative;
    top: -174px;
    padding: 25px;
`

const LogoContainer = styled.div`
    color: ${colors.hot};
    background-color: #cccccca6;
    width: fit-content;
    padding: 15px;
    border-radius: 50%;
    position: relative;
    top: -313px;
    left: 231px;
`

function CardCity({
    parisData,
    setParisData,
    marseilleData,
    setMarseilleData,
    bordeauxData,
    setBordeauxData,
}) {
    function choiceCity() {
        if (parisData) {
            return (
                <StyledLink to={`/city?id=${parisData.city.insee}`}>
                    <ImageWrapper>
                        {getImageWeather(parisData.forecast[0].weather)}
                    </ImageWrapper>
                    <TextContainer>
                        <CardP>{parisData.city.name}</CardP>
                        <Text>
                            <i
                                className="fa-solid fa-temperature-half"
                                style={{ paddingRight: "22px" }}
                            ></i>
                            {parisData.forecast[0].temp2m}??C
                        </Text>
                        <Text>
                            <i
                                className="fa-solid fa-wind"
                                style={{ paddingRight: "10px" }}
                            ></i>
                            {parisData.forecast[0].wind10m}??C
                        </Text>
                    </TextContainer>
                    <LogoContainer>
                        {getLogoCardsCitiesHome(parisData.forecast[0].weather)}
                    </LogoContainer>
                </StyledLink>
            )
        } else if (marseilleData) {
            return (
                <StyledLink to={`/city?id=${marseilleData.city.insee}`}>
                    <ImageWrapper>
                        {getImageWeather(marseilleData.forecast[0].weather)}
                    </ImageWrapper>
                    <TextContainer>
                        <CardP>{marseilleData.city.name}</CardP>
                        <Text>
                            <i
                                className="fa-solid fa-temperature-half"
                                style={{ paddingRight: "22px" }}
                            ></i>
                            {marseilleData.forecast[0].temp2m}??C
                        </Text>
                        <Text>
                            <i
                                className="fa-solid fa-wind"
                                style={{ paddingRight: "10px" }}
                            ></i>
                            {marseilleData.forecast[0].wind10m}??C
                        </Text>
                    </TextContainer>
                    <LogoContainer>
                        {getLogoCardsCitiesHome(
                            marseilleData.forecast[0].weather
                        )}
                    </LogoContainer>
                </StyledLink>
            )
        } else if (bordeauxData) {
            return (
                <StyledLink to={`/city?id=${bordeauxData.city.insee}`}>
                    <ImageWrapper>
                        {getImageWeather(bordeauxData.forecast[0].weather)}
                    </ImageWrapper>
                    <TextContainer>
                        <CardP>{bordeauxData.city.name}</CardP>
                        <Text>
                            <i
                                className="fa-solid fa-temperature-half"
                                style={{ paddingRight: "22px" }}
                            ></i>
                            {bordeauxData.forecast[0].temp2m}??C
                        </Text>
                        <Text>
                            <i
                                className="fa-solid fa-wind"
                                style={{ paddingRight: "10px" }}
                            ></i>
                            {bordeauxData.forecast[0].wind10m}??C
                        </Text>
                    </TextContainer>
                    <LogoContainer>
                        {getLogoCardsCitiesHome(
                            bordeauxData.forecast[0].weather
                        )}
                    </LogoContainer>
                </StyledLink>
            )
        }
    }
    return <CardCitiesDiv>{choiceCity()}</CardCitiesDiv>
}

export default CardCity
