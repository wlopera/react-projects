import React from "react";

import "./styles.css";

export const User = ({ user }) => {
  const { login, avatarUrl, followers, following, publicRepos, createdDate } =
    user;

  return (
    <div className="user-context">
      <div className="user-icon-context">
        <img className="user-icon" src={avatarUrl} alt="avantar" />
      </div>
      <div>
        <div className="user-data">
          <div className="user-avatar">
            <a href={`https://github.com/${login}`}>{login}</a>
            <p className="user-txt">&nbsp;&nbsp;Creado el {createdDate}</p>
          </div>
          <p className="user-txt">Repos públicos: {publicRepos}</p>
          <p className="user-txt">Te siguen: {followers}</p>
          <p className="user-txt">Tu sigues: {following}</p>
        </div>
      </div>
    </div>
  );
};
