// TODO
// 1. кнопка начала игры (обнуления)
// 2. количество побед
// 3. Кто ходит первым (о или х)
// 4. Если игра окончена - дальше не играем
// 5. Посмотреть как добавить проход по истории ходов  - https://react.dev/learn/tutorial-tic-tac-toe

import { useEffect, useState } from "react";
import styles from "../index.module.css";

function Cell(props) {
  return (
    <div onClick={props.onCellClick} className={styles.cell}>
      {props.value}
    </div>
  );
}

export default function TicTackToe(props) {
  const winPos = [
    [0, 1, 2],
    [2, 5, 8],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [1, 4, 7],
  ];

  const [board, stateBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [turn, stateTurn] = useState("x");

  function cellClick(idx) {
    if (board[idx] !== null) {
      return;
    }

    let newBoard = board.map((value, i) => {
      if (idx === i) {
        return turn;
      }

      return value;
    });

    stateBoard(newBoard);

    if (turn === "x") {
      stateTurn("o");
    } else {
      stateTurn("x");
    }
  }

  useEffect(() => {
    let winner = false;
    for (let i = 0; i < winPos.length; i++) {
      let line = winPos[i];

      if (
        board[line[0]] === board[line[1]] &&
        board[line[0]] === board[line[2]] &&
        board[line[0]] !== null
      ) {
        winner = board[line[0]];
        break;
      }
    }

    if (winner) {
      alert(winner + " is winner");
    }
  }, [board]);

  return (
    <div className={styles.board}>
      {board.map((value, i) => {
        return (
          <Cell
            key={i}
            value={value}
            onCellClick={() => {
              cellClick(i);
            }}
          />
        );
      })}
    </div>
  );
}
