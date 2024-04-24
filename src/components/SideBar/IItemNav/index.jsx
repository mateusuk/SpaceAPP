import styled from "styled-components"

const ItemListStyled = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$active ?'#7b78e5':'#d9d9d9'};
    font-family: ${props => props.$active ?'GandhiSansBold':'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap:22px;

`

const ItemNav=({children, iconActive,iconInactive,active=false})=>{
    return(
        <ItemListStyled $active={active}>
            <img src={active ? iconActive : iconInactive} alt="" />
            {children}
        </ItemListStyled>
    )
}

export default ItemNav