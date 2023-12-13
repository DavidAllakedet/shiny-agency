import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/image (15) 1.png'


const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    margin-bottom:50px;
`
const CardImage = styled.img`
    height: 130px;
    width: 130px;
    border-radius: 50%;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 300px;
    align-items: center;
    justify-content:center;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
    <CardLabel>{label}</CardLabel>
    <CardImage src={picture} alt="freelance" />
    <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,

}

export default Card