import { Section, Photo } from "components/Helpers/helpers.styled";
import { Wrap, Container, Title, PrimaryTitle, List, Item, SubTitle ,Descr} from "./Advantages.styled";
import naturesPhoto from "img/natures-photo.png";

const Advantages = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <Title>What’s inside?</Title>
          <PrimaryTitle>All of nature’s healing wisdom.</PrimaryTitle>
          <List>
            <Item>
              <SubTitle>Boost your focus</SubTitle>
              <Descr>
                Encourages higher measures of mental performance like
                associative thinking, short-term memory, and concentration to
                help you reach your peak cognitive function.
              </Descr>
            </Item>
            <Item>
              <SubTitle>Increase your energy</SubTitle>
              <Descr>
                Enhances ATP production and mitochondrial function to support
                your natural energy levels and promote cellular repair.
              </Descr>
            </Item>
            <Item>
              <SubTitle>Find your calm</SubTitle>
              <Descr>
                Helps balance your mind's serotonin, norepinephrine, and
                dopamine levels without causing drowsiness or fatigue, to
                improve your body's response to stress.
              </Descr>
            </Item>
          </List>
        </Wrap>

        <Photo src={naturesPhoto} alt="a woman looks to the side" style={{width: '550px',
height: '812px'}}/>
      </Container>
    </Section>
  );
};


export default Advantages;