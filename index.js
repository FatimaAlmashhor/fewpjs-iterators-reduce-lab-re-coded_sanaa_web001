const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries (){
  let totalBatteries = batteryBatches.reduce((s , c ) => s+c , 0);

  console.log(totalBatteries);
}
batteries();
