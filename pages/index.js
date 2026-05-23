import { useEffect, useState } from "react";

export default function Home() {
  const [markets, setMarkets] = useState([]);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toUTCString());
    };

    updateClock();
    setInterval(updateClock, 1000);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://finnhub.io/api/v1/quote?symbol=AAPL&token=YOUR_API_KEY"
        );
        const stock = await res.json();

        setMarkets([
          { name: "Apple", value: stock.c?.toFixed(2) || "N/A" },
          { name: "NASDAQ", value: (15000 + Math.random() * 200).toFixed(2) },
          { name: "EUR/USD", value: (1.08 + Math.random() * 0.01).toFixed(3) },
          { name: "Brent Oil", value: (80 + Math.random() * 2).toFixed(2) },
        ]);
      } catch (e) {
        setMarkets([
          { name: "Apple", value: "N/A" },
          { name: "NASDAQ", value: "15,000" },
          { name: "EUR/USD", value: "1.08" },
          { name: "Brent Oil", value: "$80" },
        ]);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const blocs = ["EU", "EFTA", "EEA", "USMCA", "ASEAN", "BRICS"];

  const macro = [
    { name: "USA Inflation", value: "3.1%" },
    { name: "EU Inflation", value: "2.4%" },
    { name: "Japan Inflation", value: "2.2%" },
    { name: "USA GDP", value: "$29T" },
    { name: "EU GDP", value: "$18T" },
    { name: "China GDP", value: "$18T" },
  ];

  return (
    <div style={styles.bg}>
      <h1 style={styles.title}>Econom𝕏</h1>
      <p style={styles.sub}>Global Economic Intelligence System</p>
      <p style={styles.time}>LIVE • {time}</p>

      <div style={styles.grid}>
        {markets.map((m, i) => (
          <div key={i} style={styles.card}>
            <h3>{m.name}</h3>
            <p style={styles.value}>{m.value}</p>
          </div>
        ))}
      </div>

      <h2 style={styles.section}>Trade Blocs</h2>
      <div style={styles.grid}>
        {blocs.map((b, i) => (
          <div key={i} style={styles.card}>
            {b}
          </div>
        ))}
      </div>

      <h2 style={styles.section}>Inflation & GDP</h2>
      <div style={styles.grid}>
        {macro.map((m, i) => (
          <div key={i} style={styles.card}>
            <h3>{m.name}</h3>
            <p style={styles.value}>{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  bg: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
  },
  sub: {
    color: "#888",
    marginBottom: "10px",
  },
  time: {
    color: "#0f0",
    marginBottom: "30px",
  },
  section: {
    marginTop: "40px",
    color: "#aaa",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#111",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #222",
  },
  value: {
    fontSize: "22px",
    marginTop: "10px",
  },
};
