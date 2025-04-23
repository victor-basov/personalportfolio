import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
// import Testimonials from "./components/testimonials/Testimonials"
// import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Works/>
          {/* <Testimonials/> */}
          {/* <Contact/> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
