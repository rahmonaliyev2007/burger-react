import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Menu from "./pages/Menu";
import { Footer } from "./Components/footer";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Comments from "./pages/Comments";
import Hamburger from "./pages/Hamburger2";
import HotDog from "./pages/Hot_dog";
import Pizza from "./pages/Pizza";
import Soda from "./pages/Soda";
import Juice from "./pages/Juice";
import Add from "./pages/Add";
import ScrollToTop from "./ScrollToTop";
import Edit from "./pages/Edit";
import './i18n'; 


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Hamburger/>} />
          <Route path="hotdog" element={<HotDog />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="soda" element={<Soda />} />
          <Route path="juice" element={<Juice />} />
          <Route path='edit/:id' element={<Edit />} />
          <Route path='add/:id' element={<Add />} />
        </Route>
        <Route path="/menu" element={<Menu />}>
          <Route path="posts" element={<Posts />} />
          <Route path="todos" element={<Todos />} />
          <Route path="comments" element={<Comments />} />
        </Route>

      </Routes>
      <About />
      <Footer />
    </Router>
  );
}

export default App;