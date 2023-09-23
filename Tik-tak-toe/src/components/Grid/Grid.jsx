
import "./Grid.css"
import Card from "../Card/Card";
import { useState } from "react";
import isWinner from "../../helpers/checkWinner";
function Grid({numberOfCards}){
const [board , SetBoard] = useState(Array(numberOfCards).fill(""));
const [turn, setTurn] = useState(true); // true=> O , false=>X

        const [winner, setWinner]= useState(null);
function play(index){
    if(turn==true){
        board[index]="O";
    }
    else{
        board[index]="X";
    }
    const win = isWinner(board, turn?"O":"X");
    if(win){
 setWinner(win);
    }
    SetBoard([...board]);
    setTurn(!turn)
}
function reset(){
    setTurn(turn);
    setWinner(null);
    SetBoard(Array(numberOfCards).fill(""))
}

return(
    <div className="grid-wrapper">

{
    winner && (
        <> 
        <h1 className="turn-heighlight">Winner is {winner} </h1>
     <button className="reset" onClick={reset}> Reset Game </button>
    </>
     )

}


        <h1 className="turn-heighlight"> Current turn:{(turn)?'O':'X'}</h1>

        <div className="grid">

      {board.map((el, idx)=> <Card gameEnd={winner?true:false} key={idx} onPlay={play} player={el} index={idx}/>)}

     </div>
   </div>
   
);
}
export default Grid;
