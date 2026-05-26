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
      leader: "President Donald Trump",
      gdp: "$30.5T",
      currency: "US Dollar",
      capital: "Washington D.C.",
      population: "341M",
      exports: "Technology, Oil, Aircraft",
      imports: "Electronics, Vehicles",
      bloc: "USMCA, NATO",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/United_States",
    },

    canada: {
      name: "Canada",
      flag: "🇨🇦",
      leader: "Prime Minister Mark Carney",
      gdp: "$2.3T",
      currency: "Canadian Dollar",
      capital: "Ottawa",
      population: "41M",
      exports: "Oil, Lumber",
      imports: "Machinery",
      bloc: "USMCA, NATO",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/Canada",
    },

    mexico: {
      name: "Mexico",
      flag: "🇲🇽",
      leader: "President Claudia Sheinbaum",
      gdp: "$2.0T",
      currency: "Mexican Peso",
      capital: "Mexico City",
      population: "132M",
      exports: "Cars, Electronics",
      imports: "Industrial Machinery",
      bloc: "USMCA",
      war: "Cartel insurgency",
      wiki: "https://en.wikipedia.org/wiki/Mexico",
    },

    germany: {
      name: "Germany",
      flag: "🇩🇪",
      leader: "Chancellor Friedrich Merz",
      gdp: "$5.7T",
      currency: "Euro",
      capital: "Berlin",
      population: "84M",
      exports: "Cars, Machinery",
      imports: "Energy",
      bloc: "EU, NATO",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/Germany",
    },

    france: {
      name: "France",
      flag: "🇫🇷",
      leader: "President Emmanuel Macron",
      gdp: "$4.2T",
      currency: "Euro",
      capital: "Paris",
      population: "68M",
      exports: "Aircraft, Luxury Goods",
      imports: "Energy",
      bloc: "EU, NATO",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/France",
    },

    italy: {
      name: "Italy",
      flag: "🇮🇹",
      leader: "Prime Minister Giorgia Meloni",
      gdp: "$3.1T",
      currency: "Euro",
      capital: "Rome",
      population: "59M",
      exports: "Machinery, Fashion",
      imports: "Energy",
      bloc: "EU, NATO",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/Italy",
    },

    malta: {
      name: "Malta",
      flag: "🇲🇹",
      leader: "Prime Minister Robert Abela",
      gdp: "$24B",
      currency: "Euro",
      capital: "Valletta",
      population: "560K",
      exports: "Financial Services",
      imports: "Fuel, Machinery",
      bloc: "EU",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/Malta",
    },

    china: {
      name: "China",
      flag: "🇨🇳",
      leader: "President Xi Jinping",
      gdp: "$19.8T",
      currency: "Yuan",
      capital: "Beijing",
      population: "1.4B",
      exports: "Electronics",
      imports: "Energy, Chips",
      bloc: "BRICS",
      war: "Taiwan tensions",
      wiki: "https://en.wikipedia.org/wiki/China",
    },

    india: {
      name: "India",
      flag: "🇮🇳",
      leader: "Prime Minister Narendra Modi",
      gdp: "$4.3T",
      currency: "Indian Rupee",
      capital: "New Delhi",
      population: "1.43B",
      exports: "IT Services",
      imports: "Oil",
      bloc: "BRICS",
      war: "Border tensions",
      wiki: "https://en.wikipedia.org/wiki/India",
    },

    japan: {
      name: "Japan",
      flag: "🇯🇵",
      leader: "Prime Minister Shigeru Ishiba",
      gdp: "$4.5T",
      currency: "Yen",
      capital: "Tokyo",
      population: "123M",
      exports: "Cars, Electronics",
      imports: "Energy",
      bloc: "G7",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/Japan",
    },

    russia: {
      name: "Russia",
      flag: "🇷🇺",
      leader: "President Vladimir Putin",
      gdp: "$2.3T",
      currency: "Ruble",
      capital: "Moscow",
      population: "144M",
      exports: "Oil, Gas",
      imports: "Technology",
      bloc: "BRICS",
      war: "War in Ukraine",
      wiki: "https://en.wikipedia.org/wiki/Russia",
    },

    ukraine: {
      name: "Ukraine",
      flag: "🇺🇦",
      leader: "President Volodymyr Zelenskyy",
      gdp: "$205B",
      currency: "Hryvnia",
      capital: "Kyiv",
      population: "36M",
      exports: "Agriculture",
      imports: "Weapons",
      bloc: "EU Candidate",
      war: "War with Russia",
      wiki: "https://en.wikipedia.org/wiki/Ukraine",
    },

    israel: {
      name: "Israel",
      flag: "🇮🇱",
      leader: "Prime Minister Benjamin Netanyahu",
      gdp: "$610B",
      currency: "Shekel",
      capital: "Jerusalem",
      population: "10M",
      exports: "Technology",
      imports: "Energy",
      bloc: "OECD",
      war: "Regional conflict",
      wiki: "https://en.wikipedia.org/wiki/Israel",
    },

    iran: {
      name: "Iran",
      flag: "🇮🇷",
      leader: "Supreme Leader Ali Khamenei",
      gdp: "$450B",
      currency: "Rial",
      capital: "Tehran",
      population: "89M",
      exports: "Oil",
      imports: "Industrial Goods",
      bloc: "BRICS",
      war: "Regional conflict",
      wiki: "https://en.wikipedia.org/wiki/Iran",
    },

    saudi: {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      leader: "King Salman",
      gdp: "$1.2T",
      currency: "Saudi Riyal",
      capital: "Riyadh",
      population: "38M",
      exports: "Oil",
      imports: "Technology",
      bloc: "OPEC",
      war: "Yemen conflict involvement",
      wiki: "https://en.wikipedia.org/wiki/Saudi_Arabia",
    },

    southafrica: {
      name: "South Africa",
      flag: "🇿🇦",
      leader: "President Cyril Ramaphosa",
      gdp: "$430B",
      currency: "Rand",
      capital: "Pretoria",
      population: "63M",
      exports: "Minerals",
      imports: "Machinery",
      bloc: "BRICS",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/South_Africa",
    },
  };

  const companies = [
    ["Apple", "+2.4%"],
    ["Microsoft", "+1.2%"],
    ["NVIDIA", "+4.7%"],
    ["Amazon", "-0.8%"],
    ["Tesla", "-2.2%"],
    ["Google", "+1.8%"],
    ["Meta", "+2.9%"],
    ["Samsung", "+0.7%"],
    ["BYD", "+3.5%"],
    ["ExxonMobil", "-1.1%"],
  ];

  return (
    <div style={styles.container}>

      <div style={styles.cornerTop}></div>
      <div style={styles.cornerBottom}></div>

      <div style={styles.sidebar}>
        <div
          style={styles.logo}
          onClick={() => setPage("dashboard")}
        >
          Econom𝕏
        </div>

        <div style={styles.byline}>
          by Luke Buttiġieġ
        </div>

        <button style={styles.button} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button style={styles.button} onClick={() => setPage("markets")}>
          Markets
        </button>

        <button style={styles.button} onClick={() => setPage("news")}>
          News
        </button>

        <button style={styles.button}>
          EU
        </button>

        <button style={styles.button}>
          BRICS
        </button>

        <button style={styles.button}>
          ASEAN
        </button>

        <button style={styles.button}>
          NATO
        </button>

        <button style={styles.button}>
          MERCOSUR
        </button>
      </div>

      <div style={styles.main}>

        <div style={styles.topbar}>
          <div>GMT • {gmtTime}</div>
          <div>Malta • {maltaTime}</div>
        </div>

        {page === "dashboard" && (
          <>
            <div style={styles.mapContainer}>

              <svg
                viewBox="0 0 1000 500"
                style={styles.map}
              >

                <rect width="1000" height="500" fill="#020202" />

                <image
                  href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  x="0"
                  y="0"
                  width="1000"
                  height="500"
                />

                {/* NORTH AMERICA */}

                <rect
                  x="70"
                  y="70"
                  width="150"
                  height="60"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.canada)}
                />

                <rect
                  x="90"
                  y="120"
                  width="130"
                  height="60"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.usa)}
                />

                <rect
                  x="110"
                  y="190"
                  width="80"
                  height="45"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.mexico)}
                />

                {/* EUROPE */}

                <rect
                  x="430"
                  y="90"
                  width="120"
                  height="100"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.germany)}
                />

                <circle
                  cx="485"
                  cy="190"
                  r="5"
                  style={styles.circle}
                  onClick={() => setSelectedCountry(countries.malta)}
                />

                {/* AFRICA */}

                <rect
                  x="430"
                  y="210"
                  width="160"
                  height="180"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.southafrica)}
                />

                {/* MIDDLE EAST */}

                <rect
                  x="560"
                  y="190"
                  width="120"
                  height="70"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.iran)}
                />

                {/* INDIA */}

                <polygon
                  points="650,220 700,220 710,300 665,300"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.india)}
                />

                {/* CHINA */}

                <rect
                  x="710"
                  y="170"
                  width="120"
                  height="90"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.china)}
                />

                {/* JAPAN */}

                <rect
                  x="850"
                  y="150"
                  width="35"
                  height="70"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.japan)}
                />

                {/* RUSSIA */}

                <rect
                  x="550"
                  y="60"
                  width="250"
                  height="70"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.russia)}
                />

                {/* UKRAINE */}

                <rect
                  x="540"
                  y="130"
                  width="40"
                  height="20"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.ukraine)}
                />

                {/* ISRAEL */}

                <rect
                  x="570"
                  y="220"
                  width="12"
                  height="20"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.israel)}
                />

                {/* SAUDI */}

                <rect
                  x="590"
                  y="230"
                  width="50"
                  height="40"
                  style={styles.hitbox}
                  onClick={() => setSelectedCountry(countries.saudi)}
                />

              </svg>
            </div>

            {selectedCountry && (
              <div style={styles.countryPanel}>
                <h2>
                  {selectedCountry.flag} {selectedCountry.name}
                </h2>

                <p><b>Leader:</b> {selectedCountry.leader}</p>
                <p><b>GDP:</b> {selectedCountry.gdp}</p>
                <p><b>Currency:</b> {selectedCountry.currency}</p>
                <p><b>Capital:</b> {selectedCountry.capital}</p>
                <p><b>Population:</b> {selectedCountry.population}</p>
                <p><b>Exports:</b> {selectedCountry.exports}</p>
                <p><b>Imports:</b> {selectedCountry.imports}</p>
                <p><b>Trade Blocs:</b> {selectedCountry.bloc}</p>
                <p><b>Conflict Status:</b> {selectedCountry.war}</p>

                <a
                  href={selectedCountry.wiki}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  Wikipedia Article
                </a>
              </div>
            )}
          </>
        )}

        {page === "markets" && (
          <div>
            <h1 style={{ marginBottom: "20px" }}>
              Global Markets
            </h1>

            {companies.map((c, i) => (
              <div key={i} style={styles.marketCard}>
                <div>
                  <b>{c[0]}</b>
                </div>

                <div
                  style={{
                    color:
                      c[1].includes("-")
                        ? "#ff5555"
                        : "#00ff99",
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
                Ukraine War Developments
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
                NASDAQ Rises
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
                NVIDIA AI Growth
              </a>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

const styles = {

  container: {
    background: "#000",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    fontFamily: "Arial",
    overflow: "hidden",
    position: "relative",
  },

  sidebar: {
    width: "240px",
    background: "#050505",
    borderRight: "1px solid #222",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  logo: {
    fontSize: "40px",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "2px",
  },

  byline: {
    color: "#888",
    marginBottom: "20px",
  },

  button: {
    background: "#0b0b0b",
    border: "1px solid #222",
    color: "white",
    padding: "12px",
    borderRadius: "12px",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#aaa",
  },

  mapContainer: {
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #222",
    background: "#020202",
  },

  map: {
    width: "100%",
    background: "#020202",
  },

  hitbox: {
    fill: "#ffffff00",
    stroke: "#ffffff",
    strokeWidth: "1.4",
    cursor: "pointer",
    transition: "0.2s",
  },

  circle: {
    fill: "#ffffff33",
    stroke: "#fff",
    strokeWidth: "1",
    cursor: "pointer",
  },

  countryPanel: {
    marginTop: "20px",
    background: "#090909",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "20px",
  },

  marketCard: {
    background: "#090909",
    border: "1px solid #222",
    borderRadius: "14px",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },

  chart: {
    color: "#ccc",
  },

  newsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  newsCard: {
    background: "#090909",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  cornerTop: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "180px",
    height: "180px",
    borderTop: "1px solid #333",
    borderRight: "1px solid #333",
  },

  cornerBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "180px",
    height: "180px",
    borderBottom: "1px solid #333",
    borderLeft: "1px solid #333",
  },

};
