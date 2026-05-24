import { useEffect, useState } from "react";

export default function Home() {
  const [gmtTime, setGmtTime] = useState("");
  const [maltaTime, setMaltaTime] = useState("");

  const countries = {
    usa: {
      name: "United States",
      gdp: "$29.1T",
      inflation: "3.0%",
      currency: "USD",
      market: "NASDAQ",
      bloc: "USMCA"
    },

    eu: {
      name: "European Union",
      gdp: "$19.4T",
      inflation: "2.5%",
      currency: "EUR",
      market: "Euronext",
      bloc: "EU / EEA"
    },

    china: {
      name: "China",
      gdp: "$18.5T",
      inflation: "0.8%",
      currency: "CNY",
      market: "SSE",
      bloc: "BRICS"
    },

    india: {
      name: "India",
      gdp: "$4.1T",
      inflation: "4.8%",
      currency: "INR",
      market: "BSE",
      bloc: "BRICS"
    },

    japan: {
      name: "Japan",
      gdp: "$4.3T",
      inflation: "2.2%",
      currency: "JPY",
      market: "Nikkei",
      bloc: "APAC"
    }
  };

  const [selectedCountry, setSelectedCountry] =
    useState(countries.usa);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setGmtTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "UTC"
        })
      );

      setMaltaTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Malta"
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const companies = [
    ["Apple", "$3.2T"],
    ["Microsoft", "$3.1T"],
    ["NVIDIA", "$2.8T"],
    ["Amazon", "$2.1T"],
    ["Google", "$2.0T"],
    ["Meta", "$1.3T"],
    ["Tesla", "$790B"],
    ["Saudi Aramco", "$2.1T"],
    ["TSMC", "$700B"],
    ["Samsung", "$480B"]
  ];

  const crypto = [
    ["Bitcoin", "$108,000"],
    ["Ethereum", "$5,200"],
    ["Solana", "$240"],
    ["BNB", "$920"],
    ["XRP", "$2.81"]
  ];

  const markets = [
    ["NASDAQ", "18,320"],
    ["S&P 500", "5,820"],
    ["FTSE 100", "8,920"],
    ["Nikkei 225", "41,200"],
    ["Brent Oil", "$82.15"],
    ["EUR/USD", "1.09"]
  ];

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h1 style={styles.logo}>Econom𝕏</h1>

        <div style={styles.menu}>
          <p>🌍 Global Economy</p>
          <p>📈 Markets</p>
          <p>💱 Forex</p>
          <p>🪙 Cryptocurrency</p>
          <p>📊 GDP & Inflation</p>
          <p>🇪🇺 Trade Blocs</p>
          <p>🛰 Intelligence</p>
        </div>

        <div style={styles.clockPanel}>
          <div style={styles.clockCard}>
            <p>GMT / UTC</p>
            <h2>{gmtTime}</h2>
          </div>

          <div style={styles.clockCard}>
            <p>Malta Time</p>
            <h2>{maltaTime}</h2>
          </div>
        </div>
      </aside>

      <main style={styles.main}>
        <div style={styles.topbar}>
          <div>
            <h2>Global Economic Intelligence System</h2>

            <p style={{ color: "#666" }}>
              Live macroeconomic monitoring platform
            </p>
          </div>

          <div style={styles.live}>
            ● LIVE
          </div>
        </div>

        <div style={styles.map}>
          <h2 style={{ marginBottom: "25px" }}>
            🌍 Interactive Economic Map
          </h2>

          <div style={styles.mapGrid}>
            <button
              style={styles.mapButton}
              onClick={() => setSelectedCountry(countries.usa)}
            >
              🇺🇸 United States
            </button>

            <button
              style={styles.mapButton}
              onClick={() => setSelectedCountry(countries.eu)}
            >
              🇪🇺 European Union
            </button>

            <button
              style={styles.mapButton}
              onClick={() => setSelectedCountry(countries.china)}
            >
              🇨🇳 China
            </button>

            <button
              style={styles.mapButton}
              onClick={() => setSelectedCountry(countries.india)}
            >
              🇮🇳 India
            </button>

            <button
              style={styles.mapButton}
              onClick={() => setSelectedCountry(countries.japan)}
            >
              🇯🇵 Japan
            </button>
          </div>
        </div>

        <div style={styles.countryPanel}>
          <h1>{selectedCountry.name}</h1>

          <div style={styles.infoRow}>
            <span>GDP</span>
            <span>{selectedCountry.gdp}</span>
          </div>

          <div style={styles.infoRow}>
            <span>Inflation</span>
            <span>{selectedCountry.inflation}</span>
          </div>

          <div style={styles.infoRow}>
            <span>Currency</span>
            <span>{selectedCountry.currency}</span>
          </div>

          <div style={styles.infoRow}>
            <span>Primary Market</span>
            <span>{selectedCountry.market}</span>
          </div>

          <div style={styles.infoRow}>
            <span>Trade Bloc</span>
            <span>{selectedCountry.bloc}</span>
          </div>
        </div>

        <h2 style={styles.section}>Major Markets</h2>

        <div style={styles.grid}>
          {markets.map((m, i) => (
            <div key={i} style={styles.card}>
              <h3>{m[0]}</h3>
              <p style={styles.value}>{m[1]}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.section}>Top Global Companies</h2>

        <div style={styles.grid}>
          {companies.map((c, i) => (
            <div key={i} style={styles.card}>
              <h3>{c[0]}</h3>
              <p style={styles.value}>{c[1]}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.section}>Cryptocurrency Markets</h2>

        <div style={styles.grid}>
          {crypto.map((c, i) => (
            <div key={i} style={styles.card}>
              <h3>{c[0]}</h3>
              <p style={styles.value}>{c[1]}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    background: "#000",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial"
  },

  sidebar: {
    width: "260px",
    background: "#0b0b0b",
    borderRight: "1px solid #1e1e1e",
    padding: "30px"
  },

  logo: {
    fontSize: "42px",
    marginBottom: "40px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    color: "#aaa"
  },

  clockPanel: {
    marginTop: "50px"
  },

  clockCard: {
    background: "#111",
    border: "1px solid #222",
    borderRadius: "14px",
    padding: "15px",
    marginBottom: "15px"
  },

  main: {
    flex: 1,
    padding: "35px"
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px"
  },

  live: {
    color: "#00ff88",
    fontWeight: "bold"
  },

  map: {
    background: "#111",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "30px",
    marginBottom: "35px"
  },

  mapGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px"
  },

  mapButton: {
    background: "#181818",
    color: "white",
    border: "1px solid #333",
    borderRadius: "14px",
    padding: "20px",
    cursor: "pointer",
    fontSize: "16px"
  },

  countryPanel: {
    background: "#101010",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "25px",
    marginBottom: "40px"
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    color: "#ccc"
  },

  section: {
    marginBottom: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "40px"
  },

  card: {
    background: "#101010",
    border: "1px solid #222",
    borderRadius: "14px",
    padding: "20px"
  },

  value: {
    fontSize: "28px",
    marginTop: "10px"
  }
};
