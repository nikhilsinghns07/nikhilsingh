import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #f75605;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;

`;

export const NavLink = styled(Link)`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
	display: flex;
    align-items: center;
    margin-right: -24px;
}
`;

