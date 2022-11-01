import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
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
  condition: string;
  WorldHeritages: WorldHeritage[];
};

type isCulturalHeritage = boolean;
type isNaturalHeritage = boolean;
type isNegativeLegacy = boolean;
type inDanger = boolean;

const condition = 'スペイン';


const WorldHeritageList: FC<Props> = (props) => {
  const { condition, WorldHeritages } = props;

  const list = WorldHeritages.filter((WorldHeritage, index) => {
    return WorldHeritage.holdingCountry.indexOf(condition) != -1;
  });

  return (
    <div>
      <Heading size="md" as="h2">
        条件：{condition} 全{list.length}件
      </Heading>
      {/* <List my={8}>
        {list.map((WorldHeritage) => (
          <ListItem key={WorldHeritage.id} m={6}>
            <Flex>
              { WorldHeritage.registrationDivision[0] ? <FaMosque /> : '' }
              { WorldHeritage.registrationDivision[1] ? <FaMountain /> : '' }
              { WorldHeritage.registrationDivision[2] ? <FaSkull /> : '' }
              { WorldHeritage.registrationDivision[3] ? <FaBomb /> : '' }
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
      </List> */}
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>保有国</Th>
              <Th>登録年</Th>
              <Th>登録基準</Th>
              <Th>名称</Th>
              <Th>要約</Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((WorldHeritage) => (
              <Tr key={WorldHeritage.id}>
                <Td>{WorldHeritage.holdingCountry}</Td>
                <Td>{WorldHeritage.year}</Td>
                <Td>{WorldHeritage.registrationCriteria}</Td>
                <Td>{WorldHeritage.name}</Td>
                <Td>{WorldHeritage.summary}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WorldHeritageList;