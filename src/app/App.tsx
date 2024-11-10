import { AppRouter } from "@config/routes";
import { theme } from "@config/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
