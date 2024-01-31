import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "./App.css";
import { getAllReadings } from "./utils/api";
import { formatReadings } from "./utils/formatReadings";
import { FormattedReading } from "./types/global";
import { ReadingsOverview } from "./components/ReadingsOverview";

function App() {
  const [readings, setReadings] = useState<FormattedReading[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllReadings().then((res) => {
      setReadings(formatReadings(res));
      setLoading(false);
    });
  }, []);

  return (
    <MantineProvider>
      {loading ? <p>loading</p> : <ReadingsOverview readings={readings} />}
    </MantineProvider>
  );
}

export default App;
