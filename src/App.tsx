import { Loader, MantineProvider } from "@mantine/core";
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getStations().then((resStations) => {
      setStations(resStations);
      if (stations) {
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {loading ? (
        <Loader size="xl" />
      ) : (
        <DashboardContainer isMobile={isMobile} stations={stations} />
      )}
    </MantineProvider>
  );
}

export default App;
