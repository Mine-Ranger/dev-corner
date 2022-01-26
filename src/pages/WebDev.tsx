import TopHeading from "../Components/TopHeading";
import { motion } from "framer-motion";
import { AnimatedPage } from "../Components/Content";

const WebDev = () => {
  return (
    <AnimatedPage
      html={
        <div>
          <TopHeading text="Web Development" />
          <div>This is web dev</div>
        </div>
      }
    />
  );
};

export default WebDev;
