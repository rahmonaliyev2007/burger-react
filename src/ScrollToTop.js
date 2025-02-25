import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("hotdog") && !pathname.includes('hamburger') && !pathname.includes('add') && !pathname.includes('edit') && !pathname.includes("pizza") && !pathname.includes('soda') && !pathname.includes('juice')) {
      window.scrollTo(0, 0);
    } 
  }, [pathname]);

  return null;
};

export default ScrollToTop;