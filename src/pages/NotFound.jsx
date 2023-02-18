import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Player } from "@lottiefiles/react-lottie-player";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="h-[100vh]">
      <Player
        src="https://assets7.lottiefiles.com/packages/lf20_h5lattxs.json"
        style={{ height: "100vh", width: "100vw" }}
        loop
        autoplay
      />
    </div>
  );
}

export default NotFound;
