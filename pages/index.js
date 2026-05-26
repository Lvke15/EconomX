
import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [gmtTime, setGmtTime] = useState("");
  const [maltaTime, setMaltaTime] = useState("");

  useEffect(() => {
    const update = () => {
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

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  const countries = {
    usa: {
      flag: "🇺🇸",
      name: "United States",
      capital: "Washington D.C.",
      population: "341M",
      currency: "US Dollar",
      gdp: "$29.1 Trillion",
      exports: "Technology, Aircraft, Oil",
      imports: "Machinery, Electronics",
      leader: "President",
      bloc: "USMCA",
      war: "No direct war",
      wiki: "https://en.wikipedia.org/wiki/United_States"
    },

    germany: {
      flag: "🇩🇪",
      name: "Germany",
      capital: "Berlin",
      population: "84M",
      currency: "Euro",
      gdp: "$4.9 Trillion",
      exports: "Cars, Chemicals",
      imports: "Energy, Electronics",
      leader: "Chancellor",
      bloc: "EU / EEA",
      war: "No direct war",
      wiki: "https://en.wikipedia.org/wiki/Germany"
    },

    china: {
      flag: "🇨🇳",
      name: "China",
      capital: "Beijing",
      population: "1.4B",
      currency: "Yuan",
      gdp: "$18.5 Trillion",
      exports: "Electronics, Steel",
      imports: "Oil, Semiconductors",
      leader: "President",
      bloc: "BRICS",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/China"
    },

    india: {
      flag: "🇮🇳",
      name: "India",
      capital: "New Delhi",
      population: "1.45B",
      currency: "Indian Rupee",
      gdp: "$4.1 Trillion",
      exports: "IT Services, Pharmaceuticals",
      imports: "Oil, Electronics",
      leader: "Prime Minister",
      bloc: "BRICS",
      war: "Regional tensions",
      wiki: "https://en.wikipedia.org/wiki/India"
    },

    malta: {
      flag: "🇲🇹",
      name: "Malta",
      capital: "Valletta",
      population: "560K",
      currency: "Euro",
      gdp: "$25 Billion",
      exports: "Services, Electronics",
      imports: "Fuel, Machinery",
      leader: "Prime Minister",
      bloc: "EU / Eurozone",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Malta"
    }
  };

  const companies = [
    ["Apple", "$3.2T", "+2.3%"],
    ["Microsoft", "$3.1T", "+1.8%"],
    ["NVIDIA", "$2.8T", "+5.4%"],
    ["Amazon", "$2.1T", "+1.5%"],
    ["Google", "$2.0T", "+1.2%"],
    ["Meta", "$1.4T", "+2.0%"],
    ["Tesla", "$780B", "-3.1%"],
    ["Samsung", "$490B", "+0.8%"],
    ["BYD", "$140B", "+4.2%"],
    ["ExxonMobil", "$530B", "+1.0%"]
  ];

  const cryptos = [
    ["Bitcoin", "$108,000", "+4.1%"],
    ["Ethereum", "$5,200", "+3.0%"],
    ["Solana", "$240", "+8.0%"],
    ["BNB", "$910", "+2.2%"],
    ["XRP", "$2.90", "+5.0%"],
    ["Cardano", "$1.50", "+1.2%"],
    ["Dogecoin", "$0.45", "-1.0%"],
    ["Avalanche", "$92", "+3.3%"],
    ["Chainlink", "$48", "+2.9%"],
    ["Toncoin", "$11", "+4.0%"]
  ];

  const oil = [
    ["Brent Oil", "$82", "+1.5%"],
    ["WTI Crude", "$79", "+1.2%"],
    ["Saudi Aramco", "$2.1T", "+0.9%"],
    ["Shell", "$220B", "+0.6%"],
    ["BP", "$115B", "-0.3%"],
    ["Chevron", "$310B", "+0.8%"],
    ["TotalEnergies", "$170B", "+1.0%"]
  ];

  const renderCards = (items) => (
    <div style={styles.grid}>
      {items.map((item, i) => (
        <div key={i} style={styles.card}>
          <h2>{item[0]}</h2>

          <h1>{item[1]}</h1>

          <p
            style={{
              color:
                item[2][0] === "+"
                  ? "#00ff88"
                  : "#ff5555"
            }}
          >
            {item[2]}
          </p>

          <svg width="100%" height="60">
            <polyline
              fill="none"
              stroke={
                item[2][0] === "+"
                  ? "#00ff88"
                  : "#ff5555"
              }
              strokeWidth="3"
              points={
                item[2][0] === "+"
                  ? "0,50 20,35 40,45 60,18 80,28 100,10 120,18 140,5"
                  : "0,10 20,18 40,15 60,30 80,25 100,40 120,45 140,52"
              }
            />
          </svg>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div
          style={styles.logo}
          onClick={() => setPage("dashboard")}
        >
          <span style={styles.logoE}>E</span>conom𝕏
        </div>

        <p style={styles.credit}>
          by Luke Buttiġieġ
        </p>

        <div style={styles.menu}>
          <button style={styles.button} onClick={() => setPage("dashboard")}>
            Dashboard
          </button>

          <button style={styles.button} onClick={() => setPage("companies")}>
            Companies
          </button>

          <button style={styles.button} onClick={() => setPage("crypto")}>
            Crypto
          </button>

          <button style={styles.button} onClick={() => setPage("oil")}>
            Oil
          </button>

          <button style={styles.button} onClick={() => setPage("news")}>
            News
          </button>
        </div>

        <div style={styles.clockBox}>
          <h3>GMT / UTC</h3>
          <h2>{gmtTime}</h2>
        </div>

        <div style={styles.clockBox}>
          <h3>Malta Time 🇲🇹</h3>
          <h2>{maltaTime}</h2>
        </div>
      </aside>

      <main style={styles.main}>
        {page === "dashboard" && (
          <>
            <div style={styles.header}>
              <div>
                <h1>Global Economic Dashboard</h1>
                <p style={{ color: "#888" }}>
                  May 2026 Economic Intelligence
                </p>
              </div>

              <div style={styles.live}>● LIVE</div>
            </div>

            <div style={styles.mapContainer}>
              <svg viewBox="0 0 1000 500" style={styles.map}>
                <image
                  href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  x="0"
                  y="0"
                  width="1000"
                  height="500"
                  opacity="0.9"
                />

                <circle cx="180" cy="160" r="18" fill="#ffffff22"
                  onMouseEnter={() => setSelectedCountry(countries.usa)} />

                <circle cx="505" cy="145" r="10" fill="#ffffff22"
                  onMouseEnter={() => setSelectedCountry(countries.germany)} />

                <circle cx="760" cy="200" r="16" fill="#ffffff22"
                  onMouseEnter={() => setSelectedCountry(countries.china)} />

                <circle cx="700" cy="260" r="14" fill="#ffffff22"
                  onMouseEnter={() => setSelectedCountry(countries.india)} />

                <circle cx="520" cy="210" r="6" fill="#ffffff22"
                  onMouseEnter={() => setSelectedCountry(countries.malta)} />
              </svg>
            </div>

            {selectedCountry && (
              <div style={styles.countryPanel}>
                <h1>
                  {selectedCountry.flag} {selectedCountry.name}
                </h1>

                <div style={styles.infoGrid}>
                  <div>Capital: {selectedCountry.capital}</div>
                  <div>Population: {selectedCountry.population}</div>
                  <div>Currency: {selectedCountry.currency}</div>
                  <div>GDP: {selectedCountry.gdp}</div>
                  <div>Exports: {selectedCountry.exports}</div>
                  <div>Imports: {selectedCountry.imports}</div>
                  <div>Leader: {selectedCountry.leader}</div>
                  <div>Trade Bloc: {selectedCountry.bloc}</div>
                  <div>Conflict Status: {selectedCountry.war}</div>
                </div>

                <a
                  href={selectedCountry.wiki}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  Open Wikipedia
                </a>
              </div>
            )}
          </>
        )}

        {page === "companies" && renderCards(companies)}

        {page === "crypto" && renderCards(cryptos)}

        {page === "oil" && renderCards(oil)}

        {page === "news" && (
          <div style={styles.newsGrid}>
            <div style={styles.newsCard}>
              <h2>Politics</h2>
              <a href="https://en.wikipedia.org/wiki/Russo-Ukrainian_War" target="_blank" rel="noreferrer" style={styles.link}>
                Ukraine War Developments
              </a>
            </div>

            <div style={styles.newsCard}>
              <h2>Finance</h2>
              <a href="https://en.wikipedia.org/wiki/Nasdaq" target="_blank" rel="noreferrer" style={styles.link}>
                NASDAQ Hits New Highs
              </a>
            </div>

            <div style={styles.newsCard}>
              <h2>Science</h2>
              <a href="https://en.wikipedia.org/wiki/SpaceX" target="_blank" rel="noreferrer" style={styles.link}>
                SpaceX Expansion
              </a>
            </div>

            <div style={styles.newsCard}>
              <h2>Technology</h2>
              <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noreferrer" style={styles.link}>
                AI Market Growth
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#000",
    color: "white",
    fontFamily: "Arial"
  },

  sidebar: {
    width: "280px",
    background: "linear-gradient(to bottom,#0a0a0a,#050505)",
    borderRight: "1px solid #222",
    padding: "30px"
  },

  logo: {
    fontSize: "40px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  logoE: {
    border: "2px solid white",
    padding: "2px 8px",
    marginRight: "2px"
  },

  credit: {
    color: "#888",
    marginBottom: "30px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  button: {
    background: "#111",
    color: "white",
    border: "1px solid #222",
    padding: "14px",
    borderRadius: "14px",
    cursor: "pointer"
  },

  clockBox: {
    marginTop: "25px",
    background: "#111",
    border: "1px solid #222",
    borderRadius: "14px",
    padding: "15px"
  },

  main: {
    flex: 1,
    padding: "30px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px"
  },

  live: {
    color: "#00ff88",
    fontWeight: "bold"
  },

  mapContainer: {
    background: "#080808",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "20px"
  },

  map: {
    width: "100%",
    borderRadius: "16px"
  },

  countryPanel: {
    marginTop: "30px",
    background: "#0f0f0f",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "25px"
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginTop: "20px",
    color: "#ccc"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px"
  },

  card: {
    background: "#101010",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "20px"
  },

  newsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },

  newsCard: {
    background: "#111",
    border: "1px solid #222",
    borderRadius: "16px",
    padding: "20px"
  },

  link: {
    color: "#00bbff",
    display: "inline-block",
    marginTop: "15px"
  }
};

