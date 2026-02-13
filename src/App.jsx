import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [yesScale, setYesScale] = useState(1);
  const [showInvite, setShowInvite] = useState(false);

  const handleNo = () => {
    setYesScale((prev) => prev + 0.4);
  };

  const handleYes = () => {
    setShowInvite(true);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#fce7f3"
    }}>
      <div style={{
        background: "white",
        padding: "2rem",
        borderRadius: "1rem",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%"
      }}>
        {!showInvite ? (
          <>
            <h1 style={{ color: "#db2777" }}>
              Mi amor, Angie ¿Quieres ser mi San Valentín? 💖
            </h1>

            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2rem"
            }}>
              <motion.button
                animate={{ scale: yesScale }}
                onClick={handleYes}
                style={{
                  background: "#ec4899",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.75rem",
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer"
                }}
              >
                Sí 💘
              </motion.button>

              <button
                onClick={handleNo}
                style={{
                  background: "#e5e7eb",
                  color: "#374151",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.75rem",
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer"
                }}
              >
                No 😢
              </button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 style={{ color: "#db2777" }}>
              💝 Gracias por aceptar 💝
            </h2>
            <p style={{ fontSize: "1.1rem", color: "blue" }}>
              Se que el 14 de febrero no nos podemos ver,
              <br />
              pero espera un regalo. Te mando un beso
              <br />
              <strong style={{ color: "#ec4899" }}>
                Te amo ❤️
              </strong>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
