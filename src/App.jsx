import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Navbar from "./Components/Navbar";
import Menu from "./pages/Menu";
import { Footer } from "./Components/footer";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Comments from "./pages/Comments";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
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