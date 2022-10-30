import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import WorldHeritageList from './components/WorldHeritageList';
import type { WorldHeritage } from './components/WorldHeritageList';
import './App.css';

function App() {
  const WorldHeritages: WorldHeritage[] = [
    {
      id: 1,
      region: 'アジア・太平洋',
      holdingCountry: '日本国',
      year: '1993',
      registrationCriteria: '1,2,4,6',
      registrationDivision: [true, false, false, false],
      name: '法隆寺地域の仏教建造物群',
      summary: '現存する世界最古の木造建築物',
    },
    {
      id: 2,
      region: 'アジア・太平洋',
      holdingCountry: '日本国',
      year: '1993',
      registrationCriteria: '1,2,4,6',
      registrationDivision: [true, true, true, true],
      name: '法隆寺地域の仏教建造物群',
      summary: '現存する世界最古の木造建築物',
    },
    {
      id: 3,
      region: 'アジア・太平洋',
      holdingCountry: '日本国',
      year: '1993',
      registrationCriteria: '1,2,4,6',
      registrationDivision: [true, false, false, true],
      name: '法隆寺地域の仏教建造物群',
      summary: '現存する世界最古の木造建築物',
    },
    {
      id: 4,
      region: 'アジア・太平洋',
      holdingCountry: '日本国',
      year: '1993',
      registrationCriteria: '1,2,4,6',
      registrationDivision: [false, false, true, true],
      name: '法隆寺地域の仏教建造物群',
      summary: '現存する世界最古の木造建築物',
    },
    {
      id: 5,
      region: 'アジア・太平洋',
      holdingCountry: '日本国',
      year: '1993',
      registrationCriteria: '1,2,4,6',
      registrationDivision: [true, false, false, false],
      name: '法隆寺地域の仏教建造物群',
      summary: '現存する世界最古の木造建築物',
    },
  ];

  return (
    <div className="container">
      <Heading size="lg" as="h1" my={12}>
        世界遺産
      </Heading>
      <WorldHeritageList groupName='日本の世界遺産' WorldHeritages={WorldHeritages} />
    </div>
  )
}

export default App
