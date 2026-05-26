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

  // ================= COUNTRIES =================

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

  // ================= MARKETS =================

  const [markets, setMarkets] = useState([
    {
      name: "Apple",
      logo: "🍎",
      type: "Companies",
      value: 214.2,
      marketcap: "$3.2 Trillion",
      change: "+1.4%",
      description: "Largest public technology company.",
    },

    {
      name: "Microsoft",
      logo: "🪟",
      type: "Companies",
      value: 468.5,
      marketcap: "$3.4 Trillion",
      change: "+0.9%",
      description: "Cloud and software giant.",
    },

    {
      name: "NVIDIA",
      logo: "🟩",
      type: "Companies",
      value: 132.1,
      marketcap: "$3.1 Trillion",
      change: "+3.1%",
      description: "AI chip manufacturer.",
    },

    {
      name: "Amazon",
      logo: "🛒",
      type: "Companies",
      value: 214.7,
      marketcap: "$2.3 Trillion",
      change: "+1.1%",
      description: "Global e-commerce and cloud company.",
    },

    {
      name: "Google",
      logo: "🔍",
      type: "Companies",
      value: 188.2,
      marketcap: "$2.1 Trillion",
      change: "+0.8%",
      description: "Search engine and AI leader.",
    },

    {
      name: "Meta",
      logo: "📘",
      type: "Companies",
      value: 593.4,
      marketcap: "$1.5 Trillion",
      change: "+1.9%",
      description: "Social media and VR company.",
    },

    {
      name: "Tesla",
      logo: "⚡",
      type: "Companies",
      value: 243.1,
      marketcap: "$790 Billion",
      change: "-0.4%",
      description: "Electric vehicle manufacturer.",
    },

    {
      name: "Samsung",
      logo: "📱",
      type: "Companies",
      value: 71.2,
      marketcap: "$510 Billion",
      change: "+0.3%",
      description: "South Korean electronics giant.",
    },

    {
      name: "Bitcoin",
      logo: "₿",
      type: "Crypto",
      value: 108200,
      marketcap: "$2.1 Trillion",
      change: "+4.2%",
      description: "Largest cryptocurrency.",
    },

    {
      name: "Ethereum",
      logo: "◆",
      type: "Crypto",
      value: 5210,
      marketcap: "$620 Billion",
      change: "+2.4%",
      description: "Smart contract blockchain.",
    },

    {
      name: "Solana",
      logo: "🟣",
      type: "Crypto",
      value: 244.2,
      marketcap: "$113 Billion",
      change: "+5.1%",
      description: "High-speed blockchain.",
    },

    {
      name: "XRP",
      logo: "💠",
      type: "Crypto",
      value: 2.81,
      marketcap: "$160 Billion",
      change: "+1.8%",
      description: "Ripple payment cryptocurrency.",
    },

    {
      name: "Dogecoin",
      logo: "🐶",
      type: "Crypto",
      value: 0.42,
      marketcap: "$61 Billion",
      change: "+4.2%",
      description: "Meme cryptocurrency.",
    },

    {
      name: "Brent Oil",
      logo: "🛢️",
      type: "Oil",
      value: 83.1,
      marketcap: "$2.8 Trillion sector",
      change: "-0.4%",
      description: "Global oil benchmark.",
    },

    {
      name: "Chevron",
      logo: "⛽",
      type: "Oil",
      value: 168.3,
      marketcap: "$310 Billion",
      change: "-0.4%",
      description: "American oil corporation.",
    },

    {
      name: "Shell",
      logo: "🐚",
      type: "Oil",
      value: 79.1,
      marketcap: "$250 Billion",
      change: "+0.5%",
      description: "British multinational oil company.",
    },

    {
      name: "EUR/USD",
      logo: "💶",
      type: "Currencies",
      value: 1.11,
      marketcap: "Forex Pair",
      change: "+0.1%",
      description: "Euro against US Dollar.",
    },

    {
      name: "GBP/USD",
      logo: "💷",
      type: "Currencies",
      value: 1.29,
      marketcap: "Forex Pair",
      change: "+0.2%",
      description: "British Pound vs Dollar.",
    },

    {
      name: "USD/JPY",
      logo: "💴",
      type: "Currencies",
      value: 154.8,
      marketcap: "Forex Pair",
      change: "-0.1%",
      description: "Dollar vs Yen.",
    },
  ]);

  // REMAINDER OF FILE CONTINUES...
