var name1=prompt('Enter player-1 name');
console.log(name1);
var name2=prompt('Enter player-2 name');
console.log(name2);
var player='player_1';
let isgameOver=false;

document.getElementById('child-1').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-2').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-3').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-4').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-5').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-6').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-7').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-8').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('child-9').addEventListener('click',function(e){
    const innertext=e.target.innerText;
    if(innertext || isgameOver) return;
    if(player=='player_1'){
        e.target.innerText='X';
        player='player_2';
    }else{
        e.target.innerText='O';
        player='player_1';
    }
    const gameover=gameOver(e.target.innerText)
    if(gameover){
        console.log("Game Over");
    }
})
document.getElementById('play').addEventListener('click',function(e){
     const squares=document.getElementsByClassName('child')
     for(const square of squares){
        square.innerText="";
     }
     isgameOver=false;
})
const showGame=(char)=>{
    document.getElementById('winner').innerText=char==='X'?'Winner: '+ name1:'Winner: '+ name2;
}
const gameOver=(char)=>{
    const squares=document.getElementsByClassName('child');
    let count=0;
     for(const square of squares){
        if(square.innerText!=="") count++;
     }
     if(count===9){
        document.getElementById('winner').innerText="No Winner";
     }
    if(getvalue('child-1')===char && getvalue('child-2')===char && getvalue('child-3')===char){
        isgameOver=true;
        showGame(char);
        return true;
  }
  if(getvalue('child-4')===char && getvalue('child-5')===char && getvalue('child-6')===char){
    isgameOver=true;
    showGame(char);
    return true;
  }
  if(getvalue('child-7')===char && getvalue('child-8')===char && getvalue('child-9')===char){
    isgameOver=true;
    showGame(char);
    return true;
  }
  if(getvalue('child-1')===char && getvalue('child-4')===char && getvalue('child-7')===char){
    isgameOver=true;
    showGame(char);
    return true;
  }
  if(getvalue('child-2')===char && getvalue('child-5')===char && getvalue('child-8')===char){
    isgameOver=true;
    showGame(char);
    return true;
  }
  if(getvalue('child-3')===char && getvalue('child-6')===char && getvalue('child-9')===char){
    isgameOver=true;
    showGame(char);
    return true;
  }
  if(getvalue('child-1')===char && getvalue('child-5')===char && getvalue('child-9')===char){
    isgameOver=true;
    showGame(char);
    return true;
  }
  if(getvalue('child-3')===char && getvalue('child-5')===char && getvalue('child-7')===char){
    isgameOver=true;
    showGame(char);
    return true;
  }
  return false;
}
const getvalue=(id)=>{
    return document.getElementById(id).innerText;
}
