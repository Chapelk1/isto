import { Container } from "components/Helpers/helpers.styled";
import { Frame, Section } from "./Video.styled";
const Video = () => {
  return (
    <Section >
      <Container style={{padding: 0}}>
        <Frame
          style={{ display: 'block',}}
          src="https://www.youtube.com/embed/SnUBb-FAlCY?si=xS7W74ulnj20eS6k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></Frame>
      </Container>
    </Section>
  );
};

export default Video;
