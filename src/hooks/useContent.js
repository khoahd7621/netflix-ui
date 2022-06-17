import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/Firebase";

const useContent = (target) => {
  const [content, setContent] = useState([]);
  const { Firebase } = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
};

export default useContent;
