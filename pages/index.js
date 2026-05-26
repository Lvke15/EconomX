import { useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedBloc, setSelectedBloc] = useState("");

  const countries = [
    {
      name: "United States",
      x: 180,
      y: 180,
      gdp: "$30.1T",
      currency: "US Dollar",
      leader: "Donald Trump",
      capital: "Washington D.C.",
      population: "341M",
      exports: "Technology, Oil, Aircraft",
      imports: "Electronics, Vehicles",
      bloc: "USMCA",
      flag: "🇺🇸",
      war: "No major war on territory",
      wiki: "https://en.wikipedia.org/wiki/United_States"
    },
    {
      name: "Canada",
      x: 180,
      y: 110,
      gdp: "$2.3T",
      currency: "Canadian Dollar",
      leader: "Mark Carney",
      capital: "Ottawa",
      population: "41M",
      exports: "Oil, Timber",
      imports: "Machinery",
      bloc: "USMCA",
      flag: "🇨🇦",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Canada"
    },
    {
      name: "Mexico",
      x: 210,
      y: 245,
      gdp: "$1.9T",
      currency: "Mexican Peso",
      leader: "Claudia Sheinbaum",
      capital: "Mexico City",
      population: "132M",
      exports: "Cars, Oil",
      imports: "Electronics",
      bloc: "USMCA",
      flag: "🇲🇽",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Mexico"
    },
    {
      name: "Germany",
      x: 585,
      y: 150,
      gdp: "$4.9T",
      currency: "Euro",
      leader: "Friedrich Merz",
      capital: "Berlin",
      population: "84M",
      exports: "Cars, Machinery",
      imports: "Energy",
      bloc: "EU",
      flag: "🇩🇪",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Germany"
    },
    {
      name: "France",
      x: 550,
      y: 170,
      gdp: "$3.4T",
      currency: "Euro",
      leader: "Emmanuel Macron",
      capital: "Paris",
      population: "68M",
      exports: "Luxury Goods",
      imports: "Electronics",
      bloc: "EU",
      flag: "🇫🇷",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/France"
    },
    {
      name: "Italy",
      x: 605,
      y: 205,
      gdp: "$2.5T",
      currency: "Euro",
      leader: "Giorgia Meloni",
      capital: "Rome",
      population: "59M",
      exports: "Fashion, Machinery",
      imports: "Oil",
      bloc: "EU",
      flag: "🇮🇹",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Italy"
    },
    {
      name: "Spain",
      x: 510,
      y: 215,
      gdp: "$1.8T",
      currency: "Euro",
      leader: "Pedro Sánchez",
      capital: "Madrid",
      population: "49M",
      exports: "Cars, Agriculture",
      imports: "Energy",
      bloc: "EU",
      flag: "🇪🇸",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Spain"
    },
    {
      name: "Malta",
      x: 625,
      y: 235,
      gdp: "$27B",
      currency: "Euro",
      leader: "Robert Abela",
      capital: "Valletta",
      population: "570K",
      exports: "Services, Electronics",
      imports: "Fuel",
      bloc: "EU",
      flag: "🇲🇹",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Malta"
    },
    {
      name: "Russia",
      x: 760,
      y: 110,
      gdp: "$2.4T",
      currency: "Ruble",
      leader: "Vladimir Putin",
      capital: "Moscow",
      population: "143M",
      exports: "Oil, Gas",
      imports: "Machinery",
      bloc: "BRICS",
      flag: "🇷🇺",
      war: "War in Ukraine",
      wiki: "https://en.wikipedia.org/wiki/Russia"
    },
    {
      name: "Ukraine",
      x: 675,
      y: 170,
      gdp: "$210B",
      currency: "Hryvnia",
      leader: "Volodymyr Zelenskyy",
      capital: "Kyiv",
      population: "37M",
      exports: "Grain",
      imports: "Weapons",
      bloc: "EU Candidate",
      flag: "🇺🇦",
      war: "Russian invasion",
      wiki: "https://en.wikipedia.org/wiki/Ukraine"
    },
    {
      name: "China",
      x: 980,
      y: 230,
      gdp: "$19.8T",
      currency: "Yuan",
      leader: "Xi Jinping",
      capital: "Beijing",
      population: "1.41B",
      exports: "Electronics",
      imports: "Oil",
      bloc: "BRICS",
      flag: "🇨🇳",
      war: "No active war",
      wiki: "https://en.wikipedia.org/wiki/China"
    },
    {
      name: "India",
      x: 860,
      y: 310,
      gdp: "$4.3T",
      currency: "Indian Rupee",
      leader: "Narendra Modi",
      capital: "New Delhi",
      population: "1.44B",
      exports: "IT Services",
      imports: "Oil",
      bloc: "BRICS",
      flag: "🇮🇳",
      war: "Border tensions",
      wiki: "https://en.wikipedia.org/wiki/India"
    },
    {
      name: "Japan",
      x: 1090,
      y: 240,
      gdp: "$4.5T",
      currency: "Yen",
      leader: "Shigeru Ishiba",
      capital: "Tokyo",
      population: "123M",
      exports: "Cars, Tech",
      imports: "Energy",
      bloc: "G7",
      flag: "🇯🇵",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Japan"
    },
    {
      name: "South Korea",
      x: 1045,
      y: 245,
      gdp: "$1.9T",
      currency: "Won",
      leader: "Han Duck-soo",
      capital: "Seoul",
      population: "52M",
      exports: "Semiconductors",
      imports: "Oil",
      bloc: "OECD",
      flag: "🇰🇷",
      war: "Korean conflict unresolved",
      wiki: "https://en.wikipedia.org/wiki/South_Korea"
    },
    {
      name: "Saudi Arabia",
      x: 760,
      y: 310,
      gdp: "$1.2T",
      currency: "Saudi Riyal",
      leader: "Mohammed bin Salman",
      capital: "Riyadh",
      population: "38M",
      exports: "Oil",
      imports: "Machinery",
      bloc: "OPEC",
      flag: "🇸🇦",
      war: "Regional tensions",
      wiki: "https://en.wikipedia.org/wiki/Saudi_Arabia"
    },
    {
      name: "Iran",
      x: 790,
      y: 285,
      gdp: "$430B",
      currency: "Rial",
      leader: "Ali Khamenei",
      capital: "Tehran",
      population: "91M",
      exports: "Oil",
      imports: "Machinery",
      bloc: "BRICS",
      flag: "🇮🇷",
      war: "Regional conflict",
      wiki: "https://en.wikipedia.org/wiki/Iran"
    },
    {
      name: "Israel",
      x: 690,
      y: 285,
      gdp: "$580B",
      currency: "Shekel",
      leader: "Benjamin Netanyahu",
      capital: "Jerusalem",
      population: "10M",
      exports: "Technology",
      imports: "Fuel",
      bloc: "OECD",
      flag: "🇮🇱",
      war: "Conflict in Gaza",
      wiki: "https://en.wikipedia.org/wiki/Israel"
    },
    {
      name: "South Africa",
      x: 670,
      y: 570,
      gdp: "$430B",
      currency: "Rand",
      leader: "Cyril Ramaphosa",
      capital: "Pretoria",
      population: "63M",
      exports: "Gold, Platinum",
      imports: "Machinery",
      bloc: "BRICS",
      flag: "🇿🇦",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/South_Africa"
    },
    {
      name: "Nigeria",
      x: 560,
      y: 410,
      gdp: "$510B",
      currency: "Naira",
      leader: "Bola Tinubu",
      capital: "Abuja",
      population: "235M",
      exports: "Oil",
      imports: "Machinery",
      bloc: "African Union",
      flag: "🇳🇬",
      war: "Insurgency in regions",
      wiki: "https://en.wikipedia.org/wiki/Nigeria"
    },
    {
      name: "Brazil",
      x: 360,
      y: 470,
      gdp: "$2.3T",
      currency: "Brazilian Real",
      leader: "Luiz Inácio Lula da Silva",
      capital: "Brasília",
      population: "216M",
      exports: "Soybeans, Iron",
      imports: "Electronics",
      bloc: "MERCOSUR",
      flag: "🇧🇷",
      war: "None",
      wiki: "https://en.wikipedia.org/wiki/Brazil"
    },
  ];

  const companies = [
    { name: "Apple", ticker: "AAPL", price: "$238", change: "+1.7%" },
    { name: "Microsoft", ticker: "MSFT", price: "$515", change: "+0.9%" },
    { name: "NVIDIA", ticker: "NVDA", price: "$1380", change: "+3.1%" },
    { name: "Tesla", ticker: "TSLA", price: "$212", change: "-1.8%" },
    { name: "Amazon", ticker: "AMZN", price: "$228", change: "+1.1%" },
    { name: "Meta", ticker: "META", price: "$642", change: "+0.8%" },
    { name: "Alphabet", ticker: "GOOG", price: "$193", change: "+1.2%" },
    { name: "Samsung", ticker: "005930", price: "₩94,000", change: "-0.4%" },
    { name: "BYD", ticker: "BYD", price: "$48", change: "+2.5%" },
    { name: "ExxonMobil", ticker: "XOM", price: "$126", change: "+0.6%" },
  ];

  const cryptos = [
    { name: "Bitcoin", price: "$103,000", change: "+4.5%" },
    { name: "Ethereum", price: "$5,200", change: "+3.1%" },
    { name: "Solana", price: "$280", change: "-1.2%" },
    { name: "XRP", price: "$2.75", change: "+1.8%" },
    { name: "Cardano", price: "$1.12", change: "-0.5%" },
  ];

  const oil = [
    { name: "Brent Crude", price: "$83", change: "+0.7%" },
    { name: "WTI", price: "$79", change: "-0.3%" },
    { name: "Saudi Aramco", price: "$8.12", change: "+0.5%" },
    { name: "Shell", price: "$74", change: "-1.1%" },
  ];

  return (
    <div
      style={{
        background: "#020202",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "280px",
          borderRight: "1px solid #333",
          padding: "20px",
          background: "#050505",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            marginBottom: "0",
            letterSpacing: "2px",
          }}
        >
          Econom<span style={{ fontWeight: "900" }}>𝕏</span>
        </h1>

        <p style={{ color: "#999", marginTop: "5px" }}>
          by Luke Buttiġieġ
        </p>

        <div style={{ marginTop: "40px" }}>
          <h3>Trade Blocs</h3>

          {["EU", "BRICS", "USMCA", "MERCOSUR", "OPEC"].map((bloc) => (
            <button
              key={bloc}
              onClick={() =>
                setSelectedBloc(selectedBloc === bloc ? "" : bloc)
              }
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                background:
                  selectedBloc === bloc ? "white" : "#111",
                color:
                  selectedBloc === bloc ? "black" : "white",
                border: "1px solid white",
                cursor: "pointer",
              }}
            >
              {bloc}
            </button>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <h3>Markets</h3>

          {companies.map((c) => (
            <div
              key={c.name}
              style={{
                padding: "8px",
                borderBottom: "1px solid #222",
              }}
            >
              <b>{c.name}</b>
              <div>{c.price}</div>
              <div
                style={{
                  color:
                    c.change.includes("-") ? "#ff4d4d" : "#6cff6c",
                }}
              >
                {c.change}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <h3>Crypto</h3>

          {cryptos.map((c) => (
            <div
              key={c.name}
              style={{
                padding: "8px",
                borderBottom: "1px solid #222",
              }}
            >
              <b>{c.name}</b>
              <div>{c.price}</div>
              <div
                style={{
                  color:
                    c.change.includes("-") ? "#ff4d4d" : "#6cff6c",
                }}
              >
                {c.change}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <h3>Oil</h3>

          {oil.map((o) => (
            <div
              key={o.name}
              style={{
                padding: "8px",
                borderBottom: "1px solid #222",
              }}
            >
              <b>{o.name}</b>
              <div>{o.price}</div>
              <div
                style={{
                  color:
                    o.change.includes("-") ? "#ff4d4d" : "#6cff6c",
                }}
              >
                {o.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
            pointerEvents: "none",
          }}
        />

        <svg
          viewBox="0 0 1400 750"
          style={{
            width: "100%",
            height: "100vh",
            background: "#000",
          }}
        >
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            x="0"
            y="0"
            width="1400"
            height="750"
            opacity="0.92"
          />

          {countries.map((country) => (
            <circle
              key={country.name}
              cx={country.x}
              cy={country.y}
              r="10"
              fill={
                selectedBloc === country.bloc
                  ? "#00ff99"
                  : "white"
              }
              stroke="black"
              strokeWidth="2"
              style={{
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => setSelectedCountry(country)}
            />
          ))}
        </svg>

        {selectedCountry && (
          <div
            style={{
              position: "absolute",
              top: "80px",
              right: "40px",
              width: "340px",
              background: "rgba(0,0,0,0.94)",
              border: "1px solid white",
              padding: "22px",
              backdropFilter: "blur(12px)",
              animation: "fade 0.3s",
            }}
          >
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
            <p><b>Trade Bloc:</b> {selectedCountry.bloc}</p>
            <p><b>Conflict:</b> {selectedCountry.war}</p>

            <a
              href={selectedCountry.wiki}
              target="_blank"
              style={{
                color: "white",
                border: "1px solid white",
                padding: "8px 12px",
                display: "inline-block",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              Wikipedia
            </a>

            <button
              onClick={() => setSelectedCountry(null)}
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                background: "white",
                color: "black",
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "white",
            fontSize: "14px",
            textAlign: "right",
          }}
        >
          <div>GMT: {new Date().toUTCString()}</div>
          <div>
            Malta:{" "}
            {new Date().toLocaleString("en-MT", {
              timeZone: "Europe/Malta",
            })}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: "420px",
            background: "rgba(0,0,0,0.92)",
            border: "1px solid white",
            padding: "18px",
          }}
        >
          <h3>Global Economic Intelligence</h3>

          <div style={{ marginTop: "15px" }}>
            <h4>Science</h4>
            <a
              href="https://www.spacex.com"
              target="_blank"
              style={{ color: "white" }}
            >
              SpaceX Flight 12 launches successfully
            </a>
          </div>

          <div style={{ marginTop: "15px" }}>
            <h4>Politics</h4>
            <a
              href="https://www.reuters.com/"
              target="_blank"
              style={{ color: "white" }}
            >
              NATO discusses Eastern Europe tensions
            </a>
          </div>

          <div style={{ marginTop: "15px" }}>
            <h4>Finance</h4>
            <a
              href="https://www.bloomberg.com/"
              target="_blank"
              style={{ color: "white" }}
            >
              Global markets react to AI investment boom
            </a>
          </div>

          <div style={{ marginTop: "15px" }}>
            <h4>Technology</h4>
            <a
              href="https://www.theverge.com/"
              target="_blank"
              style={{ color: "white" }}
            >
              NVIDIA announces next-generation AI chips
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
