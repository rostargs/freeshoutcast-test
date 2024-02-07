// Router
import { Route, Routes } from "react-router-dom";
// Layouts
import AppLayout from "./layouts/AppLayout";
// React
import { createContext } from "react";
// MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
// Hooks
import { useToggleColorMode } from "./hooks/useToggleColorMode";
import Home from "./pages/Home";

export const ThemeContext = createContext({ toggleThemeContext: () => {} });

function App() {
  const { theme, colorMode } = useToggleColorMode();
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
