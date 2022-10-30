import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { FaMosque, FaMountain, FaSkull, FaBomb } from "react-icons/fa";

export interface WorldHeritage {
  id: number;
  holdingCountry: string;
  region: string;
  year: string;
  registrationCriteria: string;
  registrationDivision: [isCulturalHeritage, isNaturalHeritage, isNegativeLegacy, inDanger];
  name: string;
  summary: string;
}

type Props = {
  groupName: string;
  WorldHeritages: WorldHeritage[];
};

type isCulturalHeritage = boolean;
type isNaturalHeritage = boolean;
type isNegativeLegacy = boolean;
type inDanger = boolean;

const WorldHeritageList: FC<Props> = (props) => {
  const { groupName, WorldHeritages } = props;

  return (
    <div>
      <Heading size="md" as="h2">
        {groupName}
      </Heading>
      <List my={8}>
        {WorldHeritages.map((WorldHeritage) => (
          <ListItem key={WorldHeritage.id} m={6}>
            <Flex>
              {/* { WorldHeritage.registrationDivision[0] ? <FaMosque /> : '' }
              { WorldHeritage.registrationDivision[1] ? <FaMountain /> : '' }
              { WorldHeritage.registrationDivision[2] ? <FaSkull /> : '' }
              { WorldHeritage.registrationDivision[3] ? <FaBomb /> : '' } */}
              <Box textAlign="left" ml={3}>
                <Text>■ {WorldHeritage.name}</Text>
                <Text>・・・{WorldHeritage.summary}</Text>
                <Text>保有国：{WorldHeritage.holdingCountry}</Text>
                <Text>登録年：{WorldHeritage.year}年</Text>
                <Text>登録基準：{WorldHeritage.registrationCriteria}</Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default WorldHeritageList;