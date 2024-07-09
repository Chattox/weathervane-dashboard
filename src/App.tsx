import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "./App.css";
import { resolver, theme } from "./theme";
import { DashboardContainer } from "./components/DashboardContainer";
import { useMediaQuery } from "@mantine/hooks";
import { getStations } from "./utils";
import { useEffect, useState } from "react";

function App() {
  const isMobile = useMediaQuery("(max-width: 1024px)") || false;
  const [stations, setStations] = useState<string[]>([]);

  useEffect(() => {
    getStations().then((resStations) => setStations(resStations));
  });

  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <DashboardContainer isMobile={isMobile} stations={stations} />
    </MantineProvider>
  );
}

export default App;
