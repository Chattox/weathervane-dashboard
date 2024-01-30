import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import { getAllReadings } from "./utils/api";

function App() {
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllReadings().then((res) => {
      setReadings(res);
      setLoading(false);
    });
  }, []);

  return <MantineProvider></MantineProvider>;
}

export default App;
