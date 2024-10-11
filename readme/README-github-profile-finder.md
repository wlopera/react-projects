# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

## 12.Buscador de Perfiles de Github

![image](https://github.com/user-attachments/assets/b741ac1d-105f-4350-a640-706da9d10a27)

![image](https://github.com/user-attachments/assets/dbd63fb2-cad7-4341-beff-c4b5fe2c25f7)

Click en link del github del usuario consultado

![image](https://github.com/user-attachments/assets/f62fcbf9-d9bc-429a-a1bc-4a75baf52e1e)

Muestra el Github del usuario

![image](https://github.com/user-attachments/assets/0a74d0dc-4fb2-4130-9c41-a6bb1fb61736)

- Uso de Api de Github

  > https://api.github.com/users/${userName}

- Ejemplo de consumo de API
- > https://api.github.com/users/wlopera

![image](https://github.com/user-attachments/assets/49ff8b8a-6f7d-4818-83ef-a7e5ff473c45)

### Código

- index.js

```
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
```

- User.js

```
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
```

- util.js

```
const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export const getFormatDate = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getUTCDay();
  const month = dateObj.getUTCMonth();
  const year = dateObj.getUTCFullYear();
  return `${day} ${months[month]} ${year}`;
};
```

- styles.css

```
.container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    margin: 10px;
}

.input {
    border: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: grey;
    font-size: 14px;
}
.input:focus {
    border: 1px solid black;
    color: black;
}
.button {
    margin-left: 0.5rem;
    background-color: #00f4ec;
    height: 20px;
    border-style: groove;
    border-color: rgb(237, 234, 234);
    border-radius: 4px;
}
.user-context{
    margin: 5px;
    border: 1px solid black;
    width: 50vw;
    text-align: center;
    border-radius: 8px;
}
.user-icon-context{
    padding-top: 10px;
}
.user-icon {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 1px solid grey;
}
.user-data {
    display: flex;
    flex-direction: column;
}
.user-avatar{
    display: flex;
    flex-direction: row;
    font-weight: bold;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.user-txt{
    font-weight: bold;
}
```

### Salida

![image](https://github.com/user-attachments/assets/4defb8b8-7dfe-41a5-b8b3-9faab884a8a3)

![image](https://github.com/user-attachments/assets/15b590c4-e89f-46da-9e5c-8eff66f87b73)

![image](https://github.com/user-attachments/assets/81c1c49b-52d4-4abd-a35d-e6cf0cb857f1)

![image](https://github.com/user-attachments/assets/d89fb04e-cb4d-49c9-a8ee-828b52ba41a7)

![image](https://github.com/user-attachments/assets/34b06aca-a21c-4c23-9fd9-d8cb8c1c936c)

![image](https://github.com/user-attachments/assets/244f8b02-f850-44d1-99e0-d88d721731e8)

![image](https://github.com/user-attachments/assets/8f5d66fd-d7ac-40b6-b5b9-b660be70eff4)
