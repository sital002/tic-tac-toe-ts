import {  FC, useState } from "react"




const Board : FC= ()  => {
    const [turn, setTurn] = useState<string>("O");
    const [message, setMessage] = useState<string>("O's turn")
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [gameArr, setgameArr] = useState<string[]>([
      "","","",
      "","","",
      "","","",
  ])
    const handleClick = (index : number)=>{
        if(gameOver || gameArr[index] !== "") return
        const newArr = [...gameArr];
        newArr.splice(index,1,turn);
        setgameArr(newArr);
        if(chkDraw(newArr)) {
            setGameOver(true)
            return setMessage("It's a Draw")
        } 

        if(chkWin(newArr,turn)){
             setGameOver(true)
             return setMessage(`${turn} has won the game`)
        } 
        setTurn(()=> turn === "O" ? "X" : "O");
        setMessage(`${turn === "O" ? "X" : "O"}'s turn`)
    }
    const resetGame = ()=>{
      setgameArr([
        "","","",
        "","","",
        "","","",
      ]);
      setGameOver(false)
      setTurn("O")
      setMessage("O's turn")
  
    }


    function chkWin(arr:string[],turn:string) : boolean{
            const winPatterns = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6]
            ];
          
            for (let pattern of winPatterns) {
              const [a, b, c] = pattern;
              if(arr[a] === turn && arr[b] === turn && arr[c] === turn) return true
            }
            return false; 
          }
        
        
    

    function chkDraw(arr:string[]) : boolean{
         return arr.every(element=>element !== "")
}
  return (
    <>
        <h1>{message}</h1>
    <div className="board">
        {
            gameArr.map((item,index)=>{
                return <div className="box" key={index} onClick={()=>{handleClick(index)}}>{item}</div>
            })
        }

    </div>
    {gameOver ? <button onClick={resetGame} className='btn'>Play Again</button>  :  null}
        </>
  )
}

export default Board