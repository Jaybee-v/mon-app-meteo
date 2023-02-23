import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import { useState } from "react"
import axios from "axios"
import { capitalizeFirstLetter } from "../../utils/functions/text"

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: ${colors.hover};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`
const HeaderInput = styled.input`
    padding: 9px 8px 7px 8px;
    font-size: 17px;
    border: none;
    border-radius: 10px 0 0 10px;
`
const HeaderForm = styled.form`
    display: flex;
    align-items: center;
`

const HeaderSearchBtn = styled.button`
    background-color: ${colors.sun};
    border: none;
    padding: 8px;
    border-radius: 0 10px 10px 0;
    border-bottom: 2px solid ${colors.sun};
    border-right: 2px solid ${colors.sun};
    border-top: 1px solid ${colors.sun};
`
const SearchLogo = styled.i`
    font-size: 17px;
    color: ${colors.hover};
`
const Logo = styled.i`
    font-size: 50px;
    padding: 10px;
    color: ${colors.sun};
`

function Header({ searchByCity, setSearchByCity }) {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const city = capitalizeFirstLetter(inputValue)
        console.log(city)
        try {
            const token = process.env.REACT_APP_API_TOKEN
            await axios
                .get(
                    `https://api.meteo-concept.com/api/location/cities?token=${token}&search=${city}`
                )
                .then(function (response) {
                    console.log(response.data.cities)
                    setSearchByCity(response.data.cities)
                })
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        const valueAfterChange = e.target.value
        console.log(valueAfterChange)
        setInputValue(valueAfterChange)
    }

    return (
        <HeaderContainer>
            <Logo className="fa-solid fa-sun"></Logo>
            <HeaderForm onSubmit={handleSubmit}>
                <HeaderInput
                    type="text"
                    placeholder="Recherchez votre ville ..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <HeaderSearchBtn type="submit">
                    <SearchLogo className="fa-solid fa-magnifying-glass"></SearchLogo>
                </HeaderSearchBtn>
            </HeaderForm>
        </HeaderContainer>
    )
}

export default Header
