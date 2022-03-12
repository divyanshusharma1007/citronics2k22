
// let hamicon = document.getElementById("hamicon");
// let hambar = document.getElementById("hambar")
// // setting hambar properties using javascript
// hambar.style.right = "-150px";
// hambar.style.display = "none";
// hamicon.addEventListener("click", () => {
//      if (hambar.style.right === "-150px") {
//           hambar.style.right = "0%";
//           hambar.style.display = "block";
//      }
//      else {
//           hambar.style.right = "-150px";
//           hambar.style.display = "none";
//      }
// })






document.getElementById("hamicon").addEventListener('click',()=>{
     if(document.getElementById("navbar_menu").style.top=="-1000px"){
          document.getElementById("navbar_menu").style.top='38px';
     }
     else{
          document.getElementById("navbar_menu").style.top="-1000px";
     }
})