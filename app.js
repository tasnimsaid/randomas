//factoriel


function facto(){
    
  var i,num,f;
   f=1;
    num = document.getElementById("nums").value;

for ( i = 1; i <= num ; i++){
  
 
  f = f * i;
}
i = i-1 ;
document.getElementById("facts").innerHTML = "the factoriel of  " + i + "  is : " + f ;

}


// End Factoriel
    
//  var dsq = document.getElementById("text").value;
function generatePasswords() {
  var i,num,numera;
  numera=document.getElementById("textino").value;
    num = document.getElementById("nums").value;

   var letters = document.getElementById("text").value;
   
  let passwords = new Set();
  while (passwords.size < numera) {
    let password = '';
    //
 
    //
    let shuffledLetters = letters.split('').sort(() => 0.5 - Math.random()).join('');
     
    
    
    
    for (i = 0; i < num; i++) {
      
      
            password += shuffledLetters[i];
    }
    passwords.add(password.split("").join(","));
  }
  document.getElementById('passwords').innerText = [...passwords].join('\n');
}

//btncopy

// document.querySelector("#copy-btn")
// .addEventListener("click",()=>{
//    const passwordas = document.querySelector("#passwords")
//    const milevsky =navigator.clipboard;
//    milevsky.writeText(passwordas.value)
//   .then(()=>{

//     alert("text copied")
//   })
// })


function copyToClipboard() {
  // Get the text from the <pre> tag
  var text = document.getElementById("passwords").innerText;

  // Create a temporary <textarea> element to hold the text and copy it to the clipboard
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  alert("Text copied to clipboard!");
}

