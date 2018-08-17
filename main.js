
let tameThis = document.querySelector(".thisIsWhatsUp");

axios.get("https://api.github.com/users/spoccomp?access_token=00e6fb16367f97403e63db0c70bbc813c7a3ccdf")
//axios.get("https://api.github.com/users/spoccomp")
.then(function (res) {
        let bing = res.data;
        console.log(bing);
        // let images = document.getElementsByTagName("img");
        // images.classList.add(".mySize");
        
tameThis.innerHTML =`
 <div class="card">
    <div class="card-image waves-effect waves-block waves-light ">
      <img class="activator mySize" src="${bing.avatar_url}">
    </div>
    <div class="card-content">
<span class="card-title activator grey-text text-darken-4">${bing.login}<i class="material-icons right">more_vert</i></span>
      
    </div>
    <div class="card-reveal">
<span class="card-title grey-text text-darken-4">${bing.name}<i class="material-icons right">close</i></span>
    <p class="textStuff">The amount of repos I have: ${bing.public_repos}</P>
    <span class="textStuff"> Visit my Git Hub Page <br>
        <a class="btn-floating btn-large pulse" id="git" ><i class="material-icons">language</i></a>
    </span><br>
    <span class="textStuff">Checkout my repos!</span><br>
        <a class="btn-floating btn-large pulse" id="gitRes" ><i class="material-icons">archive</i></a>
    </div>
  </div>
`
let openGitPage = document.querySelector("#git");
openGitPage.addEventListener("click",functionThis);
function functionThis(){
    window.open(bing.html_url); 
}
let openGitRepo = document.querySelector("#gitRes");
openGitRepo.addEventListener("click",functionThat);
function functionThat(){
    // let box = document.createElement("div");
    // box.style.width = "500px";
    // box.style.height = "500px";
    // box.style.backgroundColor ="black";
    // box.style.border="2px black solid";
    // box.style.color = "green";
    // //box.innerHTML =  open("https://github.com/spoccomp?tab=repositories")
    // document.body.appendChild(box);
    window.open("https://github.com/spoccomp?tab=repositories");
    //alert("https://github.com/spoccomp?tab=repositories");
}   

    }).catch(function (response) {
        console.error(response);
})


