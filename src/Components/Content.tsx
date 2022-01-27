import WebDev from "../pages/WebDev";
import GameDev from "../pages/GameDev";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Content = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="web" />} />
        <Route path="web" element={<WebDev />} />
        <Route path="game" element={<GameDev />} />
      </Routes>
    </AnimatePresence>
  );
};

export const AnimatedPage = ({ html = <div></div> }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {html}
    </motion.div>
  );
};

export default Content;
