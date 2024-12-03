import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AppRouter } from '@config/routes';
import { theme } from '@config/styles';
import { useAuthStateSubscription } from '@services/firebase';

export default function App() {
  useAuthStateSubscription();

  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider>
            <AppRouter />
          </SnackbarProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
