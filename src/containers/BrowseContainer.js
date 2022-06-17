import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/Firebase";
import SelectProfileContainer from "./SelectProfileContainer";
import { Loading } from "../components";

const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { Firebase } = useContext(FirebaseContext);
  const user = Firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}</>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
