//write your pseudo code here first.
/* collect input from the dom
yellNames Display Names

*/

/*document.querySelector('#yellNames').addEventListener('click', justScream)

function justScream() {
    const fName = document.querySelector('#fName').value
    const lName = document.querySelector('#lName').value
    const oName = document.querySelector('#oName').value

    document.querySelector('#displayNames').innerHTML = `${fName} ${lName} ${oName}`
}
*/

document.querySelector('#yellNames').addEventListener('click', runScream)

function runScream() {
    const fName = document.querySelector('#fName').value
    const lName = document.querySelector('#lName').value
    const oName = document.querySelector('#oName').value

    document.querySelector('#displayNames').innerHTML = `${fName} ${lName} ${oName}`
}

const synth = window.speechSynthesis;
  document.querySelector('#yellNames').addEventListener('click', run)
 
  function run() {
  const fName = document.querySelector('#fName').value
  const lName = document.querySelector('#lName').value
  const oName = document.querySelector('#oName').value

  const yellText =  `${fName} ${lName} ${oName}`
 
  document.querySelector('#displayNames').innerText = yellText
 
  let yellThis = new SpeechSynthesisUtterance(yellText);
 
  synth.speak(yellThis);
 }





