import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./App.css";
import { DashboardContainer } from "./components/DashboardContainer";

function App() {
  return (
    <MantineProvider>
      <DashboardContainer />
    </MantineProvider>
  );
}

export default App;
