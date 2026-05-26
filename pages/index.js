import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [gmtTime, setGmtTime] = useState("");
  const [maltaTime, setMaltaTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setGmtTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "UTC",
        })
      );

      setMaltaTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Malta",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const countries = {
    usa: {
      name: "United States",
      flag: "🇺🇸",
      gdp: "$30.5 Trillion",
      currency: "US Dollar",
      capital: "Washington D.C.",
      population: "341 Million",
      exports: "Technology, Oil, Aircraft",
      imports: "Consumer Goods, Electronics",
      bloc: "USMCA, NATO",
      leader: "President",
      war: "No direct war",
      wiki: "https://en.wikipedia.org/wiki/United_States",
    },

    germany: {
      name: "Germany",
      flag: "🇩🇪",
      gdp: "$5.7 Trillion",
      currency: "Euro",
      capital: "Berlin",
      population: "84 Million",
      exports: "Cars, Machinery",
      imports: "Energy, Electronics",
      bloc: "EU, NATO",
      leader: "Chancellor",
      war: "No direct war",
      wiki: "https://en.wikipedia.org/wiki/Germany",
    },

    china: {
      name: "China",
      flag: "🇨🇳",
      gdp: "$19.8 Trillion",
      currency: "Yuan",
      capital: "Beijing",
      population: "1.4 Billion",
      exports: "Electronics, Manufacturing",
      imports: "Energy, Chips",
      bloc: "BRICS",
      leader: "President",
      war: "No direct war",
      wiki: "https://en.wikipedia.org/wiki/China",
    },

    india: {
      name: "India",
      flag: "🇮🇳",
      gdp: "$4.3 Trillion",
      currency: "Indian Rupee",
      capital: "New Delhi",
      population: "1.43 Billion",
      exports: "IT, Pharmaceuticals",
      imports: "Oil, Electronics",
      bloc: "BRICS",
      leader: "Prime Minister",
      war: "Border tensions",
      wiki: "https://en.wikipedia.org/wiki/India",
    },

    malta: {
      name: "Malta",
      flag: "🇲🇹",
      gdp: "$24 Billion",
      currency: "Euro",
      capital: "Valletta",
      population: "560,000",
      exports: "Electronics, Financial Services",
      imports: "Fuel, Machinery",
      bloc: "EU",
      leader: "Prime Minister",
      war: "No war",
      wiki: "https://en.wikipedia.org/wiki/Malta",
    },
  };

  const companies = [
    ["Apple", "+2.4%", "green"],
    ["Microsoft", "+1.2%", "green"],
    ["NVIDIA", "+4.7%", "green"],
    ["Amazon", "-0.8%", "red"],
    ["Tesla", "-2.2%", "red"],
    ["Google", "+1.8%", "green"],
    ["Meta", "+2.9%", "green"],
    ["Samsung", "+0.7%", "green"],
    ["BYD", "+3.5%", "green"],
    ["ExxonMobil", "-1.1%", "red"],
  ];

  const cryptos = [
    ["Bitcoin", "+3.4%", "green"],
    ["Ethereum", "+1.9%", "green"],
    ["Solana", "-2.4%", "red"],
    ["XRP", "+4.1%", "green"],
    ["BNB", "-1.5%", "red"],
    ["Cardano", "+2.3%", "green"],
    ["Dogecoin", "-0.7%", "red"],
    ["Avalanche", "+3.1%", "green"],
    ["Polkadot", "-2.1%", "red"],
    ["Chainlink", "+1.4%", "green"],
  ];

  const oil = [
    ["Brent Crude", "-0.5%", "red"],
    ["WTI Crude", "+0.4%", "green"],
    ["Shell", "+1.2%", "green"],
    ["BP", "-0.8%", "red"],
    ["Chevron", "+0.9%", "green"],
    ["TotalEnergies", "+0.3%", "green"],
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div onClick={() => setPage("dashboard")} style={styles.logo}>
          Econom𝕏
        </div>

        <div style={styles.byline}>by Luke Buttiġieġ</div>

        <button style={styles.button} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button style={styles.button} onClick={() => setPage("markets")}>
          Markets
        </button>

        <button style={styles.button} onClick={() => setPage("news")}>
          News
        </button>

        <button style={styles.button} onClick={() => setPage("blocs")}>
          Trade Blocs
        </button>
      </div>

      <div style={styles.main}>
        <div style={styles.topbar}>
          <div>GMT: {gmtTime}</div>
          <div>Malta: {maltaTime}</div>
        </div>

        {page === "dashboard" && (
          <>
            <div style={styles.panel}>
              <h1>Global Economic Heatmap</h1>

              <svg viewBox="0 0 1000 500" style={styles.map}>
                <image
                  href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  x="0"
                  y="0"
                  width="1000"
                  height="500"
                />

                <circle
                  cx="170"
                  cy="150"
                  r="18"
                  fill="#ffffff10"
                  stroke="white"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() =>
                    setSelectedCountry(countries.usa)
                  }
                />

                <circle
                  cx="505"
                  cy="145"
                  r="10"
                  fill="#ffffff20"
                  stroke="white"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() =>
                    setSelectedCountry(countries.germany)
                  }
                />

                <circle
                  cx="740"
                  cy="200"
                  r="18"
                  fill="#ffffff20"
                  stroke="white"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() =>
                    setSelectedCountry(countries.china)
                  }
                />

                <circle
                  cx="700"
                  cy="260"
                  r="14"
                  fill="#ffffff20"
                  stroke="white"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() =>
                    setSelectedCountry(countries.india)
                  }
                />

                <circle
                  cx="520"
                  cy="210"
                  r="6"
                  fill="#ffffff20"
                  stroke="white"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() =>
                    setSelectedCountry(countries.malta)
                  }
                />
              </svg>
            </div>

            {selectedCountry && (
              <div style={styles.countryPanel}>
                <h2>
                  {selectedCountry.flag} {selectedCountry.name}
                </h2>

                <p><b>GDP:</b> {selectedCountry.gdp}</p>
                <p><b>Currency:</b> {selectedCountry.currency}</p>
                <p><b>Capital:</b> {selectedCountry.capital}</p>
                <p><b>Population:</b> {selectedCountry.population}</p>
                <p><b>Exports:</b> {selectedCountry.exports}</p>
                <p><b>Imports:</b> {selectedCountry.imports}</p>
                <p><b>Trade Blocs:</b> {selectedCountry.bloc}</p>
                <p><b>Leader:</b> {selectedCountry.leader}</p>
                <p><b>War Status:</b> {selectedCountry.war}</p>

                <a
                  href={selectedCountry.wiki}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  Wikipedia Page
                </a>
              </div>
            )}
          </>
        )}

        {page === "markets" && (
          <>
            <div style={styles.marketSection}>
              <h2>Top Companies</h2>

              {companies.map((c, i) => (
                <div key={i} style={styles.marketCard}>
                  <div>
                    <b>{c[0]}</b>
                  </div>

                  <div
                    style={{
                      color: c[2] === "green" ? "#00ff88" : "#ff4444",
                    }}
                  >
                    {c[1]}
                  </div>

                  <div style={styles.chart}>
                    ╱╲╱╲╱╲╱╲
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.marketSection}>
              <h2>Cryptocurrencies</h2>

              {cryptos.map((c, i) => (
                <div key={i} style={styles.marketCard}>
                  <div>
                    <b>{c[0]}</b>
                  </div>

                  <div
                    style={{
                      color: c[2] === "green" ? "#00ff88" : "#ff4444",
                    }}
                  >
                    {c[1]}
                  </div>

                  <div style={styles.chart}>
                    ╱╲╱╲╱╲╱╲
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.marketSection}>
              <h2>Oil & Energy</h2>

              {oil.map((c, i) => (
                <div key={i} style={styles.marketCard}>
                  <div>
                    <b>{c[0]}</b>
                  </div>

                  <div
                    style={{
                      color: c[2] === "green" ? "#00ff88" : "#ff4444",
                    }}
                  >
                    {c[1]}
                  </div>

                  <div style={styles.chart}>
                    ╱╲╱╲╱╲╱╲
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {page === "news" && (
          <div style={styles.newsGrid}>
            <div style={styles.newsCard}>
              <h2>Politics</h2>

              <a
                href="https://en.wikipedia.org/wiki/Russo-Ukrainian_War"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                Ukraine Frontline Developments
              </a>

              <a
                href="https://en.wikipedia.org/wiki/2026_Israeli%E2%80%93Iranian_conflict"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                Israel-Iran Escalation
              </a>
            </div>

            <div style={styles.newsCard}>
              <h2>Science</h2>

              <a
                href="https://en.wikipedia.org/wiki/SpaceX"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                SpaceX Flight 12 Launch
              </a>

              <a
                href="https://en.wikipedia.org/wiki/James_Webb_Space_Telescope"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                Webb Telescope Discoveries
              </a>
            </div>

            <div style={styles.newsCard}>
              <h2>Finance</h2>

              <a
                href="https://en.wikipedia.org/wiki/Nasdaq"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                NASDAQ Hits New High
              </a>
            </div>

            <div style={styles.newsCard}>
              <h2>Technology</h2>

              <a
                href="https://en.wikipedia.org/wiki/Nvidia"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                NVIDIA AI Expansion
              </a>
            </div>
          </div>
        )}

        {page === "blocs" && (
          <div style={styles.panel}>
            <h1>Trade Blocs</h1>

            <p>🇪🇺 European Union</p>
            <p>🇪🇺 EEA</p>
            <p>🇨🇭 EFTA</p>
            <p>🇧🇷 MERCOSUR</p>
            <p>🇨🇳 BRICS</p>
            <p>🇸🇬 ASEAN</p>
          </div>
        )}
      </div>

      <div style={styles.cornerTop}></div>
      <div style={styles.cornerBottom}></div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    background: "#000",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial",
    position: "relative",
    overflow: "hidden",
  },

  sidebar: {
    width: "250px",
    background: "#050505",
    borderRight: "1px solid #222",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  logo: {
    fontSize: "38px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "5px",
    letterSpacing: "2px",
  },

  byline: {
    color: "#aaa",
    marginBottom: "25px",
  },

  button: {
    background: "#111",
    color: "white",
    border: "1px solid #333",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.3s",
  },

  main: {
    flex: 1,
    padding: "25px",
    overflowY: "auto",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#ccc",
  },

  panel: {
    background: "#080808",
    border: "1px solid #222",
    padding: "20px",
    borderRadius: "20px",
    marginBottom: "20px",
  },

  map: {
    width: "100%",
    borderRadius: "18px",
    background: "#020202",
    filter: "brightness(1.15)",
  },

  countryPanel: {
    marginTop: "20px",
    background: "#0d0d0d",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "20px",
    animation: "fade 0.3s ease",
  },

  marketSection: {
    marginBottom: "30px",
  },

  marketCard: {
    background: "#0a0a0a",
    border: "1px solid #222",
    padding: "15px",
    borderRadius: "14px",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  chart: {
    fontSize: "20px",
    color: "#ccc",
  },

  newsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  newsCard: {
    background: "#0a0a0a",
    border: "1px solid #222",
    padding: "20px",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  cornerTop: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "200px",
    height: "200px",
    borderTop: "1px solid #333",
    borderRight: "1px solid #333",
  },

  cornerBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "200px",
    height: "200px",
    borderBottom: "1px solid #333",
    borderLeft: "1px solid #333",
  },
};
