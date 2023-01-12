import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PublicLayout } from "./layouts/PublicLayout";
import { About } from "./pages/About";
import { City } from "./pages/City";
import { Main } from "./pages/Main";
import { Mentoria } from "./pages/Mentoria";
import { Help } from "./pages/Help";
import { Work } from "./pages/Work";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="mentoria" element={<Mentoria />} />
          <Route path="city" element={<City />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
          <Route path="work" element={<Work />} />
        </Routes>
      </PublicLayout>
    </ThemeProvider>
  );
}

export default App;
