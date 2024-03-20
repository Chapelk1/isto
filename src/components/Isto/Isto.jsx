import { Section, Photo } from "components/Helpers/helpers.styled";
import { Wrap, Title, Accent, Text, Btn, Container } from "./Isto.styled";
import istoPhoto from "img/isto-photo.png";

const Isto = () => {
  return (
    <Section style={{ padding: "50px 0 77px 0" }}>
      <Container style={{ display: "flex", margin: "0" }}>
        <Photo
          src={istoPhoto}
          alt="human leisure"
          style={{
            width: "600px",
            height: "600px",
            marginRight: "50px",
          }}
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
