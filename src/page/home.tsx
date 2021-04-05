import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Container, CircleAvatar } from "../styles/index";
import { IData } from "../types/index";

interface Props extends RouteComponentProps<any> {
  history: any;
}

const App: React.FC<Props> = ({ history }) => {
  const [data, setData] = useState<IData[]>();
  const [followingUsers, setFollowingUsers] = useState<IData[]>();
  const [showFollow, setShowFollow] = useState(false);
  const [selected, setSelected] = useState("SACOLA");
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      console.log("iniciando");
      const dataFollowingLocal = JSON.parse(localStorage.getItem("f") || "[]");
      setFollowingUsers(dataFollowingLocal);
      console.log(dataFollowingLocal);
      // const dataLocalstorage = JSON.parse(localStorage.getItem("data") || "[]");
      // console.log(dataLocalstorage);
      // setData(dataLocalstorage.results);
      const URL_TO_FETCH = "https://randomuser.me/api/";

      fetch(URL_TO_FETCH, {
        method: "get", // opcional
      })
        .then(function (response) {
          response.json().then((data) => {
            setData(data.results);

            const getLocal = JSON.parse(localStorage.getItem("id") || "[]");

            getLocal.forEach((element: string) => {
              if (element === data.results[0].id) {
                setIsFollowing(true);
              } else {
                setIsFollowing(false);
              }
            });
          });
        })
        .catch(function (err) {
          console.error(err);
        });

      setLoading(true);
    }
    init();
  }, []);

  const handleFollow = () => {
    const value = data && data[0];

    // //
    // const idLocalStorage = JSON.parse(localStorage.getItem("id") || "[]");

    //pega lista de pessoas que segue
    const followersLocalStorage = JSON.parse(localStorage.getItem("f") || "[]");

    //const oldValueFollowers = followingUsers;
    const newValueFollowers: any = [];

    newValueFollowers.push(value);

    // oldValueFollowers &&
    //   oldValueFollowers.forEach((element) => {
    //     newValueFollowers.push(element);
    //   });

    followersLocalStorage.forEach((element: any) => {
      newValueFollowers.push(element);
    });

    console.log(followingUsers, newValueFollowers);
    setFollowingUsers(newValueFollowers);
    // if (followersLocalStorage.length === 0) {
    //   localStorage.setItem("f", JSON.stringify(value));
    // }

    // setFollowingUsers(newValueFollowers);
    localStorage.setItem("f", JSON.stringify(newValueFollowers));

    // followersLocalStorage.push(value);

    // idLocalStorage.push(value?.id.value);

    // localStorage.setItem("id", JSON.stringify(idLocalStorage));

    // setIsFollowing(!isFollowing);
  };

  const handleSubmit = async () => {
    const dataLocalstorage = JSON.parse(localStorage.getItem("data") || "[]");
    console.log(dataLocalstorage);
    setData(dataLocalstorage.results);
    const URL_TO_FETCH = "https://randomuser.me/api/";

    fetch(URL_TO_FETCH, {
      method: "get", // opcional
    })
      .then(function (response) {
        response.json().then((data) => {
          setData(data.results);
          const id = data.results[0].id;
          const getLocal = JSON.parse(localStorage.getItem("id") || "[]");

          getLocal.forEach((element: string) => {
            if (element === id) {
              setIsFollowing(true);
            } else {
              setIsFollowing(false);
            }
          });
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  const ComponentFollowingUsers = () => {
    if (followingUsers?.length !== 0) {
      return (
        <div
          className={`my-div text-white bold ${
            showFollow === true ? "active" : null
          }`}
        >
          <span
            className="text-white bold"
            onClick={() => setShowFollow(!showFollow)}
          >
            following {followingUsers?.length} user
            <i className="fas fa-angle-down"></i>
          </span>
          <div className="f">
            {showFollow === true
              ? followingUsers?.map((user) => {
                  return (
                    <div className="show-user">
                      <div>
                        <img src={user.picture.large} alt="profile" />
                      </div>
                      <div className="div-names">
                        <span>{`${user.name.first} ${user.name.last}`}</span>
                        <span>
                          {user.location.country}, {user.location.city}
                        </span>
                      </div>
                      <div>
                        <button className="btn btn-blue">following</button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      );
    } else {
      return <span />;
    }
  };

  const ComponentSacola = () => {
    return (
      <div className="main">
        <header className="">
          <span className="text-white bold">
            {data && data[0].login.username}
          </span>
          <ComponentFollowingUsers />
        </header>
        <section className="section-1"></section>
        <section className="section-main">
          <section
            className="section-main__top box-shadow-2"
            style={{
              backgroundImage: `url("${data && data[0].picture.large}")`,
            }}
          ></section>
          <section className="perfil ">
            <div className="circle-avatar">
              <img src={data && data[0].picture.large} alt="profile" />
            </div>
            <div className="perfil-bottom">
              <div className="group-btn">
                <div>
                  {isFollowing === true ? (
                    <button className="btn btn-blue" onClick={handleFollow}>
                      Following
                    </button>
                  ) : (
                    <button className="btn btn-green" onClick={handleFollow}>
                      Follower
                    </button>
                  )}
                </div>

                <div>
                  <button className="btn" onClick={handleSubmit}>
                    try the next one
                  </button>
                </div>
              </div>
              <div>
                <span>
                  {data && data[0].name.first} {data && data[0].name.last}
                </span>
              </div>
              <div>
                <span>
                  {data && data[0].location.city},{" "}
                  {data && data[0].location.state}
                </span>
              </div>
            </div>
          </section>

          <section className="section-main__bottom box-shadow-2"></section>

          <section className="detail-bottom  ">
            <div className="div-1 box-shadow-2">
              <div>
                <span className="bold">Personal info</span>
              </div>
              <div>
                <span className="text-gray bold">
                  born at: {data && data[0].location.country}
                </span>
              </div>
              <div>
                <span className="text-gray bold">
                  age: {data && data[0].registered.age}
                </span>
              </div>
            </div>
            <div className="div-2 box-shadow-2">
              <div>
                <span className="bold">Contact info</span>
              </div>
              <div>
                <span className="text-gray bold">
                  email: {data && data[0].email}
                </span>
              </div>
              <div>
                <span className="text-gray bold">
                  phone: {data && data[0].phone}
                </span>
              </div>
            </div>
          </section>
        </section>
        <section className="section-2"></section>
      </div>
    );
  };

  return (
    <Container>
      {loading === true ? <ComponentSacola /> : <span>carregando...</span>}
    </Container>
  );
};

export default App;
