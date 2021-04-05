import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 1280px;
      min-height: 640px; */
  background-color: red;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    display: flex;
    flex-direction: column;
    border: 1px solid #d3d3d3;
    width: 960px;
    background-color: BlueViolet;
    position: relative;

    header {
      background-color: BlueViolet;
      padding: 20px 100px;
      border-bottom: 1px solid black;
      box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%),
        0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%);
      display: flex;

      justify-content: space-between;

      span {
        cursor: pointer;

        i {
          margin-left: 5px;
        }
      }

      .my-div {
        width: 300px;
        text-align: right;
      }

      .active {
        background-color: white;

        span {
          color: darkorange;
        }
      }

      .f {
        position: absolute;

        .show-user {
          z-index: 5;
          position: relative;
          width: 300px;
          padding: 5px;

          background-color: white;
          border-bottom: 1px solid #d3d3d3;

          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;

          div {
          }

          .div-names {
            display: flex;
            flex-direction: column;

            span:nth-child(2) {
              font-size: 0.6em;
            }
          }

          div:nth-child(1) {
            flex: 1;
          }
          div:nth-child(2) {
            margin-left: 10px;
            flex: 3;
            text-align: left;
          }

          div:nth-child(3) {
            flex: 2;
          }

          button {
          }
          span {
            color: black !important;
          }

          img {
            width: 30px;
            border-radius: 50px;
          }
        }
      }
    }

    .section-1 {
      background-color: BlueViolet;
      height: 200px;
    }

    .section-main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 600px;
      margin-top: 40px;

      .section-main__top {
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: fill;
        background-position: 0px -200px;
      }

      .perfil {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;

        .circle-avatar {
          position: absolute;

          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          img {
            border: 2px solid #d3d3d3;
            border-radius: 50%;
            width: 200px;
            object-fit: cover;
            text-align: center;
          }
        }

        .perfil-bottom {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          width: 100%;

          div {
            margin: 10px;
          }

          .group-btn {
            display: flex;
            flex-direction: row;
            /* background: green; */
            /* button:nth-child(1) {
              display: flex;
              align-items: center;
            } */

            div:first-child {
              width: 55%;
              display: flex;
              justify-content: flex-end;
            }

            div:last-child {
              width: 30%;
              display: flex;
              justify-content: flex-end;
            }
          }
        }
      }

      .section-main__bottom {
        height: 180px;
        background: white;
        border-bottom: 1px solid #d3d3d3d3;
        margin-bottom: 5px;
      }

      .detail-bottom {
        display: flex;
        flex-direction: row;
        flex: 1;
        width: 100%;
        min-height: 42%;
        .div-1 {
          background: white;
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 10px;
          margin-right: 5px;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          div {
            margin: 5px;
          }
        }

        .div-2 {
          display: flex;
          flex-direction: column;
          background: white;
          flex: 1;

          padding: 10px;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          div {
            margin: 5px;
          }
        }
      }
    }
    .section-2 {
      height: 480px;
    }
  }

  @media (min-width: 600px) {
    .main {
      background-color: purple;
    }
  }

  @media (min-width: 768px) {
    .main {
      background-color: gray;
    }
  }

  @media (min-width: 992px) {
    .main {
      background-color: blue;
    }
  }

  @media (min-width: 1200px) {
    .main {
      background-color: whitesmoke;
    }
  }

  .box-shadow {
    box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%),
      0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%);
  }

  .box-shadow-2 {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);
  }

  .column {
    flex-direction: column;
  }

  .grid {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .grid-2 {
    padding: 20px;
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      width: 90%;

      input {
        width: 100%;
        height: 40px;
      }
    }
  }

  .text-center {
    text-align: center;
  }

  .text-gray {
    color: gray;
  }

  .text-orange {
    color: #ffae00;
  }
  .bold {
    font-weight: bold;
  }

  .justify-content__space-between {
    display: flex;
    justify-content: space-between;
  }

  .btn-green {
    background: green;
    color: white;
  }

  .btn-blue {
    background: #007bff;
    color: white;
  }

  .text-white {
    color: white;
  }

  .btn {
    cursor: pointer;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

export const CircleAvatar = styled.div`
  border-radius: 50%;
  background: yellow;
  img {
  }
`;
