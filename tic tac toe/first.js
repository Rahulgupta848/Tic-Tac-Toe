count=0
function switchPlayer(n){
     let player=document.getElementById('playerTurn');
     if(n%2==0){
          player.innerHTML=`Player 2 turn.`
     }
     else{
          player.innerHTML=`Player 1 turn.`
     }
}
let board=[' ',' ',' ',' ',' ',' ',' ',' ',' '];

function winner(icon){
     console.log(icon);
     console.log(typeof icon);
     let ele=document.getElementById('result');
     if(icon==='X'){
          window.blur();
          window.alert('!!! WINNER IS PLAYER 1 !!!');
     }
     else if(icon==='O'){
          window.blur();
          window.alert('!!! WINNER IS PLAYER 2 !!!');   
     }
     else{
          window.blur();
          window.alert('OOpss its a draw !!');
     }
}

function ticked( button){
    if(count%2==0){
         board[button]='X';
         let grid=document.getElementById(`${button}`);
         grid.value='X';
         grid.style.fontSize='30px';
         grid.disabled=true;
    }
    else{
         board[button]='O';
         let grid=document.getElementById(`${button}`);
         grid.value='O';
         grid.style.fontSize='30px';
         grid.disabled=true;
    }
    switchPlayer(count);
    count++;
    
     //rows
     if(board[0]===board[1] && board[1]===board[2] && board[1]!=' '){
          winner(board[0]);
     }
     else if(board[3]===board[4] && board[4]===board[5] && board[4]!=' '){
          winner(board[3]);
     }
     else if(board[6]===board[7] && board[7]===board[8] && board[7]!=' '){
          winner(board[6]);
     }
     //columns
     else if(board[0]===board[3] && board[3]===board[6] && board[3]!=' '){
          winner(board[0]);
     }
     else if(board[1]===board[4] && board[4]===board[7] && board[4]!=' '){
          winner(board[1]);
     }
     else if(board[2]===board[5] && board[5]===board[8] && board[5]!=' '){
          winner(board[2]);
     }
     //diagonals
     else if(board[0]===board[4] && board[4]===board[8] && board[4]!=' '){
          winner(board[0]);
     }
     else if(board[2]===board[4] && board[4]===board[6] && board[4]!=' '){
          winner(board[2]);
     }
     else if(count==9){
          winner('N');
     }

}

