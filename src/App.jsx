import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const Loading = () => {
  return (
    <>
      <style>{`
        .loader {
          width: 15px;
          aspect-ratio: 1;
          position: relative;
          margin: 100px auto;
          color: #5961d0;
        }
        .loader::before,
        .loader::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #5961d0;
        }
        .loader::before {
          box-shadow: -25px 0;
          animation: l8-1 1s infinite linear;
        }
        .loader::after {
          transform: rotate(0deg) translateX(25px);
          animation: l8-2 1s infinite linear;
        }
        @keyframes l8-1 {
          100% { transform: translateX(25px); }
        }
        @keyframes l8-2 {
          100% { transform: rotate(-180deg) translateX(25px); }
        }
      `}</style>

      <div className="loader"></div>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-white">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
