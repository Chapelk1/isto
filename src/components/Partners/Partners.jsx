import { Container } from "components/Helpers/helpers.styled";
import { Title, Wrap,Photo, Section } from "./Partners.styled";
import partners1 from "img/partners01.png";
import partners2 from "img/partners02.png";
import partners3 from "img/partners03.png";
const Partners = () => {
  return (
    <Section>
      <Container>
        <Title>Featured In</Title>
        <Wrap>
          <Photo
            src={partners1}
            alt="logo partner"
          />
          <Photo
            src={partners2}
            alt="logo partner"
          />
          <Photo
            src={partners3}
            alt="logo partner"
          />
        </Wrap>
      </Container>
    </Section>
  );
};

export default Partners;
