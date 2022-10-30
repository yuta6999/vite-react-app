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
import { FaMosque, FaMountain, FaBomb, FaSkull } from "react-icons/fa";

export interface WorldHeritage {
  id: number;
  holdingCountry: string;
  region: string;
  year: string;
  registrationCriteria: string;
  registrationDivision: [boolean, boolean, boolean, boolean];
  name: string;
  summary: string;
}

type Props = {
  groupName: string;
  WorldHeritages: WorldHeritage[];
};

type isCulturalHeritage = boolean;
type isNaturalHeritage = boolean;
type inDanger = boolean;
type isNegativeLegacy = boolean;

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
              { WorldHeritage.registrationDivision[0] ? <FaMosque /> : '' }
              { WorldHeritage.registrationDivision[1] ? <FaMountain /> : '' }
              { WorldHeritage.registrationDivision[2] ? <FaBomb /> : '' }
              { WorldHeritage.registrationDivision[3] ? <FaSkull /> : '' }
              <Box textAlign="left" ml={3}>
                <Text>{WorldHeritage.region}</Text>
                <Text>{WorldHeritage.holdingCountry}</Text>
                <Text>{WorldHeritage.year}</Text>
                <Text>{WorldHeritage.registrationCriteria}</Text>
                <Text>{WorldHeritage.name}</Text>
                <Text>{WorldHeritage.summary}</Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default WorldHeritageList;