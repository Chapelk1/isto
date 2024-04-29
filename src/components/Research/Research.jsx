import { Section,Title, Descr, List, Item, Span, Text } from "./Research.styled";
import { Container, Btn} from "components/Helpers/helpers.styled"
const Research = () => {
  return (
    <Section>
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