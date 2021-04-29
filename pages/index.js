import Head from "next/head";
import { useState } from "react";
import _ from "lodash";
import styles from "../styles/Home.module.scss";

const words = [
  "Торговый центр",
  "База террористов",
  "Банк",
  "Больница",
  "Воинская часть",
  "Выставка  настольных игр",
  "Войско крестоносцев",
  "Зоопарк",
  "Казино",
  "Карнавал ",
  "Карнавал",
  "Киностудия",
  "ресторан",
  "кафе",
  "столовая",
  "бар",
  "очко кобры",
  "дворец",
  "лаборатория",
  "необитаемый остров",
  "шахматный клуб",
  "стрип клуб",
  "притон героиншиков",
  "военная база",
  "боксерский клуб",
  "Корпоративная вечеринка",
  "Лунапарк",
  "Ночной клуб",
  "Овощебаза",
  "Океанский лайнер",
  "Орбитальная станция",
  "Отель",
  "Партизанский отряд",
  "Пассажирский поезд",
  "Пиратский корабль",
  "Пляж",
  "Подводная лодка",
  "Полицейский участок",
  "Полярная станция",
  "Посольство",
  "Ресторан",
  "Самолет",
  "Спа-салон",
  "Станция техобслуживания",
  "Супермаркет",
  "Театр",
  "Хоккейная арена",
  "Университет",
  "Церковь",
  "Цирк-шапито",
  "Школа",
];
const word = _.sample(words);

export default function Home() {
  const [playerCount, setPlayerCount] = useState(5);
  const [spyCount, setSpyCount] = useState(1);
  const [isGame, setGame] = useState(false);
  const [spyIndex, setSpyIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [showWord, setShowWord] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Spy game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isGame && (
        <>
          <label for="count">Количество игроков</label>
          <input
            type="number"
            id="count"
            value={playerCount}
            onChange={(e) => setPlayerCount(e.target.value)}
          ></input>
          {/* <input
            type="number"
            id="count"
            value={spyCount}
            onChange={(e) => setSpyCount(e.target.value)}
          ></input> */}

          <button
            onClick={() => {
              setSpyIndex(_.random(0, _.toNumber(playerCount - 1)));
              setGame(true);
            }}
          >
            Начать играть
          </button>
        </>
      )}

      {isGame && (
        <>
          <div>
            {showWord && (
              <span> {spyIndex === currentPlayer ? "Вы шпион" : word}</span>
            )}
            <br />
            <span style={{ textAlign: "center" }}>
              Вы игрок {currentPlayer + 1}
            </span>
          </div>
          <img src="/shiba.gif" alt="game" style={{ height: "20vw" }} />
          <div className={styles.actions}>
            <div>
              <button
                onClick={() => {
                  setShowWord(true);
                }}
              >
                Показать
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setShowWord(false);
                  setCurrentPlayer(currentPlayer + 1);
                }}
              >
                След игрок
              </button>
              <button
                onClick={() => {
                  // setGame(false);
                  setShowWord(false);
                  setCurrentPlayer(0);
                  setSpyIndex(_.random(0, _.toNumber(playerCount)));
                }}
              >
                Сброс игры
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
