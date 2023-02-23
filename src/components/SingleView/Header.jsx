import styled from "styled-components"
import { colors } from "../../utils/style/colors"

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

function Header() {
    return (
        <HeaderContainer>
            <Logo className="fa-solid fa-sun"></Logo>
        </HeaderContainer>
    )
}

export default Header
