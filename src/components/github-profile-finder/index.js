import React, { useState } from "react";
import { getFormatDate } from "./util";
import { User } from "./User";

import "./styles.css";

export const GithubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState();

  const findUser = async () => {
    try {
      if (username.length === 0) {
        return;
      }
      const response = await fetch("https://api.github.com/users/" + username);
      const resJson = await response.json();
      setUserData({
        login: resJson.login,
        name: username,
        avatarUrl: resJson.avatar_url,
        followers: resJson.followers,
        following: resJson.following,
        publicRepos: resJson.public_repos,
        createdDate: getFormatDate(resJson.created_at),
      });
      setUsername("");
    } catch (err) {
      console.log(
        "[ERROR]: Problema consultando el github. Intente mas tarde.!"
      );
    }
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          placeholder="Nombre Github..."
        />
        <button className="button" onClick={findUser}>
          Buscar
        </button>
      </div>
      <div>{userData && <User user={userData} />}</div>
    </div>
  );
};
