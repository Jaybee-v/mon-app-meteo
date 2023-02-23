import styled from "styled-components"
import { colors } from "../../utils/style/colors"
import { Link } from "react-router-dom"

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
const Logo = styled.i`
    font-size: 50px;
    padding: 10px;
    color: ${colors.sun};
`
const BackBtn = styled(Link)`
    border: 2px solid ${colors.cold};
    border-radius: 20px;
    padding: 10px 15px;
    background-color: transparent;
    color: ${colors.cold};
    font-weight: 600;
    font-size: 18px;
    transition: 0.2s ease-in-out;
    &:hover {
        color: ${colors.sun};
        border: 2px solid ${colors.sun};
    }
`

function Header() {
    return (
        <HeaderContainer>
            <Logo className="fa-solid fa-sun"></Logo>
            <BackBtn to="/">
                <i className="fa-solid fa-chevron-left"></i> Retour
            </BackBtn>
        </HeaderContainer>
    )
}

export default Header
