import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, SetIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      SetIsOnline(true);
    };
    const handleOffline = () => {
      SetIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
