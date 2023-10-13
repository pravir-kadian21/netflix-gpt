import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="pl-8 pt-2 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className={user ? "w-32" : "w-60"}
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="login-netflix-logo"
      ></img>
      {user && (
        <div className="flex">
          <div>
            <img
              src="https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbg8b9gDW0a4RN42JzXExXzjVU1EnPFfRBh0CpUQMcu_nm6Qwk5NRIkIxLoG8I-2JRU_dt_KvqdkT3a7eTWwBv0DgbvaCZA.png?r=54a"
              alt="profile"
            />
          </div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
