import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
display: grid;
gap: 24px;
grid-template-rows: 350px 350px;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-items: center;
`

const CardPagetitle = styled.h1`
font-size: 30px;
color: black;
text-align: center;
padding-bottom: 30px;`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const FreeLancesConst = styled.div`
display:flex;
flex-direction: column;
jsutify-content: center;
align-items:center`


const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
  {
    name: 'Lauren ipsum',
    jobTitle: 'UX Designer ',
  },
]

function Freelances() {
  return (
    <FreeLancesConst>
      <CardPagetitle>Trouvez votre prestataire</CardPagetitle>
      <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </FreeLancesConst>
  )
}

export default Freelances