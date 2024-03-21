import { Section, Container, Photo } from "components/Helpers/helpers.styled";
import { Title, List, Item, Link } from "./Posts.styled";

import galleryOfPosts from "img/img";

const Posts = () => {
  return (
    <Section style={{ padding: "169px 0 3px 0" }}>
      <Title>@loremIpsumDolor & #sitAmetConsectetur.</Title>
      <List>
        <Item>
          <Link href="./">
            <Photo src={galleryOfPosts.img1} alt="people in the mountains" />
          </Link>
        </Item>
        <Item>
          <Link href="./">
            <Photo src={galleryOfPosts.img2} alt="cold desert" />
          </Link>
        </Item>
        <Item>
          <Link href="./">
            <Photo src={galleryOfPosts.img3} alt="forest in the mountains" />
          </Link>
        </Item>
        <Item>
          <Link href="./">
            <Photo src={galleryOfPosts.img4} alt="product name" />
          </Link>
        </Item>
        <Item>
          <Link href="./">
            <Photo src={galleryOfPosts.img5} alt="sand on the table" />
          </Link>
        </Item>
        <Item>
          <Link href="./">
            <Photo src={galleryOfPosts.img6} alt="snow-capped mountains" />
          </Link>
        </Item>
        <Item>
          <Link href="./">
            <Photo
              src={galleryOfPosts.img7}
              alt="mountains and leaves on a blank background"
            />
          </Link>
        </Item>
        <Item>
          <Link href="./">
            <Photo src={galleryOfPosts.img8} alt="high mountain" />
          </Link>
        </Item>
      </List>
    </Section>
  );
};

export default Posts;
