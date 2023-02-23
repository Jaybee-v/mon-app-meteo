import styled from "styled-components"
import { colors } from "../../utils/style/colors"

const List = styled.ul``

const ElementList = styled.li`
    padding: 20px;
`

const ElementLink = styled.a`
    text-decoration: none;
    color: ${colors.background};
    font-weight: 900;
    font-size: 20px;
    transition: 0.2s ease-in;
    &:hover {
        color: ${colors.hover};
    }
`

function CitiesFindList({ searchByCity, setSearchByCity }) {
    return (
        <List searchByCity={searchByCity} setSearchByCity={setSearchByCity}>
            {searchByCity.map(({ name, insee, cp }) => (
                <ElementList key={insee}>
                    <ElementLink href="#">
                        {name} ({cp})
                    </ElementLink>
                </ElementList>
            ))}
        </List>
    )
}

export default CitiesFindList
