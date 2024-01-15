import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LANG_OPTIONS_DROPDOWN } from "../utils/constants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="pl-8 pt-2 w-full absolute bg-gradient-to-b from-black z-10 flex md:flex-row flex-col justify-between items-center">
      <img
        className={user ? "w-32" : "w-60"}
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="login-netflix-logo"
      ></img>
      {/* <LoaderComponent /> */}
      {user && (
        <div className="flex">
          {gptSearchView && (
            <select
              className="mr-5 rounded-lg bg-red-700 text-white py-1"
              onChange={handleLanguageChange}
            >
              {/* <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option> */}
              {LANG_OPTIONS_DROPDOWN.map((lang) => {
                return <option value={lang.value}>{lang.display}</option>;
              })}
            </select>
          )}
          <button
            className="rounded-lg text-white mr-8 px-4 py-1 bg-red-700"
            onClick={handleGPTSearchClick}
          >
            {gptSearchView ? "Home Page" : "GPT Search"}
          </button>
          <div>
            <img
              src="https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbg8b9gDW0a4RN42JzXExXzjVU1EnPFfRBh0CpUQMcu_nm6Qwk5NRIkIxLoG8I-2JRU_dt_KvqdkT3a7eTWwBv0DgbvaCZA.png?r=54a"
              alt="profile"
            />
          </div>
          <button onClick={handleSignOut} className="text-white mx-4">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
