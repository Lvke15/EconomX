import { useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeSidebar, setActiveSidebar] = useState("dashboard");

  const countries = [
    {
      name: "United States",
      code: "US",
      x: 180,
      y: 170,
      gdp: "$29.1T",
      currency: "US Dollar",
      leader: "Donald Trump",
      capital: "Washington D.C.",
      population: "341M",
      exports: "Technology, Oil, Aircraft",
      imports: "Electronics, Vehicles",
      bloc: "NATO, USMCA",
      war: "None"
    },
    {
      name: "China",
      code: "CN",
      x: 1030,
      y: 250,
      gdp: "$19.5T",
      currency: "Yuan",
      leader: "Xi Jinping",
      capital: "Beijing",
      population: "1.41B",
      exports: "Electronics, Machinery",
      imports: "Oil, Semiconductors",
      bloc: "BRICS",
      war: "Taiwan tensions"
    },
    {
      name: "Germany",
      code: "DE",
      x: 690,
      y: 150,
      gdp: "$4.9T",
      currency: "Euro",
      leader: "Friedrich Merz",
      capital: "Berlin",
      population: "84M",
      exports: "Cars, Machinery",
      imports: "Energy",
      bloc: "EU, NATO",
      war: "None"
    },
    {
      name: "Malta",
      code: "MT",
      x: 705,
      y: 235,
      gdp: "$25B",
      currency: "Euro",
      leader: "Robert Abela",
      capital: "Valletta",
      population: "560K",
      exports: "Electronics, Tourism",
      imports: "Fuel, Food",
      bloc: "EU",
      war: "None"
    },
    {
      name: "Russia",
      code: "RU",
      x: 930,
      y: 110,
      gdp: "$2.3T",
      currency: "Ruble",
      leader: "Vladimir Putin",
      capital: "Moscow",
      population: "144M",
      exports: "Oil, Gas",
      imports: "Machinery",
      bloc: "BRICS",
      war: "War in Ukraine"
    },
    {
      name: "India",
      code: "IN",
      x: 930,
      y: 340,
      gdp: "$4.3T",
      currency: "Rupee",
      leader: "Narendra Modi",
      capital: "New Delhi",
      population: "1.43B",
      exports: "IT, Pharmaceuticals",
      imports: "Oil",
      bloc: "BRICS",
      war: "None"
    },
    {
      name: "United Kingdom",
      code: "GB",
      x: 620,
      y: 130,
      gdp: "$3.8T",
      currency: "Pound Sterling",
      leader: "Keir Starmer",
      capital: "London",
      population: "69M",
      exports: "Finance, Machinery",
      imports: "Food, Electronics",
      bloc: "NATO",
      war: "None"
    },
    {
      name: "France",
      code: "FR",
      x: 650,
      y: 180,
      gdp: "$3.3T",
      currency: "Euro",
      leader: "Emmanuel Macron",
      capital: "Paris",
      population: "68M",
      exports: "Aircraft, Luxury Goods",
      imports: "Energy",
      bloc: "EU, NATO",
      war: "None"
    },
    {
      name: "Japan",
      code: "JP",
      x: 1180,
      y: 220,
      gdp: "$4.2T",
      currency: "Yen",
      leader: "Shigeru Ishiba",
      capital: "Tokyo",
      population: "123M",
      exports: "Cars, Electronics",
      imports: "Energy",
      bloc: "G7",
      war: "None"
    },
    {
      name: "Brazil",
      code: "BR",
      x: 370,
      y: 470,
      gdp: "$2.3T",
      currency: "Real",
      leader: "Luiz Inácio Lula da Silva",
      capital: "Brasília",
      population: "216M",
      exports: "Soybeans, Iron",
      imports: "Electronics",
      bloc: "MERCOSUR, BRICS",
      war: "None"
    }
  ];

  const companies = [
    ["Apple", "+2.1%", "green"],
    ["Microsoft", "+1.3%", "green"],
    ["NVIDIA", "+4.8%", "green"],
    ["Tesla", "-1.9%", "red"],
    ["Amazon", "+0.8%", "green"],
    ["Meta", "+2.5%", "green"],
    ["Google", "+1.4%", "green"],
    ["Samsung", "-0.7%", "red"],
    ["BYD", "+5.1%", "green"],
    ["ExxonMobil", "-1.2%", "red"]
  ];

  const cryptos = [
    ["Bitcoin", "+3.4%", "green"],
    ["Ethereum", "+2.1%", "green"],
    ["Solana", "-4.1%", "red"],
    ["XRP", "+1.5%", "green"],
    ["Dogecoin", "-2.7%", "red"]
  ];

  const news = {
    politics: [
      {
        title: "EU discusses new sanctions package",
        link: "https://en.wikipedia.org/wiki/European_Union"
      },
      {
        title: "US Election campaign intensifies",
        link: "https://en.wikipedia.org/wiki/2024_United_States_presidential_election"
      }
    ],
    science: [
      {
        title: "SpaceX Flight 12 launches successfully",
        link: "https://en.wikipedia.org/wiki/SpaceX_Starship_integrated_flight_test_12"
      },
      {
        title: "Fusion breakthroughs continue",
        link: "https://en.wikipedia.org/wiki/Nuclear_fusion"
      }
    ],
    finance: [
      {
        title: "Global markets rally in May 2026",
        link: "https://en.wikipedia.org/wiki/World_economy"
      },
      {
        title: "Oil prices fluctuate amid tensions",
        link: "https://en.wikipedia.org/wiki/Brent_Crude"
      }
    ]
  };

  return (
    <div
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        overflow: "hidden"
      }}
    >
      {/* CORNER DESIGNS */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          width: 80,
          height: 80,
          borderTop: "2px solid white",
          borderLeft: "2px solid white",
          opacity: 0.4
        }}
      />

      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 80,
          height: 80,
          borderBottom: "2px solid white",
          borderRight: "2px solid white",
          opacity: 0.4
        }}
      />

      {/* SIDEBAR */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 230,
          height: "100vh",
          borderRight: "1px solid #222",
          background: "#0b0b0b",
          padding: 25
        }}
      >
        <div
          onClick={() => setActiveSidebar("dashboard")}
          style={{
            fontSize: 38,
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: 5
          }}
        >
          Econom<span style={{ letterSpacing: "-3px" }}>X</span>
        </div>

        <div
          style={{
            color: "#888",
            marginBottom: 30
          }}
        >
          by Luke Buttiġieġ
        </div>

        {[
          "dashboard",
          "markets",
          "currencies",
          "news",
          "trade blocs"
        ].map((item) => (
          <div
            key={item}
            onClick={() => setActiveSidebar(item)}
            style={{
              padding: 14,
              marginBottom: 10,
              border: "1px solid #222",
              cursor: "pointer",
              transition: "0.3s",
              background:
                activeSidebar === item ? "white" : "transparent",
              color:
                activeSidebar === item ? "black" : "white"
            }}
          >
            {item.toUpperCase()}
          </div>
        ))}
      </div>

      {/* MAIN */}
      <div
        style={{
          marginLeft: 260,
          padding: 30
        }}
      >
        <h1
          style={{
            fontSize: 42,
            marginBottom: 0
          }}
        >
          Global Economic Intelligence
        </h1>

        <div
          style={{
            color: "#888",
            marginBottom: 25
          }}
        >
          Economic, geopolitical and market overview — May 2026
        </div>

        {/* MAP */}
        <div
          style={{
            position: "relative",
            background: "#000",
            border: "1px solid #222",
            padding: 20,
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            style={{
              width: "100%",
              opacity: 0.95
            }}
          />

          {countries.map((country) => (
            <div
              key={country.name}
              onClick={() => setSelectedCountry(country)}
              title={country.name}
              style={{
                position: "absolute",
                left: country.x,
                top: country.y,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "white",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: "0 0 15px white"
              }}
            />
          ))}
        </div>

        {/* COUNTRY PANEL */}
        {selectedCountry && (
          <div
            style={{
              marginTop: 20,
              border: "1px solid #333",
              borderRadius: 20,
              padding: 25,
              background: "#0d0d0d",
              animation: "fade 0.3s"
            }}
          >
            <h2>{selectedCountry.name}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12
              }}
            >
              <div>GDP: {selectedCountry.gdp}</div>
              <div>Currency: {selectedCountry.currency}</div>
              <div>Leader: {selectedCountry.leader}</div>
              <div>Capital: {selectedCountry.capital}</div>
              <div>Population: {selectedCountry.population}</div>
              <div>Trade Bloc: {selectedCountry.bloc}</div>
              <div>Main Exports: {selectedCountry.exports}</div>
              <div>Main Imports: {selectedCountry.imports}</div>
              <div>Conflict Status: {selectedCountry.war}</div>
            </div>

            <a
              href={`https://en.wikipedia.org/wiki/${selectedCountry.name}`}
              target="_blank"
              style={{
                color: "white",
                display: "inline-block",
                marginTop: 20
              }}
            >
              Open Wikipedia →
            </a>
          </div>
        )}

        {/* MARKETS */}
        <div
          style={{
            marginTop: 30,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20
          }}
        >
          <div
            style={{
              border: "1px solid #222",
              borderRadius: 20,
              padding: 20
            }}
          >
            <h2>Top Companies</h2>

            {companies.map((c) => (
              <div
                key={c[0]}
                style={{
                  marginBottom: 16
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <span>{c[0]}</span>

                  <span
                    style={{
                      color:
                        c[2] === "green"
                          ? "#00ff99"
                          : "#ff4d4d"
                    }}
                  >
                    {c[1]}
                  </span>
                </div>

                <div
                  style={{
                    height: 5,
                    background:
                      c[2] === "green"
                        ? "linear-gradient(to right,#0f0,#030)"
                        : "linear-gradient(to right,#f00,#300)",
                    marginTop: 5,
                    borderRadius: 5
                  }}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              border: "1px solid #222",
              borderRadius: 20,
              padding: 20
            }}
          >
            <h2>Cryptocurrencies</h2>

            {cryptos.map((c) => (
              <div
                key={c[0]}
                style={{
                  marginBottom: 16
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <span>{c[0]}</span>

                  <span
                    style={{
                      color:
                        c[2] === "green"
                          ? "#00ff99"
                          : "#ff4d4d"
                    }}
                  >
                    {c[1]}
                  </span>
                </div>

                <div
                  style={{
                    height: 5,
                    background:
                      c[2] === "green"
                        ? "linear-gradient(to right,#0f0,#030)"
                        : "linear-gradient(to right,#f00,#300)",
                    marginTop: 5,
                    borderRadius: 5
                  }}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              border: "1px solid #222",
              borderRadius: 20,
              padding: 20
            }}
          >
            <h2>News</h2>

            <div
              style={{
                marginBottom: 20
              }}
            >
              <h3>Politics</h3>

              {news.politics.map((n) => (
                <a
                  key={n.title}
                  href={n.link}
                  target="_blank"
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: 10
                  }}
                >
                  • {n.title}
                </a>
              ))}
            </div>

            <div
              style={{
                marginBottom: 20
              }}
            >
              <h3>Science</h3>

              {news.science.map((n) => (
                <a
                  key={n.title}
                  href={n.link}
                  target="_blank"
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: 10
                  }}
                >
                  • {n.title}
                </a>
              ))}
            </div>

            <div>
              <h3>Finance</h3>

              {news.finance.map((n) => (
                <a
                  key={n.title}
                  href={n.link}
                  target="_blank"
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: 10
                  }}
                >
                  • {n.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
