import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import PokemonDetails from "./components/PokemonDetails.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetails />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
