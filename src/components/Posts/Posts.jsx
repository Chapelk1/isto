import galleryOfPosts from "img/img";

const Posts = () => {
  return (
    <section>
      <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      <ul>
        <li>
          <a href="">
            <img src={galleryOfPosts.img1} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={galleryOfPosts.img2} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={galleryOfPosts.img3} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={galleryOfPosts.img4} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={galleryOfPosts.img5} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={galleryOfPosts.img6} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={galleryOfPosts.img7} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={galleryOfPosts.img8} alt="" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Posts;
