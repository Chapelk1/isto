import { Wrap, Title, WrapText, Text, Btn } from "./Hero.styled";
import { Container, Photo, Section } from "components/Helpers/helpers.styled";
import heroPhoto from "img/hero-photo.png";

const Hero = () => {
  return (
    <Section style={{ padding: '335px 0 227px 0', }}>
      <Container style={{ position: "relative" }}>
        <Wrap>
          <Title>Clinically proven. Ethically made.</Title>
          <WrapText>
            <Text>
              Stress and fatigue erode our ability to perform at our best. LK-01
              helps you tackle the mental and physical effects of fatigue to
              perform at your peak.
            </Text>
            <Btn>Shop Now</Btn>
          </WrapText>
        </Wrap>
        <Photo
          src={heroPhoto}
          alt="product container"
          style={{
            width: "700px",
            height: "799px",
            position: "absolute",
            left: "556px",
            top: "-308px",
          }}
        />
      </Container>
    </Section>
  );
};

export default Hero;
