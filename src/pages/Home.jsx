import Carousel from "../components/Carousel";
import ImageContainer from "../components/ImageContainer";
function Home() {
  return (
    <div className="max-w-[1440px] mx-auto mt-10">
      <div className="mb-5">
        <Carousel />
      </div>
      <ImageContainer />
    </div>
  );
}

export default Home;
