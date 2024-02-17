import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "./App.css";
import { resolver, theme } from "./theme";
import { DashboardContainer } from "./components/DashboardContainer";
import { useMediaQuery } from "@mantine/hooks";

function App() {
  const isMobile = useMediaQuery("(max-width: 1024px)") || false;

  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <DashboardContainer isMobile={isMobile} />
    </MantineProvider>
  );
}

export default App;
