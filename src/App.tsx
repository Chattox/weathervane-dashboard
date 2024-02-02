import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./App.css";
import { resolver, theme } from "./theme";
import { DashboardContainer } from "./components/DashboardContainer";

function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <DashboardContainer />
    </MantineProvider>
  );
}

export default App;
