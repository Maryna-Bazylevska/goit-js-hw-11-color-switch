const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
 const refs={
     btnStart:document.querySelector('button[data-action="start"]'),
     btnStop:document.querySelector('button[data-action="stop"]'),
     body:document.querySelector('body'),

 }
 refs.btnStart.addEventListener('click', onStartChangeColor);
 refs.btnStop.addEventListener('click', onStopChangeColor);
function onStartChangeColor(){
     intervalId=setInterval(()=>{
     refs.body.style.backgroundColor=colors[randomIntegerFromInterval(0, colors.length-1)]
     },1000)
     refs.btnStart.disabled=true;
 };
 function onStopChangeColor(){
     clearInterval(intervalId);
     refs.btnStart.disabled=false;;
 };