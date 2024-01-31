import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./App.css";
import { ReadingsOverview } from "./components/ReadingsOverview";
import { LatestReading } from "./components/LatestReading";

function App() {
  return (
    <MantineProvider>
      <LatestReading />
      <ReadingsOverview />
    </MantineProvider>
  );
}

export default App;
