import TopHeading from "../Components/TopHeading";
import { AnimatedPage } from "../Components/Content";
import Snippet from "../Components/Snippet";

const WebDev = () => {
  return (
    <AnimatedPage
      html={
        <div>
          <TopHeading text="Web Development" />
          <div>This is web dev</div>
          <Snippet />
        </div>
      }
    />
  );
};

export default WebDev;
