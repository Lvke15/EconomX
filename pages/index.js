export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "48px" }}>Econom𝕏</h1>

      <p>Global Economic Intelligence System</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        <div style={card}>
          <h2>NASDAQ</h2>
          <p>15,742.21</p>
        </div>

        <div style={card}>
          <h2>EUR/USD</h2>
          <p>1.084</p>
        </div>

        <div style={card}>
          <h2>Brent Oil</h2>
          <p>$81.42</p>
        </div>

        <div style={card}>
          <h2>EU Inflation</h2>
          <p>2.4%</p>
        </div>

        <div style={card}>
          <h2>US GDP</h2>
          <p>$29 Trillion</p>
        </div>

        <div style={card}>
          <h2>EFTA</h2>
          <p>Active Trade Bloc</p>
        </div>
      </div>
    </div>
  );
}

const card = {
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #333"
};
