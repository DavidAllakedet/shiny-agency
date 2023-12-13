import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
    padding: 10px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color: #5843E4;`}
`;
const HomeLogo = styled.img`
  height: 70px;
`
const NavLinkContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    
`;

function Header() {
  return (
    <NavLinkContainer>
       <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink >Faire un test</StyledLink>
      </div>
      
    </NavLinkContainer>
  )
}

export default Header;
