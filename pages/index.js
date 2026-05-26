import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [selectedBloc, setSelectedBloc] = useState(null);

  const [gmtTime, setGmtTime] = useState("");
  const [maltaTime, setMaltaTime] = useState("");

  useEffect(() => {
    const updateClocks = () => {
      setGmtTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "UTC",
        })
      );

      setMaltaTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Malta",
        })
      );
    };

    updateClocks();

    const interval = setInterval(updateClocks, 1000);

    return () => clearInterval(interval);
  }, []);

  // =========================
  // COUNTRIES
  // =========================

  const countries = [
    {
      name: "United States",
      short: "USA",
      x: 190,
      y: 220,
      gdp: "$29.1T",
      currency: "USD",
      leader: "Donald Trump",
      capital: "Washington D.C.",
      population: "341M",
      bloc: "USMCA / NATO",
      flag: "🇺🇸",
    },

    {
      name: "Canada",
      short: "Canada",
      x: 190,
      y: 140,
      gdp: "$2.3T",
      currency: "CAD",
      leader: "Mark Carney",
      capital: "Ottawa",
      population: "41M",
      bloc: "USMCA / NATO",
      flag: "🇨🇦",
    },

    {
      name: "Mexico",
      short: "Mexico",
      x: 220,
      y: 280,
      gdp: "$1.9T",
      currency: "Peso",
      leader: "Claudia Sheinbaum",
      capital: "Mexico City",
      population: "132M",
      bloc: "USMCA",
      flag: "🇲🇽",
    },

    {
      name: "United Kingdom",
      short: "UK",
      x: 670,
      y: 180,
      gdp: "$3.8T",
      currency: "Pound",
      leader: "Keir Starmer",
      capital: "London",
      population: "69M",
      bloc: "NATO",
      flag: "🇬🇧",
    },

    {
      name: "France",
      short: "France",
      x: 720,
      y: 220,
      gdp: "$3.2T",
      currency: "Euro",
      leader: "Emmanuel Macron",
      capital: "Paris",
      population: "65M",
      bloc: "EU",
      flag: "🇫🇷",
    },

    {
      name: "Germany",
      short: "Germany",
      x: 760,
      y: 180,
      gdp: "$4.9T",
      currency: "Euro",
      leader: "Friedrich Merz",
      capital: "Berlin",
      population: "84M",
      bloc: "EU",
      flag: "🇩🇪",
    },

    {
      name: "Italy",
      short: "Italy",
      x: 780,
      y: 250,
      gdp: "$2.5T",
      currency: "Euro",
      leader: "Giorgia Meloni",
      capital: "Rome",
      population: "59M",
      bloc: "EU",
      flag: "🇮🇹",
    },

    {
      name: "Malta",
      short: "Malta",
      x: 820,
      y: 300,
      gdp: "$28B",
      currency: "Euro",
      leader: "Robert Abela",
      capital: "Valletta",
      population: "570K",
      bloc: "EU",
      flag: "🇲🇹",
    },

    {
      name: "Russia",
      short: "Russia",
      x: 980,
      y: 120,
      gdp: "$2.4T",
      currency: "Ruble",
      leader: "Vladimir Putin",
      capital: "Moscow",
      population: "144M",
      bloc: "BRICS",
      flag: "🇷🇺",
    },

    {
      name: "China",
      short: "China",
      x: 1220,
      y: 240,
      gdp: "$19.5T",
      currency: "Yuan",
      leader: "Xi Jinping",
      capital: "Beijing",
      population: "1.41B",
      bloc: "BRICS",
      flag: "🇨🇳",
    },

    {
      name: "India",
      short: "India",
      x: 1100,
      y: 330,
      gdp: "$4.3T",
      currency: "Rupee",
      leader: "Narendra Modi",
      capital: "New Delhi",
      population: "1.43B",
      bloc: "BRICS",
      flag: "🇮🇳",
    },

    {
      name: "Japan",
      short: "Japan",
      x: 1380,
      y: 250,
      gdp: "$4.5T",
      currency: "Yen",
      leader: "Shigeru Ishiba",
      capital: "Tokyo",
      population: "123M",
      bloc: "G7",
      flag: "🇯🇵",
    },

    {
      name: "South Korea",
      short: "Korea",
      x: 1330,
      y: 260,
      gdp: "$1.9T",
      currency: "Won",
      leader: "Han Duck-soo",
      capital: "Seoul",
      population: "52M",
      bloc: "OECD",
      flag: "🇰🇷",
    },

    {
      name: "Indonesia",
      short: "Indonesia",
      x: 1220,
      y: 470,
      gdp: "$1.6T",
      currency: "Rupiah",
      leader: "Prabowo Subianto",
      capital: "Jakarta",
      population: "282M",
      bloc: "ASEAN",
      flag: "🇮🇩",
    },

    {
      name: "Thailand",
      short: "Thailand",
      x: 1160,
      y: 390,
      gdp: "$620B",
      currency: "Baht",
      leader: "Srettha Thavisin",
      capital: "Bangkok",
      population: "71M",
      bloc: "ASEAN",
      flag: "🇹🇭",
    },

    {
      name: "Singapore",
      short: "Singapore",
      x: 1180,
      y: 460,
      gdp: "$530B",
      currency: "SGD",
      leader: "Lawrence Wong",
      capital: "Singapore",
      population: "6M",
      bloc: "ASEAN",
      flag: "🇸🇬",
    },

    {
      name: "Switzerland",
      short: "Swiss",
      x: 740,
      y: 200,
      gdp: "$980B",
      currency: "CHF",
      leader: "Viola Amherd",
      capital: "Bern",
      population: "9M",
      bloc: "EFTA",
      flag: "🇨🇭",
    },

    {
      name: "Norway",
      short: "Norway",
      x: 760,
      y: 90,
      gdp: "$610B",
      currency: "Krone",
      leader: "Jonas Gahr Støre",
      capital: "Oslo",
      population: "5.5M",
      bloc: "EFTA / EEA",
      flag: "🇳🇴",
    },
  ];

  // =========================
  // MARKETS
  // =========================

  const [marketData, setMarketData] = useState([
    {
      name: "Apple",
      category: "Companies",
      value: 214.8,
      change: "+1.4%",
      logo: "🍎",
      info: "Largest tech company in the world.",
    },

    {
      name: "Microsoft",
      category: "Companies",
      value: 468.2,
      change: "+0.9%",
      logo: "🪟",
      info: "Global software and cloud giant.",
    },

    {
      name: "Bitcoin",
      category: "Crypto",
      value: 108100,
      change: "+3.8%",
      logo: "₿",
      info: "Largest cryptocurrency.",
    },

    {
      name: "Ethereum",
      category: "Crypto",
      value: 5210,
      change: "+2.1%",
      logo: "◆",
      info: "Smart contract blockchain.",
    },

    {
      name: "Brent Oil",
      category: "Oil",
      value: 83.1,
      change: "-0.4%",
      logo: "🛢️",
      info: "Global oil benchmark.",
    },

    {
      name: "EUR/USD",
      category: "Currencies",
      value: 1.11,
      change: "+0.1%",
      logo: "💶",
      info: "Euro to US Dollar exchange rate.",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prev) =>
        prev.map((item) => ({
          ...item,
          value:
            typeof item.value === "number"
              ? Number(
                  (
                    item.value +
                    (Math.random() - 0.5)
                  ).toFixed(2)
                )
              : item.value,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // =========================
  // TRADE BLOCS
  // =========================

  const blocs = [
    {
      name: "European Union",
      logo: "🇪🇺",
      members: "27 Member States",
      economy: "$20T+ GDP",
      wiki:
        "https://en.wikipedia.org/wiki/European_Union",
    },

    {
      name: "ASEAN",
      logo: "🌏",
      members: "10 Member States",
      economy: "$4T+ GDP",
      wiki:
        "https://en.wikipedia.org/wiki/ASEAN",
    },

    {
      name: "EFTA",
      logo: "❄️",
      members:
        "Norway, Switzerland, Iceland, Liechtenstein",
      economy: "$1.4T GDP",
      wiki:
        "https://en.wikipedia.org/wiki/EFTA",
    },

    {
      name: "BRICS",
      logo: "🌐",
      members:
        "Brazil, Russia, India, China, South Africa",
      economy: "$30T+ GDP",
      wiki:
        "https://en.wikipedia.org/wiki/BRICS",
    },
  ];

  const renderSpike = (positive) => (
    <svg width="130" height="50">
      <polyline
        fill="none"
        stroke={positive ? "#00ff99" : "#ff4444"}
        strokeWidth="3"
        points={
          positive
            ? "0,35 20,28 40,30 60,16 80,20 100,10 130,15"
            : "0,10 20,14 40,18 60,30 80,22 100,36 130,32"
        }
      />
    </svg>
  );

  return (
    <div className="container">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div
          className="logo"
          onClick={() => setPage("dashboard")}
        >
          Econom<span className="xLogo">𝕏</span>
        </div>

        <div className="sub">
          Global Economic Intelligence
        </div>

        <div className="byLuke">
          by Luke Buttiġieġ
        </div>

        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("markets")}>
          Markets
        </button>

        <button onClick={() => setPage("news")}>
          News
        </button>

        <button onClick={() => setPage("tradeblocs")}>
          Trade Blocs
        </button>

        <div className="clockBox">
          <div className="live">
            LIVE ●
          </div>

          <div>GMT: {gmtTime}</div>

          <div>Malta: {maltaTime}</div>
        </div>

      </div>

      {/* MAIN */}

      <div className="main">

        {/* DASHBOARD */}

        {page === "dashboard" && (
          <>
            <h1 className="title">
              Global Dashboard
            </h1>

            <div className="mapContainer">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                className="map"
              />

              {countries.map((country, index) => (
                <div
                  key={index}
                  className="countryWrapper"
                  style={{
                    left: country.x,
                    top: country.y,
                  }}
                  onClick={() =>
                    setSelectedCountry(country)
                  }
                >
                  <div className="countryDot" />

                  <div className="countryName">
                    {country.short}
                  </div>
                </div>
              ))}

            </div>
          </>
        )}

        {/* MARKETS */}

        {page === "markets" && (
          <>
            <h1 className="title">
              Markets
            </h1>

            <div className="categoryTitle">
              Companies
            </div>

            <div className="marketGrid">

              {marketData
                .filter(
                  (x) =>
                    x.category === "Companies"
                )
                .map((item, index) => (
                  <div
                    className="marketCard"
                    key={index}
                    onClick={() =>
                      setSelectedMarket(item)
                    }
                  >
                    <div className="marketTop">
                      <div>
                        <h2>
                          {item.logo} {item.name}
                        </h2>
                      </div>

                      <div
                        className={
                          item.change.includes("-")
                            ? "red"
                            : "green"
                        }
                      >
                        {item.change}
                      </div>
                    </div>

                    <h1>${item.value}</h1>

                    {renderSpike(
                      !item.change.includes("-")
                    )}
                  </div>
                ))}

            </div>

            <div className="categoryTitle">
              Crypto
            </div>

            <div className="marketGrid">

              {marketData
                .filter(
                  (x) =>
                    x.category === "Crypto"
                )
                .map((item, index) => (
                  <div
                    className="marketCard"
                    key={index}
                    onClick={() =>
                      setSelectedMarket(item)
                    }
                  >
                    <div className="marketTop">
                      <div>
                        <h2>
                          {item.logo} {item.name}
                        </h2>
                      </div>

                      <div
                        className={
                          item.change.includes("-")
                            ? "red"
                            : "green"
                        }
                      >
                        {item.change}
                      </div>
                    </div>

                    <h1>${item.value}</h1>

                    {renderSpike(
                      !item.change.includes("-")
                    )}
                  </div>
                ))}

            </div>

          </>
        )}

        {/* NEWS */}

        {page === "news" && (
          <>
            <h1 className="title">
              Global News
            </h1>

            <div className="categoryTitle">
              Science
            </div>

            <div className="newsGrid">

              <a
                href="https://www.spacex.com/"
                target="_blank"
                className="newsCard"
              >
                Starship Flight 12 Launch
              </a>

            </div>

            <div className="categoryTitle">
              Politics
            </div>

            <div className="newsGrid">

              <a
                href="https://www.reuters.com/world/us/"
                target="_blank"
                className="newsCard"
              >
                Trump Economic Policies
              </a>

            </div>

            <div className="categoryTitle">
              Finance
            </div>

            <div className="newsGrid">

              <a
                href="https://www.cnbc.com/world/"
                target="_blank"
                className="newsCard"
              >
                Global Markets Rally
              </a>

            </div>

            <div className="categoryTitle">
              Technology
            </div>

            <div className="newsGrid">

              <a
                href="https://www.bbc.com/news/technology"
                target="_blank"
                className="newsCard"
              >
                AI Industry Expansion
              </a>

            </div>

          </>
        )}

        {/* TRADE BLOCS */}

        {page === "tradeblocs" && (
          <>
            <h1 className="title">
              Trade Blocs
            </h1>

            <div className="blocGrid">

              {blocs.map((bloc, index) => (
                <div
                  className="blocCard"
                  key={index}
                  onClick={() =>
                    setSelectedBloc(bloc)
                  }
                >
                  <h2>
                    {bloc.logo} {bloc.name}
                  </h2>

                  <p>{bloc.members}</p>
                </div>
              ))}

            </div>
          </>
        )}

      </div>

      {/* COUNTRY PANEL */}

      {selectedCountry && (
        <div className="popup">

          <h1>
            {selectedCountry.flag}{" "}
            {selectedCountry.name}
          </h1>

          <p>
            GDP: {selectedCountry.gdp}
          </p>

          <p>
            Currency:
            {selectedCountry.currency}
          </p>

          <p>
            Leader:
            {selectedCountry.leader}
          </p>

          <p>
            Capital:
            {selectedCountry.capital}
          </p>

          <p>
            Population:
            {selectedCountry.population}
          </p>

          <p>
            Bloc: {selectedCountry.bloc}
          </p>

          <button
            onClick={() =>
              setSelectedCountry(null)
            }
          >
            Close
          </button>

        </div>
      )}

      {/* MARKET PANEL */}

      {selectedMarket && (
        <div className="popup">

          <h1>
            {selectedMarket.logo}{" "}
            {selectedMarket.name}
          </h1>

          <p>
            Category:
            {selectedMarket.category}
          </p>

          <p>
            Value:
            {selectedMarket.value}
          </p>

          <p>
            Change:
            {selectedMarket.change}
          </p>

          <p>{selectedMarket.info}</p>

          <button
            onClick={() =>
              setSelectedMarket(null)
            }
          >
            Close
          </button>

        </div>
      )}

      {/* BLOC PANEL */}

      {selectedBloc && (
        <div className="popup">

          <h1>
            {selectedBloc.logo}{" "}
            {selectedBloc.name}
          </h1>

          <p>{selectedBloc.members}</p>

          <p>{selectedBloc.economy}</p>

          <a
            href={selectedBloc.wiki}
            target="_blank"
          >
            Wikipedia
          </a>

          <button
            onClick={() =>
              setSelectedBloc(null)
            }
          >
            Close
          </button>

        </div>
      )}

      <style jsx>{`
        body {
          margin: 0;
          background: #000;
          color: white;
          font-family: Arial;
        }

        .container {
          display: flex;
          background: black;
          min-height: 100vh;
          color: white;
        }

        .sidebar {
          width: 260px;
          padding: 30px;
          border-right: 1px solid #222;
          position: fixed;
          height: 100vh;
          background: #030303;
        }

        .logo {
          font-size: 42px;
          font-weight: bold;
          cursor: pointer;
          color: white;
        }

        .xLogo {
          font-style: italic;
        }

        .sub {
          color: white;
          margin-top: 8px;
        }

        .byLuke {
          color: #aaa;
          margin-top: 10px;
          margin-bottom: 40px;
        }

        .sidebar button {
          width: 100%;
          padding: 14px;
          margin-bottom: 14px;
          background: #0a0a0a;
          border: 1px solid #222;
          color: white;
          border-radius: 14px;
          cursor: pointer;
          transition: 0.3s;
        }

        .sidebar button:hover {
          background: white;
          color: black;
        }

        .clockBox {
          margin-top: 30px;
          padding: 18px;
          border: 1px solid #222;
          border-radius: 18px;
        }

        .live {
          color: #00ff99;
          margin-bottom: 10px;
        }

        .main {
          margin-left: 260px;
          width: 100%;
          padding: 40px;
          color: white;
        }

        .title {
          font-size: 52px;
          margin-bottom: 30px;
          color: white;
        }

        .mapContainer {
          position: relative;
          overflow: auto;
          border: 1px solid #222;
          border-radius: 24px;
        }

        .map {
          width: 1600px;
          filter: brightness(1.2);
        }

        .countryWrapper {
          position: absolute;
          cursor: pointer;
          transition: 0.3s;
        }

        .countryWrapper:hover {
          transform: scale(1.1);
        }

        .countryDot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
        }

        .countryName {
          font-size: 11px;
          color: white;
          margin-top: 4px;
        }

        .marketGrid,
        .blocGrid,
        .newsGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );
          gap: 20px;
          margin-bottom: 30px;
        }

        .marketCard,
        .blocCard,
        .newsCard {
          background: #090909;
          border: 1px solid #222;
          border-radius: 20px;
          padding: 20px;
          transition: 0.3s;
          cursor: pointer;
          color: white;
          text-decoration: none;
        }

        .marketCard:hover,
        .blocCard:hover,
        .newsCard:hover {
          transform: translateY(-5px);
          border-color: white;
        }

        .marketTop {
          display: flex;
          justify-content: space-between;
        }

        .green {
          color: #00ff99;
        }

        .red {
          color: #ff5555;
        }

        .popup {
          position: fixed;
          right: 30px;
          top: 40px;
          width: 340px;
          background: #050505;
          border: 1px solid #333;
          border-radius: 22px;
          padding: 24px;
          animation: fade 0.3s ease;
          z-index: 1000;
        }

        .popup button {
          margin-top: 20px;
          padding: 10px 18px;
          border-radius: 12px;
          border: none;
          background: white;
          cursor: pointer;
        }

        .popup a {
          color: #00ccff;
        }

        .categoryTitle {
          font-size: 28px;
          margin-top: 40px;
          margin-bottom: 20px;
          color: white;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
}
