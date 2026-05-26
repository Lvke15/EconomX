import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");
  const [selectedCountry, setSelectedCountry] = useState(null);

  // ================= COUNTRIES =================

  const countries = [
    {
      name: "United States",
      x: 170,
      y: 180,
      gdp: "$29.1T",
      currency: "USD",
      leader: "Donald Trump",
      capital: "Washington D.C.",
      population: "341M",
      exports: "Technology, Oil",
      imports: "Electronics",
      bloc: "NATO, USMCA"
    },

    {
      name: "Canada",
      x: 180,
      y: 120,
      gdp: "$2.3T",
      currency: "CAD",
      leader: "Mark Carney",
      capital: "Ottawa",
      population: "41M",
      exports: "Oil, Lumber",
      imports: "Vehicles",
      bloc: "NATO, USMCA"
    },

    {
      name: "Mexico",
      x: 170,
      y: 250,
      gdp: "$1.9T",
      currency: "Peso",
      leader: "Claudia Sheinbaum",
      capital: "Mexico City",
      population: "132M",
      exports: "Cars, Electronics",
      imports: "Machinery",
      bloc: "USMCA"
    },

    {
      name: "Brazil",
      x: 340,
      y: 470,
      gdp: "$2.3T",
      currency: "Real",
      leader: "Lula da Silva",
      capital: "Brasília",
      population: "216M",
      exports: "Soybeans, Iron",
      imports: "Electronics",
      bloc: "MERCOSUR"
    },

    {
      name: "United Kingdom",
      x: 620,
      y: 130,
      gdp: "$3.8T",
      currency: "Pound",
      leader: "Keir Starmer",
      capital: "London",
      population: "69M",
      exports: "Finance",
      imports: "Food",
      bloc: "NATO"
    },

    {
      name: "France",
      x: 650,
      y: 180,
      gdp: "$3.3T",
      currency: "Euro",
      leader: "Emmanuel Macron",
      capital: "Paris",
      population: "68M",
      exports: "Aircraft",
      imports: "Energy",
      bloc: "EU"
    },

    {
      name: "Germany",
      x: 700,
      y: 150,
      gdp: "$4.9T",
      currency: "Euro",
      leader: "Friedrich Merz",
      capital: "Berlin",
      population: "84M",
      exports: "Cars",
      imports: "Energy",
      bloc: "EU"
    },

    {
      name: "Italy",
      x: 720,
      y: 220,
      gdp: "$2.5T",
      currency: "Euro",
      leader: "Giorgia Meloni",
      capital: "Rome",
      population: "59M",
      exports: "Luxury Goods",
      imports: "Energy",
      bloc: "EU"
    },

    {
      name: "Malta",
      x: 710,
      y: 255,
      gdp: "$25B",
      currency: "Euro",
      leader: "Robert Abela",
      capital: "Valletta",
      population: "560K",
      exports: "Electronics",
      imports: "Fuel",
      bloc: "EU"
    },

    {
      name: "Russia",
      x: 950,
      y: 120,
      gdp: "$2.3T",
      currency: "Ruble",
      leader: "Vladimir Putin",
      capital: "Moscow",
      population: "144M",
      exports: "Oil, Gas",
      imports: "Machinery",
      bloc: "BRICS"
    },

    {
      name: "China",
      x: 1040,
      y: 250,
      gdp: "$19.5T",
      currency: "Yuan",
      leader: "Xi Jinping",
      capital: "Beijing",
      population: "1.41B",
      exports: "Electronics",
      imports: "Oil",
      bloc: "BRICS"
    },

    {
      name: "India",
      x: 930,
      y: 340,
      gdp: "$4.3T",
      currency: "Rupee",
      leader: "Narendra Modi",
      capital: "New Delhi",
      population: "1.43B",
      exports: "IT Services",
      imports: "Oil",
      bloc: "BRICS"
    },

    {
      name: "Japan",
      x: 1180,
      y: 220,
      gdp: "$4.2T",
      currency: "Yen",
      leader: "Shigeru Ishiba",
      capital: "Tokyo",
      population: "123M",
      exports: "Cars",
      imports: "Energy",
      bloc: "G7"
    },

    {
      name: "South Korea",
      x: 1120,
      y: 230,
      gdp: "$1.9T",
      currency: "Won",
      leader: "Lee Jae-myung",
      capital: "Seoul",
      population: "52M",
      exports: "Semiconductors",
      imports: "Energy",
      bloc: "OECD"
    },

    {
      name: "Saudi Arabia",
      x: 830,
      y: 310,
      gdp: "$1.2T",
      currency: "Riyal",
      leader: "Mohammed bin Salman",
      capital: "Riyadh",
      population: "38M",
      exports: "Oil",
      imports: "Machinery",
      bloc: "OPEC"
    },

    {
      name: "South Africa",
      x: 760,
      y: 620,
      gdp: "$430B",
      currency: "Rand",
      leader: "Cyril Ramaphosa",
      capital: "Pretoria",
      population: "63M",
      exports: "Gold",
      imports: "Machinery",
      bloc: "BRICS"
    }
  ];

  // ================= MARKETS =================

  const companies = [
    ["Apple", "+2.1%", "green"],
    ["Microsoft", "+1.4%", "green"],
    ["NVIDIA", "+4.8%", "green"],
    ["Tesla", "-1.7%", "red"],
    ["Amazon", "+0.7%", "green"],
    ["Meta", "+2.5%", "green"],
    ["Google", "+1.8%", "green"],
    ["Samsung", "-0.4%", "red"],
    ["BYD", "+5.2%", "green"],
    ["ExxonMobil", "-1.1%", "red"]
  ];

  const cryptos = [
    ["Bitcoin", "+3.2%", "green"],
    ["Ethereum", "+2.0%", "green"],
    ["Solana", "-4.1%", "red"],
    ["XRP", "+1.1%", "green"],
    ["Dogecoin", "-2.3%", "red"]
  ];

  const currencies = [
    ["EUR/USD", "1.11"],
    ["GBP/USD", "1.29"],
    ["USD/JPY", "156.3"],
    ["USD/CNY", "7.19"],
    ["USD/CHF", "0.90"]
  ];

  // ================= UI =================

  return (
    <div
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          position: "fixed",
          width: 240,
          height: "100vh",
          background: "#0b0b0b",
          borderRight: "1px solid #222",
          padding: 25
        }}
      >
        <div
          onClick={() => setPage("dashboard")}
          style={{
            fontSize: 42,
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: 4
          }}
        >
          Econom<span style={{ letterSpacing: "-4px" }}>X</span>
        </div>

        <div
          style={{
            color: "#777",
            marginBottom: 30
          }}
        >
          by Luke Buttiġieġ
        </div>

        {[
          "dashboard",
          "markets",
          "trade blocs",
          "news"
        ].map((item) => (
          <div
            key={item}
            onClick={() => setPage(item)}
            style={{
              padding: 15,
              border: "1px solid #222",
              marginBottom: 12,
              cursor: "pointer",
              transition: "0.3s",
              background:
                page === item ? "white" : "transparent",
              color:
                page === item ? "black" : "white"
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
        {/* DASHBOARD */}

        {page === "dashboard" && (
          <>
            <h1 style={{ fontSize: 42 }}>
              Global Economic Intelligence
            </h1>

            <div
              style={{
                color: "#777",
                marginBottom: 20
              }}
            >
              Worldwide markets, geopolitics and economics —
              May 2026
            </div>

            {/* MAP */}

            <div
              style={{
                position: "relative",
                background: "#000",
                border: "1px solid #222",
                borderRadius: 20,
                overflow: "hidden",
                padding: 20
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                style={{
                  width: "100%"
                }}
              />

              {countries.map((country) => (
                <div
                  key={country.name}
                  onClick={() =>
                    setSelectedCountry(country)
                  }
                  title={country.name}
                  style={{
                    position: "absolute",
                    left: country.x,
                    top: country.y,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "white",
                    boxShadow: "0 0 10px white",
                    cursor: "pointer"
                  }}
                />
              ))}
            </div>

            {/* COUNTRY PANEL */}

            {selectedCountry && (
              <div
                style={{
                  marginTop: 20,
                  background: "#0b0b0b",
                  border: "1px solid #222",
                  borderRadius: 20,
                  padding: 25
                }}
              >
                <h2>{selectedCountry.name}</h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "1fr 1fr",
                    gap: 12
                  }}
                >
                  <div>
                    GDP: {selectedCountry.gdp}
                  </div>

                  <div>
                    Currency:{" "}
                    {selectedCountry.currency}
                  </div>

                  <div>
                    Leader:{" "}
                    {selectedCountry.leader}
                  </div>

                  <div>
                    Capital:{" "}
                    {selectedCountry.capital}
                  </div>

                  <div>
                    Population:{" "}
                    {selectedCountry.population}
                  </div>

                  <div>
                    Trade Bloc:{" "}
                    {selectedCountry.bloc}
                  </div>

                  <div>
                    Exports:{" "}
                    {selectedCountry.exports}
                  </div>

                  <div>
                    Imports:{" "}
                    {selectedCountry.imports}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* MARKETS */}

        {page === "markets" && (
          <>
            <h1>Markets</h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr 1fr",
                gap: 20
              }}
            >
              {/* COMPANIES */}

              <div
                style={{
                  border: "1px solid #222",
                  borderRadius: 20,
                  padding: 20
                }}
              >
                <h2>Companies</h2>

                {companies.map((c) => (
                  <div
                    key={c[0]}
                    style={{
                      marginBottom: 18
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between"
                      }}
                    >
                      <span>{c[0]}</span>

                      <span
                        style={{
                          color:
                            c[2] === "green"
                              ? "#00ff99"
                              : "#ff5555"
                        }}
                      >
                        {c[1]}
                      </span>
                    </div>

                    <div
                      style={{
                        marginTop: 6,
                        height: 5,
                        borderRadius: 5,
                        background:
                          c[2] === "green"
                            ? "linear-gradient(to right,#00ff99,#003322)"
                            : "linear-gradient(to right,#ff3333,#330000)"
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* CRYPTO */}

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
                      marginBottom: 18
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between"
                      }}
                    >
                      <span>{c[0]}</span>

                      <span
                        style={{
                          color:
                            c[2] === "green"
                              ? "#00ff99"
                              : "#ff5555"
                        }}
                      >
                        {c[1]}
                      </span>
                    </div>

                    <div
                      style={{
                        marginTop: 6,
                        height: 5,
                        borderRadius: 5,
                        background:
                          c[2] === "green"
                            ? "linear-gradient(to right,#00ff99,#003322)"
                            : "linear-gradient(to right,#ff3333,#330000)"
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* CURRENCIES */}

              <div
                style={{
                  border: "1px solid #222",
                  borderRadius: 20,
                  padding: 20
                }}
              >
                <h2>Currencies</h2>

                {currencies.map((c) => (
                  <div
                    key={c[0]}
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      marginBottom: 15
                    }}
                  >
                    <span>{c[0]}</span>

                    <span>{c[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* TRADE BLOCS */}

        {page === "trade blocs" && (
          <>
            <h1>Trade Blocs</h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: 20
              }}
            >
              {[
                ["European Union", "27 Members"],
                ["BRICS", "10 Members"],
                ["ASEAN", "10 Members"],
                ["MERCOSUR", "5 Members"],
                ["EFTA", "4 Members"],
                ["EEA", "30 Members"]
              ].map((bloc) => (
                <div
                  key={bloc[0]}
                  style={{
                    border: "1px solid #222",
                    borderRadius: 20,
                    padding: 20
                  }}
                >
                  <h2>{bloc[0]}</h2>

                  <div>{bloc[1]}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* NEWS */}

        {page === "news" && (
          <>
            <h1>News</h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: 20
              }}
            >
              {[
                "EU discusses new sanctions",
                "SpaceX Flight 12 launches",
                "Global oil prices fluctuate",
                "AI investment surges worldwide",
                "Markets react to Fed decision"
              ].map((article) => (
                <div
                  key={article}
                  style={{
                    border: "1px solid #222",
                    borderRadius: 20,
                    padding: 20
                  }}
                >
                  {article}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
