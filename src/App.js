import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Calendar } from "@fullcalendar/core";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      {/* ⬆ setting up the colors for the app */}

      {/* ⬇ setting up light/dark mode for the app*/}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
          </main>
        </div>
      </ThemeProvider>
      
    </ColorModeContext.Provider>
  );
}

export default App;
