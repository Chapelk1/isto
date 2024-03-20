import { Section, Container, Photo } from "components/Helpers/helpers.styled";
import { Title, Wrap } from "./Partners.styled";
import partners1 from "img/partners01.png";
import partners2 from "img/partners02.png";
import partners3 from "img/partners03.png";
const Partners = () => {
  return (
    <Section style={{ padding: "200px 0 200px 0" }}>
      <Container>
        <Title>Featured In</Title>
        <Wrap>
          <Photo
            src={partners1}
            alt="logo partner"
            style={{ height: "55px", width: "auto" }}
          />
          <Photo
            src={partners2}
            alt="logo partner"
            style={{
              height: "55px",
              width: "auto",
            }}
          />
          <Photo
            src={partners3}
            alt="logo partner"
            style={{ height: "55px", width: "auto" }}
          />
        </Wrap>
      </Container>
    </Section>
  );
};

export default Partners;
