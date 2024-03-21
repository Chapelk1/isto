import { Title, Descr, List, Item, Span, Text } from "./Research.styled";
import {Section, Container, Btn} from "components/Helpers/helpers.styled"
const Research = () => {
  return (
    <Section style={{padding: '260px 0 210px 0',     textAlign: 'center',}}>
      <Container>
        <Title>Industry-changing consistency, purity, and efficacy.</Title>
        <Descr>Bioengineered to help you reach your peak</Descr>
        <List>
          <Item>
            <Span>08 + </Span>
            <Text>Years of research</Text>
          </Item>
          <Item>
            <Span>MIT + YALE</Span>
            <Text>Developed by world-leading scientists</Text>
          </Item>
          <Item>
            <Span>300 + </Span>
            <Text>Peer-reviewed studies</Text>
          </Item>
        </List>
        <Btn>View Salidroside studies on PubMed</Btn>
      </Container>
    </Section>
  );
};

export default Research;