// Code your solutions in this file
function writeCards(namesArray, event) {
    console.log("namesArray", namesArray)
    console.log("event", event)
    const newArray= []
    for (let i = 0; i < namesArray.length; i++) {
        newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
      }
      return newArray
    }
    function countDown(number) {
        while (number >= 0) {
            console.log(number);
            number--;
          }
    }