import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

function ProfileSideBar(propriedades){
  
  return (
    <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: "8px"}}/>
    </Box>
  ) 
}
export default function Home() {

  const githubUser = 'carvs10';
  const pessoasFavoritas = 
  [
    'vctrodrigues', 'camiladuartes', 'matheusmas132',
    'pedrocardoso5', 'edusrmt'
  ]
  
  return (
  <>
  
    <AlurakutMenu />

    
    <MainGrid>
      <div className ="profileArea" style={{ gridArea: "profileArea"}}>
        <ProfileSideBar githubUser={githubUser}/>      
      </div>
      <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
        <Box>
          <h1 className="title">
            Bem Vindo(a)
          </h1>

          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="realtionsArea" style={{ gridArea: "relationsArea"}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Couminidade ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`}/>
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>    
    </MainGrid>
  </>
  )
}
