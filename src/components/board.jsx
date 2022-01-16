import React,{ useState } from 'react';
import Chessboard from "chessboardjsx";
import PlayersInfos from './playerInfos';
import {Users} from "../data"
import { ChessInstance,ShortMove  } from "chess.js";
const Chess = require("chess.js");

const player1={...Users[0]}
const player2={...Users[1]}
function Board() {
    const [chess,setChess] = useState(
        new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")//position initial
      );
      const [fen, setFen] = useState(chess.fen());

      const handleMove = (move: ShortMove ) => {
        if (chess.move(move)) {
          setTimeout(() => {
            const moves = chess.moves();
    
            if (moves.length > 0) {
              const computerMove = moves[Math.floor(Math.random() * moves.length)];
              chess.move(computerMove);
              setFen(chess.fen());
            }
          }, 3000);
    
          setFen(chess.fen());
        }
      };
    
  return (
    <div className="Board">
        
                <PlayersInfos data={player1}/>
                <Chessboard
                    width={"750"}
                    position={fen}
                    onDrop={(move) =>
                      handleMove({
                        from: move.sourceSquare,
                        to: move.targetSquare,
                        promotion: "q",
                      })
                    }
                />
                 <PlayersInfos data={player2}/>
  
    </div>
  );
}

export default Board;
