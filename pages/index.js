import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [gmt, setGmt] = useState("");
  const [malta, setMalta] = useState("");

  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date();
      setGmt(now.toUTCString().split(" ")[4]);
      setMalta(
        now.toLocaleTimeString("en-GB", { timeZone: "Europe/Malta" })
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const countries = {
    USA: { name: "United States", gdp: "29.1T", infl: "3.0%", cur: "USD" },
    EU: { name: "European Union", gdp: "19.4T", infl: "2.5%", cur: "EUR" },
    CHN: { name: "China", gdp: "18.5T", infl: "0.8%", cur: "CNY" },
    IND: { name: "India", gdp: "4.1T", infl: "4.8%", cur: "INR" },
    JPN: { name: "Japan", gdp: "4.3T", infl: "2.2%", cur: "JPY" }
  };

  const companies = [
    ["Apple", "AAPL", "3.2T"],
    ["Microsoft", "MSFT", "3.1T"],
    ["Nvidia", "NVDA", "2.8T"],
    ["Amazon", "AMZN", "2.1T"],
    ["Google", "GOOGL", "2.0T"],
    ["Meta", "META", "1.3T"],
    ["Tesla", "TSLA", "790B"],
    ["Samsung", "SMSN", "480B"],
    ["BYD", "BYD", "120B"],
    ["ExxonMobil", "XOM", "410B"]
  ];

  const blocs = [
    ["EU", "27 members"],
    ["EFTA", "4 members"],
    ["EEA", "30 members"],
    ["ASEAN", "10 members"],
    ["MERCOSUR", "5 members"]
  ];

  return (
    <div style={styles.app}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>Econom𝕏</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>by Luke Buttiġieġ</div>

        <div style={styles.nav}>
          {["dashboard", "map", "markets", "blocs"].map((p) => (
            <div
              key={p}
              onClick={() => setPage(p)}
              style={{
                ...styles.navItem,
                background: page === p ? "#1a1a1a" : "transparent"
              }}
            >
              {p.toUpperCase()}
            </div>
          ))}
        </div>

        <div style={styles.clockBox}>
          <p>GMT</p>
          <h3>{gmt}</h3>
          <p>Malta</p>
          <h3>{malta}</h3>
        </div>
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        {/* DASHBOARD */}
        {page === "dashboard" && (
          <div style={styles.grid}>
            {companies.map((c) => (
              <div key={c[1]} style={styles.card}>
                <h3>{c[0]}</h3>
                <p>${c[2]}</p>
                <div style={styles.bar}></div>
              </div>
            ))}
          </div>
        )}

        {/* MAP */}
        {page === "map" && (
          <div>
            <h2>Global Map (Clickable)</h2>

            <div style={styles.map}>
              {Object.keys(countries).map((k) => (
                <div
                  key={k}
                  onMouseEnter={() => setHoveredCountry(countries[k])}
                  onClick={() => setSelectedCountry(countries[k])}
                  style={styles.countryDot}
                >
                  {k}
                </div>
              ))}
            </div>

            {hoveredCountry && (
              <div style={styles.hoverBox}>
                {hoveredCountry.name} | GDP {hoveredCountry.gdp}
              </div>
            )}

            {selectedCountry && (
              <div style={styles.panel}>
                <h2>{selectedCountry.name}</h2>
                <p>GDP: {selectedCountry.gdp}</p>
                <p>Inflation: {selectedCountry.infl}</p>
                <p>Currency: {selectedCountry.cur}</p>
              </div>
            )}
          </div>
        )}

        {/* MARKETS */}
        {page === "markets" && (
          <div style={styles.grid}>
            {[
              ["NASDAQ", "18,320"],
              ["S&P500", "5,820"],
              ["Brent Oil", "$82"],
              ["Bitcoin", "$108k"],
              ["Ethereum", "$5.2k"],
              ["EUR/USD", "1.09"]
            ].map((m) => (
              <div key={m[0]} style={styles.card}>
                <h3>{m[0]}</h3>
                <p>{m[1]}</p>
              </div>
            ))}
          </div>
        )}

        {/* BLOCS */}
        {page === "blocs" && (
          <div style={styles.grid}>
            {blocs.map((b) => (
              <div key={b[0]} style={styles.card}>
                <h3>{b[0]}</h3>
                <p>{b[1]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  app: { display: "flex", background: "#000", color: "#fff", minHeight: "100vh" },

  sidebar: {
    width: 260,
    padding: 20,
    borderRight: "1px solid #222"
  },

  logo: { fontSize: 32, fontWeight: "bold" },

  nav: { marginTop: 40 },

  navItem: {
    padding: 10,
    cursor: "pointer",
    marginBottom: 8,
    borderRadius: 6
  },

  clockBox: {
    marginTop: 40,
    padding: 10,
    background: "#111",
    borderRadius: 8
  },

  main: { flex: 1, padding: 20 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: 15
  },

  card: {
    background: "#111",
    padding: 15,
    borderRadius: 10,
    border: "1px solid #222"
  },

  bar: {
    height: 4,
    background: "linear-gradient(90deg,#0f0,#0ff)",
    marginTop: 10
  },

  map: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    gap: 10,
    padding: 20,
    background: "#111",
    borderRadius: 10
  },

  countryDot: {
    padding: 10,
    background: "#222",
    textAlign: "center",
    cursor: "pointer"
  },

  hoverBox: {
    marginTop: 10,
    padding: 10,
    background: "#222"
  },

  panel: {
    marginTop: 10,
    padding: 15,
    background: "#111",
    border: "1px solid #333"
  }
};
