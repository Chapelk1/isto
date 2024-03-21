import { Section, Container } from "components/Helpers/helpers.styled";

const Video = () => {
  return (
    <Section style={{ background: "var(--tertiary-color)" }}>
      <Container>
        <iframe
          style={{ display: 'block',}}
          width="100%"
          height="556"
          src="https://www.youtube.com/embed/SnUBb-FAlCY?si=xS7W74ulnj20eS6k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Container>
    </Section>
  );
};

export default Video;
