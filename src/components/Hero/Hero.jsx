import { Wrap,Section, Title, WrapText, Text, Photo } from "./Hero.styled";
import {
  Container,
  Btn,
} from "components/Helpers/helpers.styled";
import heroPhoto from "img/hero-photo.png";

const Hero = () => {
  return (
    <Section>
      <Container>
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
        />
      </Container>
    </Section>
  );
};

export default Hero;
