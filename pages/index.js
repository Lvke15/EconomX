
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

  // =====================
  // COUNTRIES
  // =====================

  const countries = [
    {
      name: "United States",
      short: "USA",
      x: 13,
      y: 36,
      flag: "🇺🇸",
      leader: "Donald Trump",
      capital: "Washington D.C.",
      gdp: "$29.1 Trillion",
      population: "341 Million",
      currency: "US Dollar",
      bloc: "USMCA / NATO",
      exports: "Aircraft, Tech, Oil",
      imports: "Electronics, Cars",
      inflation: "2.9%",
      war: "No active war",
    },

    {
      name: "Canada",
      short: "Canada",
      x: 13,
      y: 23,
      flag: "🇨🇦",
      leader: "Mark Carney",
      capital: "Ottawa",
      gdp: "$2.3 Trillion",
      population: "41 Million",
      currency: "Canadian Dollar",
      bloc: "USMCA / NATO",
      exports: "Oil, Lumber",
      imports: "Cars",
      inflation: "2.7%",
      war: "No active war",
    },

    {
      name: "Brazil",
      short: "Brazil",
      x: 22,
      y: 67,
      flag: "🇧🇷",
      leader: "Lula da Silva",
      capital: "Brasília",
      gdp: "$2.4 Trillion",
      population: "214 Million",
      currency: "Real",
      bloc: "MERCOSUR",
      exports: "Soybeans, Iron",
      imports: "Electronics",
      inflation: "4.1%",
      war: "No active war",
    },

    {
      name: "Argentina",
      short: "Argentina",
      x: 24,
      y: 83,
      flag: "🇦🇷",
      leader: "Javier Milei",
      capital: "Buenos Aires",
      gdp: "$690 Billion",
      population: "46 Million",
      currency: "Peso",
      bloc: "MERCOSUR",
      exports: "Agriculture",
      imports: "Machinery",
      inflation: "122%",
      war: "No active war",
    },

    {
      name: "United Kingdom",
      short: "UK",
      x: 42,
      y: 26,
      flag: "🇬🇧",
      leader: "Keir Starmer",
      capital: "London",
      gdp: "$3.8 Trillion",
      population: "69 Million",
      currency: "Pound Sterling",
      bloc: "NATO",
      exports: "Finance",
      imports: "Electronics",
      inflation: "3.2%",
      war: "No active war",
    },

    {
      name: "France",
      short: "France",
      x: 45,
      y: 31,
      flag: "🇫🇷",
      leader: "Emmanuel Macron",
      capital: "Paris",
      gdp: "$3.2 Trillion",
      population: "65 Million",
      currency: "Euro",
      bloc: "EU",
      exports: "Aircraft",
      imports: "Energy",
      inflation: "2.8%",
      war: "No active war",
    },

    {
      name: "Germany",
      short: "Germany",
      x: 48,
      y: 28,
      flag: "🇩🇪",
      leader: "Friedrich Merz",
      capital: "Berlin",
      gdp: "$4.9 Trillion",
      population: "84 Million",
      currency: "Euro",
      bloc: "EU",
      exports: "Cars",
      imports: "Oil",
      inflation: "2.6%",
      war: "No active war",
    },

    {
      name: "Italy",
      short: "Italy",
      x: 50,
      y: 36,
      flag: "🇮🇹",
      leader: "Giorgia Meloni",
      capital: "Rome",
      gdp: "$2.5 Trillion",
      population: "59 Million",
      currency: "Euro",
      bloc: "EU",
      exports: "Luxury goods",
      imports: "Energy",
      inflation: "2.2%",
      war: "No active war",
    },

    {
      name: "Spain",
      short: "Spain",
      x: 43,
      y: 38,
      flag: "🇪🇸",
      leader: "Pedro Sánchez",
      capital: "Madrid",
      gdp: "$1.9 Trillion",
      population: "49 Million",
      currency: "Euro",
      bloc: "EU",
      exports: "Tourism",
      imports: "Oil",
      inflation: "2.5%",
      war: "No active war",
    },

    {
      name: "Malta",
      short: "Malta",
      x: 51,
      y: 42,
      flag: "🇲🇹",
      leader: "Robert Abela",
      capital: "Valletta",
      gdp: "$28 Billion",
      population: "570 Thousand",
      currency: "Euro",
      bloc: "EU",
      exports: "Electronics",
      imports: "Fuel",
      inflation: "2.1%",
      war: "No active war",
    },

    {
      name: "Russia",
      short: "Russia",
      x: 61,
      y: 20,
      flag: "🇷🇺",
      leader: "Vladimir Putin",
      capital: "Moscow",
      gdp: "$2.4 Trillion",
      population: "144 Million",
      currency: "Ruble",
      bloc: "BRICS",
      exports: "Oil & Gas",
      imports: "Electronics",
      inflation: "7.2%",
      war: "Ukraine War",
    },

    {
      name: "China",
      short: "China",
      x: 76,
      y: 37,
      flag: "🇨🇳",
      leader: "Xi Jinping",
      capital: "Beijing",
      gdp: "$19.5 Trillion",
      population: "1.41 Billion",
      currency: "Yuan",
      bloc: "BRICS",
      exports: "Electronics",
      imports: "Oil",
      inflation: "1.4%",
      war: "No active war",
    },

    {
      name: "India",
      short: "India",
      x: 69,
      y: 48,
      flag: "🇮🇳",
      leader: "Narendra Modi",
      capital: "New Delhi",
      gdp: "$4.3 Trillion",
      population: "1.43 Billion",
      currency: "Rupee",
      bloc: "BRICS",
      exports: "IT Services",
      imports: "Oil",
      inflation: "4.9%",
      war: "No active war",
    },

    {
      name: "Japan",
      short: "Japan",
      x: 86,
      y: 36,
      flag: "🇯🇵",
      leader: "Shigeru Ishiba",
      capital: "Tokyo",
      gdp: "$4.5 Trillion",
      population: "123 Million",
      currency: "Yen",
      bloc: "G7",
      exports: "Cars",
      imports: "Oil",
      inflation: "2.1%",
      war: "No active war",
    },

    {
      name: "South Africa",
      short: "S. Africa",
      x: 54,
      y: 83,
      flag: "🇿🇦",
      leader: "Cyril Ramaphosa",
      capital: "Pretoria",
      gdp: "$420 Billion",
      population: "62 Million",
      currency: "Rand",
      bloc: "BRICS",
      exports: "Gold",
      imports: "Machinery",
      inflation: "5.3%",
      war: "No active war",
    },

    {
      name: "Nigeria",
      short: "Nigeria",
      x: 48,
      y: 60,
      flag: "🇳🇬",
      leader: "Bola Tinubu",
      capital: "Abuja",
      gdp: "$390 Billion",
      population: "229 Million",
      currency: "Naira",
      bloc: "African Union",
      exports: "Oil",
      imports: "Machinery",
      inflation: "31%",
      war: "Insurgency",
    },
  ];

  // =====================
  // MARKET DATA
  // =====================

  const [markets, setMarkets] = useState([
    {
      name: "Apple",
      logo: "🍎",
      type: "Companies",
      value: 214.2,
      marketcap: "$3.2 Trillion",
      change: "+1.4%",
      description:
        "Largest public technology company.",
    },

    {
      name: "Microsoft",
      logo: "🪟",
      type: "Companies",
      value: 468.5,
      marketcap: "$3.4 Trillion",
      change: "+0.9%",
      description:
        "Cloud and software giant.",
    },

    {
      name: "NVIDIA",
      logo: "🟩",
      type: "Companies",
      value: 132.1,
      marketcap: "$3.1 Trillion",
      change: "+3.1%",
      description:
        "AI chip manufacturer.",
    },

    {
      name: "Bitcoin",
      logo: "₿",
      type: "Crypto",
      value: 108200,
      marketcap: "$2.1 Trillion",
      change: "+4.2%",
      description:
        "Largest cryptocurrency.",
    },

    {
      name: "Ethereum",
      logo: "◆",
      type: "Crypto",
      value: 5210,
      marketcap: "$620 Billion",
      change: "+2.4%",
      description:
        "Smart contract blockchain.",
    },

    {
      name: "Brent Oil",
      logo: "🛢️",
      type: "Oil",
      value: 83.1,
      marketcap: "$2.8 Trillion sector",
      change: "-0.4%",
      description:
        "Global oil benchmark.",
    },

    {
      name: "EUR/USD",
      logo: "💶",
      type: "Currencies",
      value: 1.11,
      marketcap: "Forex Pair",
      change: "+0.1%",
      description:
        "Euro against US Dollar.",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarkets((prev) =>
        prev.map((item) => ({
          ...item,
          value: Number(
            (
              item.value +
              (Math.random() - 0.5) *
                (item.value > 1000 ? 30 : 1)
            ).toFixed(2)
          ),
        }))
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // =====================
  // BLOCS
  // =====================

  const blocs = [
    {
      name: "European Union",
      logo: "🇪🇺",
      info:
        "27 member states with a combined GDP above $20 trillion.",
      members:
        "Germany, France, Italy, Spain, Malta and others.",
      wiki:
        "https://en.wikipedia.org/wiki/European_Union",
    },

    {
      name: "ASEAN",
      logo: "🌏",
      info:
        "Major Southeast Asian economic bloc.",
      members:
        "Indonesia, Thailand, Singapore, Vietnam and others.",
      wiki:
        "https://en.wikipedia.org/wiki/ASEAN",
    },

    {
      name: "BRICS",
      logo: "🌐",
      info:
        "Emerging economies economic group.",
      members:
        "Brazil, Russia, India, China, South Africa.",
      wiki:
        "https://en.wikipedia.org/wiki/BRICS",
    },

    {
      name: "EFTA",
      logo: "❄️",
      info:
        "European Free Trade Association.",
      members:
        "Norway, Switzerland, Iceland, Liechtenstein.",
      wiki:
        "https://en.wikipedia.org/wiki/EFTA",
    },
  ];

  const renderSpike = (positive) => (
    <svg width="150" height="50">
      <polyline
        fill="none"
        stroke={positive ? "#00ff99" : "#ff5555"}
        strokeWidth="3"
        points={
          positive
            ? "0,35 20,30 40,32 60,18 80,22 100,12 130,15 150,8"
            : "0,10 20,14 40,18 60,30 80,24 100,36 130,34 150,40"
        }
      />
    </svg>
  );

  return (
    <div className="container">

      <div className="sidebar">

        <div
          className="logo"
          onClick={() => setPage("dashboard")}
        >
          Econom𝕏
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

        <button onClick={() => setPage("blocs")}>
          Trade Blocs
        </button>

        <div className="clock">

          <div className="live">
            LIVE ●
          </div>

          <div>
            GMT: {gmtTime}
          </div>

          <div>
            Malta: {maltaTime}
          </div>

        </div>

      </div>

      <div className="main">

        {page === "dashboard" && (
          <>
            <h1 className="title">
              Global Dashboard
            </h1>

            <div className="mapWrap">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                className="map"
              />

              {countries.map((country, i) => (
                <div
                  key={i}
                  className="country"
                  style={{
                    left: `${country.x}%`,
                    top: `${country.y}%`,
                  }}
                  onClick={() =>
                    setSelectedCountry(country)
                  }
                >
                  <div className="dot"></div>

                  <div className="countryText">
                    {country.short}
                  </div>
                </div>
              ))}

            </div>
          </>
        )}

        {page === "markets" && (
          <>
            <h1 className="title">
              Markets
            </h1>

            {[
              "Companies",
              "Crypto",
              "Oil",
              "Currencies",
            ].map((category) => (
              <div key={category}>

                <h2 className="sectionTitle">
                  {category}
                </h2>

                <div className="marketGrid">

                  {markets
                    .filter(
                      (m) => m.type === category
                    )
                    .map((item, i) => (
                      <div
                        className="marketCard"
                        key={i}
                        onClick={() =>
                          setSelectedMarket(item)
                        }
                      >

                        <div className="marketTop">

                          <h2>
                            {item.logo} {item.name}
                          </h2>

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

                        <div className="value">
                          $
                          {item.value.toLocaleString()}
                        </div>

                        <div className="cap">
                          {item.marketcap}
                        </div>

                        {renderSpike(
                          !item.change.includes("-")
                        )}

                      </div>
                    ))}

                </div>

              </div>
            ))}
          </>
        )}

        {page === "news" && (
          <>
            <h1 className="title">
              Global News
            </h1>

            <div className="newsGrid">

              <a
                href="https://www.spacex.com/"
                target="_blank"
                className="newsCard"
              >
                🚀 Starship Flight 12 Launch
              </a>

              <a
                href="https://www.reuters.com/world/us/"
                target="_blank"
                className="newsCard"
              >
                🇺🇸 Trump Economic Policies
              </a>

              <a
                href="https://www.cnbc.com/world/"
                target="_blank"
                className="newsCard"
              >
                📈 Global Markets Rally
              </a>

              <a
                href="https://www.bbc.com/news/technology"
                target="_blank"
                className="newsCard"
              >
                🤖 AI Industry Expansion
              </a>

            </div>
          </>
        )}

        {page === "blocs" && (
          <>
            <h1 className="title">
              Trade Blocs
            </h1>

            <div className="marketGrid">

              {blocs.map((bloc, i) => (
                <div
                  key={i}
                  className="marketCard"
                  onClick={() =>
                    setSelectedBloc(bloc)
                  }
                >
                  <h2>
                    {bloc.logo} {bloc.name}
                  </h2>

                  <p>{bloc.info}</p>

                </div>
              ))}

            </div>
          </>
        )}

      </div>

      {selectedCountry && (
        <div className="popup">

          <h1>
            {selectedCountry.flag}{" "}
            {selectedCountry.name}
          </h1>

          <p>
            <b>Leader:</b>{" "}
            {selectedCountry.leader}
          </p>

          <p>
            <b>Capital:</b>{" "}
            {selectedCountry.capital}
          </p>

          <p>
            <b>GDP:</b>{" "}
            {selectedCountry.gdp}
          </p>

          <p>
            <b>Population:</b>{" "}
            {selectedCountry.population}
          </p>

          <p>
            <b>Currency:</b>{" "}
            {selectedCountry.currency}
          </p>

          <p>
            <b>Trade Bloc:</b>{" "}
            {selectedCountry.bloc}
          </p>

          <p>
            <b>Exports:</b>{" "}
            {selectedCountry.exports}
          </p>

          <p>
            <b>Imports:</b>{" "}
            {selectedCountry.imports}
          </p>

          <p>
            <b>Inflation:</b>{" "}
            {selectedCountry.inflation}
          </p>

          <p>
            <b>Conflict:</b>{" "}
            {selectedCountry.war}
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

      {selectedMarket && (
        <div className="popup">

          <h1>
            {selectedMarket.logo}{" "}
            {selectedMarket.name}
          </h1>

          <p>
            <b>Category:</b>{" "}
            {selectedMarket.type}
          </p>

          <p>
            <b>Value:</b> $
            {selectedMarket.value.toLocaleString()}
          </p>

          <p>
            <b>Change:</b>{" "}
            {selectedMarket.change}
          </p>

          <p>
            <b>Market Cap:</b>{" "}
            {selectedMarket.marketcap}
          </p>

          <p>
            {selectedMarket.description}
          </p>

          <button
            onClick={() =>
              setSelectedMarket(null)
            }
          >
            Close
          </button>

        </div>
      )}

      {selectedBloc && (
        <div className="popup">

          <h1>
            {selectedBloc.logo}{" "}
            {selectedBloc.name}
          </h1>

          <p>{selectedBloc.info}</p>

          <p>{selectedBloc.members}</p>

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
          background: black;
          color: white;
          font-family: Arial;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          display: flex;
          min-height: 100vh;
          background: black;
          color: white;
        }

        .sidebar {
          width: 260px;
          background: #050505;
          border-right: 1px solid #222;
          padding: 28px;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
        }

        .logo {
          font-size: 42px;
          font-weight: bold;
          cursor: pointer;
        }

        .sub {
          margin-top: 8px;
          color: #ccc;
        }

        .byLuke {
          color: #888;
          margin-top: 10px;
          margin-bottom: 35px;
        }

        .sidebar button {
          width: 100%;
          padding: 14px;
          margin-bottom: 14px;
          background: #0b0b0b;
          color: white;
          border: 1px solid #222;
          border-radius: 14px;
          cursor: pointer;
          transition: 0.3s;
        }

        .sidebar button:hover {
          background: white;
          color: black;
        }

        .clock {
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
          width: calc(100% - 260px);
          padding: 35px;
          overflow-x: hidden;
        }

        .title {
          font-size: 52px;
          margin-bottom: 30px;
        }

        .mapWrap {
          position: relative;
          width: 100%;
          overflow: auto;
          border: 1px solid #222;
          border-radius: 22px;
          background: black;
        }

        .map {
          width: 100%;
          min-width: 1200px;
          display: block;
          filter: brightness(1.2);
        }

        .country {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: 0.3s;
        }

        .country:hover {
          transform: translate(-50%, -50%)
            scale(1.1);
        }

        .dot {
          width: 13px;
          height: 13px;
          background: white;
          border-radius: 50%;
        }

        .countryText {
          font-size: 10px;
          color: white;
          margin-top: 4px;
          text-align: center;
          white-space: nowrap;
        }

        .sectionTitle {
          margin-top: 40px;
          margin-bottom: 20px;
          font-size: 30px;
        }

        .marketGrid,
        .newsGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );
          gap: 20px;
        }

        .marketCard,
        .newsCard {
          background: #090909;
          border: 1px solid #222;
          border-radius: 20px;
          padding: 22px;
          transition: 0.3s;
          cursor: pointer;
          color: white;
          text-decoration: none;
        }

        .marketCard:hover,
        .newsCard:hover {
          border-color: white;
          transform: translateY(-5px);
        }

        .marketTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .value {
          font-size: 30px;
          margin-top: 12px;
        }

        .cap {
          color: #aaa;
          margin-top: 8px;
          margin-bottom: 10px;
        }

        .green {
          color: #00ff99;
        }

        .red {
          color: #ff5555;
        }

        .popup {
          position: fixed;
          right: 25px;
          top: 30px;
          width: 360px;
          max-height: 90vh;
          overflow-y: auto;
          background: #070707;
          border: 1px solid #333;
          border-radius: 22px;
          padding: 24px;
          z-index: 999;
        }

        .popup button {
          margin-top: 18px;
          padding: 10px 18px;
          border: none;
          border-radius: 12px;
          background: white;
          cursor: pointer;
        }

        .popup a {
          color: #00ccff;
        }

        @media (max-width: 900px) {
          .sidebar {
            position: relative;
            width: 100%;
            height: auto;
          }

          .main {
            margin-left: 0;
            width: 100%;
          }

          .container {
            flex-direction: column;
          }
        }
      `}</style>

    </div>
  );
}
