
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [gmtTime, setGmtTime] = useState("");
  const [maltaTime, setMaltaTime] = useState("");

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

  const countries = {
    usa: {
      name: "United States 🇺🇸",
      capital: "Washington D.C.",
      gdpUsd: "$29.1T",
      gdpEur: "€26.8T",
      exports: "Technology, Oil, Aircraft",
      bloc: "USMCA",
      inflation: "3.0%"
    },

    germany: {
      name: "Germany 🇩🇪",
      capital: "Berlin",
      gdpUsd: "$4.9T",
      gdpEur: "€4.5T",
      exports: "Cars, Machinery, Chemicals",
      bloc: "EU / EEA",
      inflation: "2.4%"
    },

    malta: {
      name: "Malta 🇲🇹",
      capital: "Valletta",
      gdpUsd: "$25B",
      gdpEur: "€23B",
      exports: "Services, Electronics",
      bloc: "EU / Eurozone",
      inflation: "2.1%"
    },

    china: {
      name: "China 🇨🇳",
      capital: "Beijing",
      gdpUsd: "$18.5T",
      gdpEur: "€17.0T",
      exports: "Electronics, Steel",
      bloc: "BRICS",
      inflation: "0.8%"
    },

    india: {
      name: "India 🇮🇳",
      capital: "New Delhi",
      gdpUsd: "$4.1T",
      gdpEur: "€3.8T",
      exports: "IT Services, Pharmaceuticals",
      bloc: "BRICS",
      inflation: "4.8%"
    },

    japan: {
      name: "Japan 🇯🇵",
      capital: "Tokyo",
      gdpUsd: "$4.3T",
      gdpEur: "€3.9T",
      exports: "Cars, Robotics",
      bloc: "APAC",
      inflation: "2.2%"
    }
  };

  const companies = [
    {
      name: "Apple",
      value: "$3.2T",
      change: "+2.4%",
      desc: "Consumer electronics and software giant.",
      wiki: "https://en.wikipedia.org/wiki/Apple_Inc."
    },

    {
      name: "Microsoft",
      value: "$3.1T",
      change: "+1.8%",
      desc: "Cloud computing and operating systems leader.",
      wiki: "https://en.wikipedia.org/wiki/Microsoft"
    },

    {
      name: "NVIDIA",
      value: "$2.8T",
      change: "+5.1%",
      desc: "AI and GPU market leader.",
      wiki: "https://en.wikipedia.org/wiki/Nvidia"
    },

    {
      name: "Tesla",
      value: "$790B",
      change: "-3.2%",
      desc: "Electric vehicle and energy company.",
      wiki: "https://en.wikipedia.org/wiki/Tesla,_Inc."
    }
  ];

  const cryptos = [
    {
      name: "Bitcoin",
      value: "$108,000",
      change: "+4.2%",
      wiki: "https://en.wikipedia.org/wiki/Bitcoin"
    },

    {
      name: "Ethereum",
      value: "$5,200",
      change: "+3.1%",
      wiki: "https://en.wikipedia.org/wiki/Ethereum"
    },

    {
      name: "Solana",
      value: "$240",
      change: "+8.5%",
      wiki: "https://en.wikipedia.org/wiki/Solana_(blockchain_platform)"
    }
  ];

  const oil = [
    {
      name: "Brent Oil",
      value: "$82.15",
      change: "+1.5%",
      wiki: "https://en.wikipedia.org/wiki/Brent_Crude"
    },

    {
      name: "WTI Crude",
      value: "$79.80",
      change: "+1.1%",
      wiki: "https://en.wikipedia.org/wiki/West_Texas_Intermediate"
    },

    {
      name: "Saudi Aramco",
      value: "$2.1T",
      change: "+0.9%",
      wiki: "https://en.wikipedia.org/wiki/Saudi_Aramco"
    }
  ];

  const renderMarketCards = (data) => (
    <div style={styles.grid}>
      {data.map((item, i) => (
        <div
          key={i}
          style={styles.card}
          onClick={() => setSelectedMarket(item)}
        >
          <h3>{item.name}</h3>

          <p style={styles.value}>{item.value}</p>

          <p
            style={{
              color:
                item.change[0] === "+"
                  ? "#00ff88"
                  : "#ff5555"
            }}
          >
            {item.change}
          </p>

          <div style={styles.chart}>
            <svg width="100%" height="60">
              <polyline
                fill="none"
                stroke={
                  item.change[0] === "+"
                    ? "#00ff88"
                    : "#ff5555"
                }
                strokeWidth="3"
                points="0,50 20,40 40,45 60,20 80,30 100,10 120,15 140,5"
              />
            </svg>
          </div>

          <p style={{ color: "#777", marginTop: "10px" }}>
            Market movement since April 2026.
          </p>
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
          Econom𝕏
        </div>

        <p style={styles.credit}>
          by Luke Buttiġieġ
        </p>

        <div style={styles.menu}>
          {[
            "dashboard",
            "companies",
            "crypto",
            "oil"
          ].map((p) => (
            <div
              key={p}
              style={{
                ...styles.navItem,
                background:
                  page === p
                    ? "#1a1a1a"
                    : "transparent"
              }}
              onClick={() => setPage(p)}
            >
              {p.toUpperCase()}
            </div>
          ))}
        </div>

        <div style={styles.sidePanel}>
          <h3>Trade Blocs</h3>

          <button style={styles.blocButton}>EU</button>
          <button style={styles.blocButton}>BRICS</button>
          <button style={styles.blocButton}>ASEAN</button>
          <button style={styles.blocButton}>EFTA</button>
          <button style={styles.blocButton}>EEA</button>
          <button style={styles.blocButton}>MERCOSUR</button>
        </div>

        <div style={styles.clockPanel}>
          <div style={styles.clockCard}>
            <p>GMT / UTC</p>
            <h2>{gmtTime}</h2>
          </div>

          <div style={styles.clockCard}>
            <p>Malta Time 🇲🇹</p>
            <h2>{maltaTime}</h2>
          </div>
        </div>
      </aside>

      <main style={styles.main}>
        <div style={styles.topbar}>
          <div>
            <h1>Global Economic Intelligence System</h1>

            <p style={{ color: "#777" }}>
              April 2026 Economic Monitoring Dashboard
            </p>
          </div>

          <div style={styles.live}>
            ● LIVE
          </div>
        </div>

        {page === "dashboard" && (
          <>
            <div style={styles.mapContainer}>
              <h2>🌍 Interactive Mercator Projection</h2>

              <svg
                viewBox="0 0 1000 500"
                style={styles.svgMap}
              >
                <rect width="1000" height="500" fill="#050505" />

                <rect
                  x="120"
                  y="150"
                  width="180"
                  height="90"
                  fill="#111"
                  stroke="white"
                  onClick={() =>
                    setSelectedCountry(countries.usa)
                  }
                />

                <rect
                  x="470"
                  y="130"
                  width="90"
                  height="60"
                  fill="#111"
                  stroke="white"
                  onClick={() =>
                    setSelectedCountry(countries.germany)
                  }
                />

                <rect
                  x="505"
                  y="190"
                  width="35"
                  height="20"
                  fill="#111"
                  stroke="white"
                  onClick={() =>
                    setSelectedCountry(countries.malta)
                  }
                />

                <rect
                  x="670"
                  y="170"
                  width="170"
                  height="100"
                  fill="#111"
                  stroke="white"
                  onClick={() =>
                    setSelectedCountry(countries.china)
                  }
                />

                <rect
                  x="640"
                  y="270"
                  width="100"
                  height="70"
                  fill="#111"
                  stroke="white"
                  onClick={() =>
                    setSelectedCountry(countries.india)
                  }
                />

                <rect
                  x="860"
                  y="180"
                  width="50"
                  height="60"
                  fill="#111"
                  stroke="white"
                  onClick={() =>
                    setSelectedCountry(countries.japan)
                  }
                />
              </svg>
            </div>

            {selectedCountry && (
              <div style={styles.countryPanel}>
                <h2>{selectedCountry.name}</h2>

                <div style={styles.infoRow}>
                  <span>Capital</span>
                  <span>{selectedCountry.capital}</span>
                </div>

                <div style={styles.infoRow}>
                  <span>GDP (USD)</span>
                  <span>{selectedCountry.gdpUsd}</span>
                </div>

                <div style={styles.infoRow}>
                  <span>GDP (EUR)</span>
                  <span>{selectedCountry.gdpEur}</span>
                </div>

                <div style={styles.infoRow}>
                  <span>Main Exports</span>
                  <span>{selectedCountry.exports}</span>
                </div>

                <div style={styles.infoRow}>
                  <span>Trade Bloc</span>
                  <span>{selectedCountry.bloc}</span>
                </div>

                <div style={styles.infoRow}>
                  <span>Inflation</span>
                  <span>{selectedCountry.inflation}</span>
                </div>
              </div>
            )}
          </>
        )}

        {page === "companies" && renderMarketCards(companies)}

        {page === "crypto" && renderMarketCards(cryptos)}

        {page === "oil" && renderMarketCards(oil)}

        {selectedMarket && (
          <div style={styles.marketPanel}>
            <h2>{selectedMarket.name}</h2>

            <p style={{ marginTop: "15px" }}>
              {selectedMarket.desc ||
                "Global market intelligence asset."}
            </p>

            <p style={{ marginTop: "15px" }}>
              Value: {selectedMarket.value}
            </p>

            <p>
              Movement: {selectedMarket.change}
            </p>

            <a
              href={selectedMarket.wiki}
              target="_blank"
              style={styles.link}
            >
              Open Wikipedia Article
            </a>
          </div>
        )}
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
    width: "280px",
    background: "#050505",
    borderRight: "1px solid #1f1f1f",
    padding: "30px"
  },

  logo: {
    fontSize: "42px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  credit: {
    color: "#777",
    marginBottom: "40px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  navItem: {
    padding: "14px",
    borderRadius: "14px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    border: "1px solid #151515"
  },

  sidePanel: {
    marginTop: "40px",
    background: "#0d0d0d",
    border: "1px solid #1f1f1f",
    borderRadius: "16px",
    padding: "18px"
  },

  blocButton: {
    width: "100%",
    marginTop: "10px",
    background: "#111",
    color: "white",
    border: "1px solid #222",
    padding: "10px",
    borderRadius: "12px",
    cursor: "pointer"
  },

  clockPanel: {
    marginTop: "40px"
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

  mapContainer: {
    background: "#0b0b0b",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "25px",
    marginBottom: "30px"
  },

  svgMap: {
    width: "100%",
    marginTop: "20px",
    borderRadius: "16px"
  },

  countryPanel: {
    background: "#0f0f0f",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "25px",
    marginBottom: "30px",
  },

  marketPanel: {
    marginTop: "40px",
    background: "#0f0f0f",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "25px"
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "14px",
    color: "#ccc"
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px"
  },

  card: {
    background: "#101010",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "20px",
    transition: "all 0.25s ease",
    cursor: "pointer"
  },

  chart: {
    marginTop: "15px"
  },

  value: {
    fontSize: "28px",
    marginTop: "10px"
  },

  link: {
    display: "inline-block",
    marginTop: "20px",
    color: "#00bbff"
  }
};
```

Then:

1. Save the file
2. Commit changes
3. Push to GitHub
4. Wait for Vercel deployment
5. Refresh your Econom𝕏 site
