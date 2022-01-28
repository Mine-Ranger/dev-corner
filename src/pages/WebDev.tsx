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
          <Snippet text="curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash" />
        </div>
      }
    />
  );
};

export default WebDev;
