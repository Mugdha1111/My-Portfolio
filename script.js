let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("tab-contents");
  let sidemenu = document.getElementById("sidemenu");


  function opentab(tabname){
       for(tablink of tablinks){
          tablink.classList.remove("active");
       }
       for(tabco of tabcontents){
          tabco.classList.remove("active-tab");
       }
       event.currentTarget.classList.add("active");
       document.getElementById(tabname).classList.add("active-tab");
  }

function closemenu(){
   sidemenu.style.right = "-200px";
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbxmXssKZusPWS_9xFINqQZjrGG_bldyR81r1--bRRjQj2j83-cHtK1wTiEIkTdyl_Qb/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML="Message sent successfully"
         setTimeout(function(){
            msg.innerHTML = ""
         },5000)
         form.reset()
      })

      .catch(error => console.error('Error!', error.message))
  })
