console.log("hello there friends")

// var car = {
//   color: "red",
//   isTurnedOn: true,
//   seats: [
//     'seat 1',
//     'seat 2',
//     'seat 3',
//     'seat 4',
//   ],
//   switchCar: function(isOn){
//     if (isOn == true){
//       this.isTurnedOn = true;
//     } else {
//       this.isTurnedOn = false;
//     }
//   },
//   fly: function(){
//     alert('fly');
//   }
// }

var timer = null;
// var countdownNum = 10


let changeState = function(state){
  clearInterval(timer);
  var countdownNum = 10;
  document.getElementById('countdown').innerHTML = countdownNum;
  document.body.className = 'body-state'+ state;
  document.getElementById('cantwait').className = 'cantwait';
  document.getElementById('nervous').className = 'nervous';

  if (state == 2){
          timer = setInterval(function(){
          countdownNum -= 1;
          document.getElementById('countdown').innerHTML = countdownNum;

          if (countdownNum >=7){
            document.getElementById('cantwait').className = 'cantwait show';
          }
          else {document.getElementById('cantwait').className = 'cantwait'}

          if (countdownNum >= 3 && countdownNum < 5){
            document.getElementById('nervous').className = 'nervous show';
          }
          else {document.getElementById('nervous').className = 'nervous'}

          if (countdownNum <=0){
            changeState(3);

          }
    }, 600);
  }
 else if (state == 3){
   let success = setTimeout(function(){
     var randomNum = Math.round(Math.random()*10);
     console.log('random number:', randomNum)

     if (randomNum >= 5){
       changeState(4);
     }
     else {changeState(5);}
     }, 2000);
 }
}
