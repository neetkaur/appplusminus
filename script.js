let updatedvalue = 0
let originalvalue = parseInt(document.getElementById('finalnumber').innerHTML)
let incrementvalue = parseInt(document.getElementById('increment').value)

function doAdd(){
  updatedvalue = originalvalue+incrementvalue
  originalvalue = updatedvalue
  document.getElementById('finalnumber').innerHTML = updatedvalue
}

function doSubtract(){
  updatedvalue = originalvalue-incrementvalue
  originalvalue = updatedvalue
  document.getElementById('finalnumber').innerHTML = updatedvalue
  if(updatedvalue<0){

    document.getElementById('finalnumber').style.color = "red"}
}

function updateincrement(){
  incrementvalue = parseInt(document.getElementById('increment').value)
}
