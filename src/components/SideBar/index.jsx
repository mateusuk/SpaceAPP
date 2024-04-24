import styled from "styled-components"
import ItemNav from "./IItemNav"

const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`


const SideBar = ()=>{
    return(
        <aside>
            <nav>
                <ListStyled>
                    <ItemNav 
                    iconActive="/icons/home-active.png"
                    iconInactive="/icons/home-inactive.png"
                    active={true}
                    >
                    
                    Home
                    </ItemNav>

                    <ItemNav 
                    iconActive="/icons/views-active.png"
                    iconInactive="/icons/views-inactive.png">
                    
                    Most Viewed
                    </ItemNav>

                    <ItemNav 
                    iconActive="/icons/most-liked-active.png"
                    iconInactive="/icons/most-liked-inactive.png">
                    
                    Most Liked
                    </ItemNav>

                    <ItemNav 
                    iconActive="/icons/latest-active.png"
                    iconInactive="/icons/latest-inactive.png">
                    
                    Latest
                    </ItemNav>
                    
                    <ItemNav 
                    iconActive="/icons/surprise-me-active.png"
                    iconInactive="/icons/surprise-me-inactive.png">
                    
                    Surprise Me
                    </ItemNav>

                </ListStyled>
            </nav>
        </aside>
    )
}

export default SideBar 