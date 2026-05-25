import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [gmtTime, setGmtTime] = useState("");
  const [maltaTime, setMaltaTime] = useState("");

  const countries = {
    usa: {
      name: "United States 🇺🇸",
      gdp: "$29.1T",
      inflation: "3.0%",
      currency: "USD",
      market: "NASDAQ",
      bloc: "USMCA"
    },

    eu: {
      name: "European Union 🇪🇺",
      gdp: "$19.4T",
      inflation: "2.5%",
      currency: "EUR",
      market: "Euronext",
      bloc: "EU / EEA"
    },

    china: {
      name: "China 🇨🇳",
      gdp: "$18.5T",
      inflation: "0.8%",
      currency: "CNY",
      market: "SSE",
      bloc: "BRICS"
    },

    india: {
      name: "India 🇮🇳",
      gdp: "$4.1T",
      inflation: "4.8%",
      currency: "INR",
      market: "BSE",
      bloc: "BRICS"
    },

    japan: {
      name: "Japan 🇯🇵",
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
    ["Apple", "$3.2T", "+2.4%"],
    ["Microsoft", "$3.1T", "+1.8%"],
    ["NVIDIA", "$2.8T", "+5.1%"],
    ["Amazon", "$2.1T", "-0.8%"],
    ["Google", "$2.0T", "+1.1%"],
    ["Meta", "$1.3T", "+2.0%"],
    ["Tesla", "$790B", "-3.2%"],
    ["Samsung", "$480B", "+0.6%"],
    ["BYD", "$120B", "+4.1%"],
    ["ExxonMobil", "$410B", "-1.4%"]
  ];

  const cryptos = [
    ["Bitcoin", "$108,000", "+4.2%"],
    ["Ethereum", "$5,200", "+3.1%"],
    ["Solana", "$240", "+8.5%"],
    ["BNB", "$920", "+2.7%"],
    ["XRP", "$2.81", "-1.2%"]
  ];

  const oil = [
    ["Brent Oil", "$82.15", "+1.5%"],
    ["WTI Crude", "$79.80", "+1.1%"],
    ["Saudi Aramco", "$2.1T", "+0.9%"],
    ["Shell", "$214B", "-0.4%"],
    ["BP", "$112B", "+0.8%"]
  ];

  const news = [
    {
      title: "AI Industry Expansion Accelerates",
      category: "Technology",
      link: "https://en.wikipedia.org/wiki/Artificial_intelligence"
    },

    {
      title: "Global Oil Prices Rise Amid Tensions",
      category: "Energy",
      link: "https://en.wikipedia.org/wiki/Oil_price"
    },

    {
      title: "EU Economic Policy Discussions Continue",
      category: "Politics",
      link: "https://en.wikipedia.org/wiki/European_Union"
    }
  ];

  const renderCards = (data) => (
    <div style={styles.grid}>
      {data.map((item, i) => (
        <div
          key={i}
          style={styles.card}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.background = "#181818";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.background = "#101010";
          }}
        >
          <h3>{item[0]}</h3>

          <p style={styles.value}>{item[1]}</p>

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

          <div
            style={{
              marginTop: "15px",
              height: "5px",
              borderRadius: "10px",
              background:
                item[2][0] === "+"
                  ? "linear-gradient(to right,#00ff88,#00bb66)"
                  : "linear-gradient(to right,#ff5555,#bb2222)"
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
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
            "markets",
            "crypto",
            "oil",
            "news"
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
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "translateX(5px)";
                e.currentTarget.style.background =
                  "#1c1c1c";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform =
                  "translateX(0px)";
                e.currentTarget.style.background =
                  page === p
                    ? "#1a1a1a"
                    : "transparent";
              }}
            >
              {p.toUpperCase()}
            </div>
          ))}
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

      {/* MAIN */}
      <main style={styles.main}>
        <div style={styles.topbar}>
          <div>
            <h1>Global Economic Intelligence System</h1>

            <p style={{ color: "#777" }}>
              Real-time macroeconomic monitoring
              dashboard
            </p>
          </div>

          <div style={styles.live}>
            ● LIVE
          </div>
        </div>

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <>
            <div style={styles.map}>
              <h2 style={{ marginBottom: "25px" }}>
                🌍 Interactive Global Economy Map
              </h2>

              <svg
                viewBox="0 0 800 400"
                style={{
                  width: "100%",
                  background: "#0b0b0b",
                  borderRadius: "16px",
                  border: "1px solid #222"
                }}
              >
                <rect
                  x="120"
                  y="120"
                  width="120"
                  height="70"
                  rx="8"
                  fill="#1f77ff"
                  stroke="white"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setSelectedCountry(countries.usa)
                  }
                />

                <rect
                  x="350"
                  y="110"
                  width="90"
                  height="60"
                  rx="8"
                  fill="#00aa55"
                  stroke="white"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setSelectedCountry(countries.eu)
                  }
                />

                <rect
                  x="520"
                  y="130"
                  width="140"
                  height="90"
                  rx="8"
                  fill="#ff4444"
                  stroke="white"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setSelectedCountry(countries.china)
                  }
                />

                <rect
                  x="470"
                  y="240"
                  width="80"
                  height="55"
                  rx="8"
                  fill="#ffaa00"
                  stroke="white"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setSelectedCountry(countries.india)
                  }
                />

                <rect
                  x="690"
                  y="160"
                  width="45"
                  height="70"
                  rx="8"
                  fill="#ff66aa"
                  stroke="white"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setSelectedCountry(countries.japan)
                  }
                />

                <text x="155" y="160" fill="white">
                  USA
                </text>

                <text x="377" y="145" fill="white">
                  EU
                </text>

                <text x="565" y="180" fill="white">
                  China
                </text>

                <text x="485" y="272" fill="white">
                  India
                </text>

                <text x="697" y="198" fill="white">
                  JP
                </text>
              </svg>
            </div>

            <div style={styles.countryPanel}>
              <h1>{selectedCountry.name}</h1>

              <div style={styles.infoRow}>
                <span>GDP</span>
                <span>{selectedCountry.gdp}</span>
              </div>

              <div style={styles.infoRow}>
                <span>Inflation</span>
                <span>
                  {selectedCountry.inflation}
                </span>
              </div>

              <div style={styles.infoRow}>
                <span>Currency</span>
                <span>{selectedCountry.currency}</span>
              </div>

              <div style={styles.infoRow}>
                <span>Market</span>
                <span>{selectedCountry.market}</span>
              </div>

              <div style={styles.infoRow}>
                <span>Trade Bloc</span>
                <span>{selectedCountry.bloc}</span>
              </div>
            </div>

            <h2 style={styles.section}>
              Top Companies
            </h2>

            {renderCards(companies)}
          </>
        )}

        {/* MARKETS */}
        {page === "markets" && (
          <>
            <h2 style={styles.section}>
              Global Markets
            </h2>

            {renderCards(companies)}
          </>
        )}

        {/* CRYPTO */}
        {page === "crypto" && (
          <>
            <h2 style={styles.section}>
              Cryptocurrency Markets
            </h2>

            {renderCards(cryptos)}
          </>
        )}

        {/* OIL */}
        {page === "oil" && (
          <>
            <h2 style={styles.section}>
              Oil & Energy Markets
            </h2>

            {renderCards(oil)}
          </>
        )}

        {/* NEWS */}
        {page === "news" && (
          <>
            <h2 style={styles.section}>
              Global News Intelligence
            </h2>

            <div style={styles.grid}>
              {news.map((n, i) => (
                <a
                  key={i}
                  href={n.link}
                  target="_blank"
                  style={styles.card}
                >
                  <h3>{n.title}</h3>

                  <p
                    style={{
                      marginTop: "10px",
                      color: "#888"
                    }}
                  >
                    {n.category} • May 2026
                  </p>
                </a>
              ))}
            </div>
          </>
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
    width: "260px",
    background: "#0b0b0b",
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
    padding: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.25s ease"
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
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "40px"
  },

  card: {
    background: "#101010",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "20px",
    transition: "all 0.25s ease",
    boxShadow:
      "0 0 12px rgba(255,255,255,0.03)",
    textDecoration: "none",
    color: "white"
  },

  value: {
    fontSize: "28px",
    marginTop: "10px"
  }
};
