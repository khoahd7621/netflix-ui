import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/Firebase";

const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { Firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = Firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
};

export default useAuthListener;
