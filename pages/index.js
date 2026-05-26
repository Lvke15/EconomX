import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  const countries = [
    {
      name: "United States",
      x: 180,
      y: 220,
      gdp: "$29.1T",
      currency: "US Dollar",
      leader: "Donald Trump",
      capital: "Washington D.C.",
      population: "341M",
      exports: "Technology, Oil, Aircraft",
      imports: "Electronics, Machinery",
      bloc: "USMCA / NATO",
      flag: "🇺🇸",
      war: "No active war",
    },

    {
      name: "Canada",
      x: 180,
      y: 140,
      gdp: "$2.3T",
      currency: "Canadian Dollar",
      leader: "Mark Carney",
      capital: "Ottawa",
      population: "41M",
      exports: "Oil, Lumber",
      imports: "Vehicles",
      bloc: "USMCA / NATO",
      flag: "🇨🇦",
      war: "No active war",
    },

    {
      name: "Mexico",
      x: 210,
      y: 280,
      gdp: "$1.9T",
      currency: "Mexican Peso",
      leader: "Claudia Sheinbaum",
      capital: "Mexico City",
      population: "132M",
      exports: "Cars, Electronics",
      imports: "Machinery",
      bloc: "USMCA",
      flag: "🇲🇽",
      war: "No active war",
    },

    {
      name: "Brazil",
      x: 350,
      y: 470,
      gdp: "$2.4T",
      currency: "Brazilian Real",
      leader: "Luiz Inácio Lula da Silva",
      capital: "Brasília",
      population: "214M",
      exports: "Soybeans, Iron",
      imports: "Machinery",
      bloc: "MERCOSUR",
      flag: "🇧🇷",
      war: "No active war",
    },

    {
      name: "United Kingdom",
      x: 670,
      y: 170,
      gdp: "$3.8T",
      currency: "Pound Sterling",
      leader: "Keir Starmer",
      capital: "London",
      population: "69M",
      exports: "Finance, Cars",
      imports: "Electronics",
      bloc: "NATO",
      flag: "🇬🇧",
      war: "No active war",
    },

    {
      name: "France",
      x: 720,
      y: 210,
      gdp: "$3.2T",
      currency: "Euro",
      leader: "Emmanuel Macron",
      capital: "Paris",
      population: "65M",
      exports: "Aircraft, Luxury",
      imports: "Energy",
      bloc: "EU / NATO",
      flag: "🇫🇷",
      war: "No active war",
    },

    {
      name: "Germany",
      x: 760,
      y: 180,
      gdp: "$4.9T",
      currency: "Euro",
      leader: "Friedrich Merz",
      capital: "Berlin",
      population: "84M",
      exports: "Cars, Machinery",
      imports: "Energy",
      bloc: "EU / NATO",
      flag: "🇩🇪",
      war: "No active war",
    },

    {
      name: "Italy",
      x: 780,
      y: 240,
      gdp: "$2.5T",
      currency: "Euro",
      leader: "Giorgia Meloni",
      capital: "Rome",
      population: "59M",
      exports: "Cars, Fashion",
      imports: "Energy",
      bloc: "EU / NATO",
      flag: "🇮🇹",
      war: "No active war",
    },

    {
      name: "Spain",
      x: 690,
      y: 260,
      gdp: "$1.9T",
      currency: "Euro",
      leader: "Pedro Sánchez",
      capital: "Madrid",
      population: "49M",
      exports: "Cars, Tourism",
      imports: "Oil",
      bloc: "EU / NATO",
      flag: "🇪🇸",
      war: "No active war",
    },

    {
      name: "Malta",
      x: 820,
      y: 300,
      gdp: "$28B",
      currency: "Euro",
      leader: "Robert Abela",
      capital: "Valletta",
      population: "570K",
      exports: "Electronics, Services",
      imports: "Fuel",
      bloc: "EU",
      flag: "🇲🇹",
      war: "No active war",
    },

    {
      name: "Russia",
      x: 980,
      y: 120,
      gdp: "$2.4T",
      currency: "Russian Ruble",
      leader: "Vladimir Putin",
      capital: "Moscow",
      population: "144M",
      exports: "Oil, Gas",
      imports: "Electronics",
      bloc: "BRICS",
      flag: "🇷🇺",
      war: "Ukraine War",
    },

    {
      name: "Ukraine",
      x: 860,
      y: 180,
      gdp: "$189B",
      currency: "Hryvnia",
      leader: "Volodymyr Zelenskyy",
      capital: "Kyiv",
      population: "37M",
      exports: "Grain",
      imports: "Weapons",
      bloc: "EU Candidate",
      flag: "🇺🇦",
      war: "Russia-Ukraine War",
    },

    {
      name: "China",
      x: 1220,
      y: 240,
      gdp: "$19.5T",
      currency: "Yuan",
      leader: "Xi Jinping",
      capital: "Beijing",
      population: "1.41B",
      exports: "Electronics",
      imports: "Oil",
      bloc: "BRICS",
      flag: "🇨🇳",
      war: "No active war",
    },

    {
      name: "India",
      x: 1100,
      y: 330,
      gdp: "$4.3T",
      currency: "Indian Rupee",
      leader: "Narendra Modi",
      capital: "New Delhi",
      population: "1.43B",
      exports: "IT Services",
      imports: "Oil",
      bloc: "BRICS",
      flag: "🇮🇳",
      war: "No active war",
    },

    {
      name: "Japan",
      x: 1380,
      y: 250,
      gdp: "$4.5T",
      currency: "Yen",
      leader: "Shigeru Ishiba",
      capital: "Tokyo",
      population: "123M",
      exports: "Cars, Electronics",
      imports: "Oil",
      bloc: "G7",
      flag: "🇯🇵",
      war: "No active war",
    },

    {
      name: "South Korea",
      x: 1330,
      y: 260,
      gdp: "$1.9T",
      currency: "Won",
      leader: "Han Duck-soo",
      capital: "Seoul",
      population: "52M",
      exports: "Semiconductors",
      imports: "Oil",
      bloc: "OECD",
      flag: "🇰🇷",
      war: "Korean Conflict",
    },

    {
      name: "Saudi Arabia",
      x: 960,
      y: 340,
      gdp: "$1.1T",
      currency: "Saudi Riyal",
      leader: "Mohammed bin Salman",
      capital: "Riyadh",
      population: "38M",
      exports: "Oil",
      imports: "Machinery",
      bloc: "OPEC",
      flag: "🇸🇦",
      war: "Regional tensions",
    },

    {
      name: "Israel",
      x: 900,
      y: 310,
      gdp: "$570B",
      currency: "Shekel",
      leader: "Benjamin Netanyahu",
      capital: "Jerusalem",
      population: "9.9M",
      exports: "Technology",
      imports: "Oil",
      bloc: "OECD",
      flag: "🇮🇱",
      war: "Israel-Hamas Conflict",
    },

    {
      name: "Iran",
      x: 980,
      y: 300,
      gdp: "$450B",
      currency: "Iranian Rial",
      leader: "Ali Khamenei",
      capital: "Tehran",
      population: "89M",
      exports: "Oil",
      imports: "Machinery",
      bloc: "BRICS",
      flag: "🇮🇷",
      war: "Middle East conflict",
    },

    {
      name: "South Africa",
      x: 860,
      y: 700,
      gdp: "$420B",
      currency: "Rand",
      leader: "Cyril Ramaphosa",
      capital: "Pretoria",
      population: "62M",
      exports: "Gold, Platinum",
      imports: "Machinery",
      bloc: "BRICS",
      flag: "🇿🇦",
      war: "No active war",
    },

    {
      name: "Nigeria",
      x: 760,
      y: 520,
      gdp: "$390B",
      currency: "Naira",
      leader: "Bola Tinubu",
      capital: "Abuja",
      population: "229M",
      exports: "Oil",
      imports: "Machinery",
      bloc: "African Union",
      flag: "🇳🇬",
      war: "Insurgency",
    },
  ];

  const marketData = [
    {
      name: "Apple",
      value: "$214.83",
      change: "+1.4%",
      positive: true,
    },
    {
      name: "Microsoft",
      value: "$468.22",
      change: "+0.8%",
      positive: true,
    },
    {
      name: "Tesla",
      value: "$178.12",
      change: "-2.1%",
      positive: false,
    },
    {
      name: "NVIDIA",
      value: "$132.11",
      change: "+3.2%",
      positive: true,
    },
    {
      name: "Amazon",
      value: "$205.71",
      change: "+1.1%",
      positive: true,
    },
    {
      name: "Google",
      value: "$177.42",
      change: "+0.7%",
      positive: true,
    },
    {
      name: "Meta",
      value: "$513.55",
      change: "+2.4%",
      positive: true,
    },
    {
      name: "Brent Oil",
      value: "$83.10",
      change: "-0.4%",
      positive: false,
    },
    {
      name: "Bitcoin",
      value: "$108,100",
      change: "+4.2%",
      positive: true,
    },
    {
      name: "Ethereum",
      value: "$5,210",
      change: "+2.8%",
      positive: true,
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

      <div className="sidebar">

        <div
          className="logo"
          onClick={() => setPage("dashboard")}
        >
          Econom<span className="xLogo">X</span>
        </div>

        <div className="subtitle">
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
          <div>LIVE ●</div>
          <div>GMT: {gmtTime}</div>
          <div>Malta: {maltaTime}</div>
        </div>

      </div>

      <div className="main">

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
                  className="countryPoint"
                  style={{
                    left: country.x,
                    top: country.y,
                  }}
                  onClick={() =>
                    setSelectedCountry(country)
                  }
                />
              ))}

            </div>
          </>
        )}

        {page === "markets" && (
          <>
            <h1 className="title">
              Global Markets
            </h1>

            <div className="marketGrid">

              {marketData.map((item, index) => (
                <div
                  className="marketCard"
                  key={index}
                >
                  <div className="marketTop">
                    <div>
                      <h2>{item.name}</h2>
                    </div>

                    <div
                      className={
                        item.positive
                          ? "green"
                          : "red"
                      }
                    >
                      {item.change}
                    </div>
                  </div>

                  <h1>{item.value}</h1>

                  {renderSpike(item.positive)}
                </div>
              ))}

            </div>
          </>
        )}

        {page === "news" && (
          <>
            <h1 className="title">
              Global News
            </h1>

            <div className="newsGrid">

              <a
                href="https://www.reuters.com/world/"
                target="_blank"
                className="newsCard"
              >
                Ukraine War Latest Updates
              </a>

              <a
                href="https://www.space.com/"
                target="_blank"
                className="newsCard"
              >
                SpaceX Flight 12 Launch
              </a>

              <a
                href="https://www.cnbc.com/world/"
                target="_blank"
                className="newsCard"
              >
                Global Markets Rally
              </a>

              <a
                href="https://www.bbc.com/news"
                target="_blank"
                className="newsCard"
              >
                AI and Technology Expansion
              </a>

              <a
                href="https://www.aljazeera.com/"
                target="_blank"
                className="newsCard"
              >
                Middle East Developments
              </a>

            </div>
          </>
        )}

        {page === "tradeblocs" && (
          <>
            <h1 className="title">
              Trade Blocs
            </h1>

            <div className="blocGrid">

              <div className="blocCard">
                <h2>European Union</h2>
                <p>27 Member States</p>
              </div>

              <div className="blocCard">
                <h2>BRICS</h2>
                <p>
                  Brazil, Russia, India,
                  China, South Africa
                </p>
              </div>

              <div className="blocCard">
                <h2>ASEAN</h2>
                <p>10 Southeast Asian states</p>
              </div>

              <div className="blocCard">
                <h2>EFTA</h2>
                <p>
                  Norway, Switzerland,
                  Iceland, Liechtenstein
                </p>
              </div>

            </div>
          </>
        )}

      </div>

      {selectedCountry && (
        <div className="countryPanel">

          <div className="panelTop">

            <h1>
              {selectedCountry.flag}{" "}
              {selectedCountry.name}
            </h1>

            <button
              onClick={() =>
                setSelectedCountry(null)
              }
            >
              ✕
            </button>

          </div>

          <div className="panelInfo">

            <p>
              <strong>GDP:</strong>{" "}
              {selectedCountry.gdp}
            </p>

            <p>
              <strong>Currency:</strong>{" "}
              {selectedCountry.currency}
            </p>

            <p>
              <strong>Leader:</strong>{" "}
              {selectedCountry.leader}
            </p>

            <p>
              <strong>Capital:</strong>{" "}
              {selectedCountry.capital}
            </p>

            <p>
              <strong>Population:</strong>{" "}
              {selectedCountry.population}
            </p>

            <p>
              <strong>Exports:</strong>{" "}
              {selectedCountry.exports}
            </p>

            <p>
              <strong>Imports:</strong>{" "}
              {selectedCountry.imports}
            </p>

            <p>
              <strong>Trade Bloc:</strong>{" "}
              {selectedCountry.bloc}
            </p>

            <p>
              <strong>Conflict:</strong>{" "}
              {selectedCountry.war}
            </p>

          </div>

        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: black;
          color: white;
          font-family: Arial;
        }

        .container {
          display: flex;
          background: black;
          min-height: 100vh;
        }

        .sidebar {
          width: 260px;
          background: #050505;
          border-right: 1px solid #222;
          padding: 30px;
          position: fixed;
          height: 100vh;
        }

        .logo {
          font-size: 42px;
          font-weight: bold;
          cursor: pointer;
        }

        .xLogo {
          font-style: italic;
          margin-left: 2px;
        }

        .subtitle {
          color: #bbb;
          margin-top: 8px;
        }

        .byLuke {
          color: #666;
          margin-top: 10px;
          margin-bottom: 40px;
        }

        .sidebar button {
          width: 100%;
          margin-bottom: 14px;
          padding: 14px;
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
          transform: translateX(4px);
        }

        .clockBox {
          margin-top: 40px;
          border: 1px solid #222;
          padding: 18px;
          border-radius: 18px;
          background: #090909;
        }

        .main {
          margin-left: 260px;
          width: 100%;
          padding: 40px;
        }

        .title {
          font-size: 52px;
          margin-bottom: 30px;
        }

        .mapContainer {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid #222;
        }

        .map {
          width: 100%;
          filter: brightness(1.15);
        }

        .countryPoint {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          transition: 0.2s;
        }

        .countryPoint:hover {
          transform: scale(1.7);
          background: #00ffcc;
        }

        .countryPanel {
          position: fixed;
          right: 30px;
          top: 40px;
          width: 340px;
          background: #090909;
          border: 1px solid #333;
          border-radius: 24px;
          padding: 24px;
          animation: fade 0.3s ease;
        }

        .panelTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .panelTop button {
          background: none;
          border: none;
          color: white;
          font-size: 22px;
          cursor: pointer;
        }

        .panelInfo p {
          margin-top: 14px;
          color: #ccc;
        }

        .marketGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );
          gap: 20px;
        }

        .marketCard {
          background: #090909;
          border: 1px solid #222;
          border-radius: 22px;
          padding: 24px;
          transition: 0.3s;
        }

        .marketCard:hover {
          transform: translateY(-6px);
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
          color: #ff4444;
        }

        .newsGrid,
        .blocGrid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(280px, 1fr)
          );
          gap: 20px;
        }

        .newsCard,
        .blocCard {
          background: #090909;
          border: 1px solid #222;
          border-radius: 22px;
          padding: 24px;
          text-decoration: none;
          color: white;
          transition: 0.3s;
        }

        .newsCard:hover,
        .blocCard:hover {
          transform: translateY(-6px);
          border-color: white;
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
