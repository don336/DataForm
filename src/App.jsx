import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Styles/theme.jsx";
import DataForm from "./features/DataForm";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters>
        <DataForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
