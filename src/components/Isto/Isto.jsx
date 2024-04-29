import { Btn } from "components/Helpers/helpers.styled";
import { Section, Wrap, Title, Accent, Text, Container, Photo } from "./Isto.styled";
import istoPhoto from "img/isto-photo.png";

const Isto = () => {
  return (
    <Section>
      <Container> 
        <Photo
          src={istoPhoto}
          alt="human leisure"
        />
        <Wrap>
          <Title>CLINICALLY PROVEN</Title>
          <Accent>ISTO</Accent>
          <Text>
            The ISTO Clinical Study is a randomized, double-blind human study
            that shows LK-01™ Pure Salidroside supports oxygen uptake and mood
            state. The preliminary results of our clinical study support LK-01
            as a must-have for improved endurance and resiliency.
          </Text>
          <Btn>Learn more</Btn>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Isto;
