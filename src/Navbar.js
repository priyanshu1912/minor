import React from "react";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        padding: "1vh 0",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "1vw",
        marginBottom: "1.5vh",
      }}
    >
      <div
        style={{
          background: "#181818",
          padding: "1vh 2vw",
          boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <div style={{ fontSize: "2vh" }}>Bitcoin</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            color: "#C0C0C0",
          }}
        >
          $123,000{" "}
          <span
            style={{
              fontSize: "1.8vh",
              color: "red",
              padding: "0.1vh 0.3vw",
              background: "rgba(0,0,0,0.8)",
              borderRadius: "5px",
            }}
          >
            +0.36%
          </span>
        </div>
      </div>
      <div
        style={{
          background: "#181818",
          padding: "1vh 2vw",
          boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <div style={{ fontSize: "2vh" }}>Bitcoin</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            color: "#C0C0C0",
          }}
        >
          $123,000{" "}
          <span
            style={{
              fontSize: "1.8vh",
              color: "red",
              padding: "0.1vh 0.3vw",
              background: "rgba(0,0,0,0.8)",
              borderRadius: "5px",
            }}
          >
            +0.36%
          </span>
        </div>
      </div>
      <div
        style={{
          background: "#181818",
          padding: "1vh 2vw",
          boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <div style={{ fontSize: "2vh" }}>Bitcoin</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            color: "#C0C0C0",
          }}
        >
          $123,000{" "}
          <span
            style={{
              fontSize: "1.8vh",
              color: "green",
              padding: "0.1vh 0.3vw",
              background: "rgba(0,0,0,0.8)",
              borderRadius: "5px",
            }}
          >
            +0.36%
          </span>
        </div>
      </div>
      <div
        style={{
          background: "#181818",
          padding: "1vh 2vw",
          boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <div style={{ fontSize: "2vh" }}>Bitcoin</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            color: "#C0C0C0",
          }}
        >
          $123,000{" "}
          <span
            style={{
              fontSize: "1.8vh",
              color: "green",
              padding: "0.1vh 0.3vw",
              background: "rgba(0,0,0,0.8)",
              borderRadius: "5px",
            }}
          >
            +0.36%
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
