document.getElementById("dynamicfetch").style.top = "-30000px"

// event bar toggleing coding for the device 
let toggle = (id) => {
     if (id.style.display == "none") {
          id.style.display = "block";
     }
     else {
          id.style.display = "none";
     }
}


// toggler features 
// let button = document.getElementsByClassName("card_btn");
// for (items of button) {

//      items.addEventListener('click', (e) => {
//           if (e.target.id == "entertainment_btn") {
//                toggle(document.getElementById("entertainment_menu"))
//           }
//           if (e.target.id == "mechtronics_btn") {
//                toggle(document.getElementById("mechatronic_menu"))
//           }
//           if (e.target.id == "menagement_btn") {
//                toggle(document.getElementById("managment_menu"))
//           }
//           if (e.target.id == "civil_btn") {
//                toggle(document.getElementById("civil_menu"))
//           }
//           if (e.target.id == "robotics_btn") {
//                toggle(document.getElementById("robotic_menu"))
//           }
//           if (e.target.id == "citronics_special_btn") {
//                toggle(document.getElementById("citronicsspecial_menu"))
//           }

//           if (e.target.id == "pharma_btn") {
//                toggle(document.getElementById("pharma_menu"))
//           }

//           if (e.target.id == "software_btn") {
//                toggle(document.getElementById("software_menu"))
//           }

//           if (e.target.id == "national_btn") {
//                toggle(document.getElementById("national_menu"))
//           }
//      })
// }


// fetching thte details in the comonnent 
let fetchobj = (obj, margin = 775) => {
     let t = 0;
     secondprice = document.getElementById("secondprice")
     firstprice = document.getElementById("firstprice")
     thirdprice = document.getElementById("thirdprice");
     description = document.getElementById("description")
     rfe = document.getElementById("rprice")
     tittle = document.getElementById("title")
     consolation = document.getElementById('Consolation_prices')

     // setting the document position values
     obj.prizemoney.firstprice == null ? document.getElementById("f_price").style.display = "none" : document.getElementById("f_price").style.display = "block"
     obj.prizemoney.secondprice == null ? document.getElementById("s_price").style.display = "none" : document.getElementById("s_price").style.display = "block"
     obj.prizemoney.thirdprice == null ? document.getElementById("t_price").style.display = "none" : document.getElementById("t_price").style.display = "block"
     obj.prizemoney.thirdprice == null ? document.getElementById("t_price").style.display = "none" : document.getElementById("t_price").style.display = "block"
     obj.prizemoney.c_price == null ? document.getElementById('c_price').style.display = "none" : document.getElementById("c_price").style.display = "block"


     tittle.innerText = obj.tittle;
     description.innerText = obj.description;
     firstprice.innerText = obj.prizemoney.firstprice;
     secondprice.innerText = obj.prizemoney.secondprice;
     thirdprice.innerText = obj.prizemoney.thirdprice;
     rfe.innerText = obj.registrationfee
     consolation = obj.prizemoney.c_price;


     obj.guidelines.forEach(guideline => {
          t++;
          let li = document.createElement("li");
          li.className = "guideline_guideline"
          li.innerText = `${t}.  ${guideline}`
          document.getElementById("guideline").appendChild(li);
     });


     document.getElementById("core1").innerText = obj.cordinator.first;
     document.getElementById("core2").innerText = obj.cordinator.second;
     document.getElementById("core3").innerText = obj.cordinator.third;
     document.getElementById("dynamicfetch").style.top = "120px"
     // document.getElementById("arrow_id").style.display="block";
     document.getElementById("innercontainer_arrow").style.marginTop = `${margin}px`;
     document.getElementById("ham_id").style.zIndex = "1"
     document.getElementById("ham_id").style.backgroundColor = "rgb(0 0 0 / 44%)"
}

// taking the information form the content and supplying object
for (item of document.getElementsByClassName("span_class")) {
     item.addEventListener("click", (e) => {
          id = e.target.id;
          console.log(id)
          body = document.body.style.width;
          // data of Entertainment card
          if (id == "dance_id") {
               document.getElementById("allcore").innerText = "Miss. Pragya bhopche [9098605105] and Mr.  Arjun patidar [9926285954]";
               fetchobj(data.entertainment.dance)
          }
          if (id == "openmic_id") {
               document.getElementById("allcore").innerText = "Miss. Pragya bhopche [9098605105] and Mr.  Arjun patidar [9926285954]";
               fetchobj(data.entertainment.openmic)
          }
          if (id == "bandwar_id") {
               document.getElementById("allcore").innerText = "Miss. Pragya bhopche [9098605105] and Mr.  Arjun patidar [9926285954]";
               fetchobj(data.entertainment.bandwar)
          }

          // data of mechtronics card 
          // converted into the new
          if (id == "cad_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik jaiswal[81200 27119] & Mr. Harsh Pahadiya [83051 80448]";
               fetchobj(data.mechanical.cad)
          }
          if (id == "AutoJunkies_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik jaiswal[81200 27119] & Mr. Harsh Pahadiya [83051 80448]";
               fetchobj(data.mechanical.AutoJunkies)
          }
          if (id == "officeball_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik jaiswal[81200 27119] & Mr. Harsh Pahadiya [83051 80448]";
               fetchobj(data.mechanical.officeball)
          }
          if (id == "switchingpuzzle_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik jaiswal[81200 27119] & Mr. Harsh Pahadiya [83051 80448]";
               fetchobj(data.mechanical.switchingpuzzle)
          }
          if (id == "Sktechimagination_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik jaiswal[81200 27119] & Mr. Harsh Pahadiya [83051 80448]";
               fetchobj(data.mechanical.Sktechimagination)
          }



          // data for management 
          if (id == "snakeladder_id") {
               document.getElementById("allcore").innerText = "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar"
               fetchobj(data.management.snakeladder, 1000)
          }
          if (id == "treasurehunt_id") {
               document.getElementById("allcore").innerText = "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar"
               fetchobj(data.management.treasurehunt, 1000)
          }
          if (id == "meltdown_id") {
               document.getElementById("allcore").innerText = "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar"
               fetchobj(data.management.meltdown, 1000)
          }
          if (id == "bollywood_id") {
               document.getElementById("allcore").innerText = "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar"
               fetchobj(data.management.bollywood, 1000)
          }
          if (id == "sreejan_id") {
               document.getElementById("allcore").innerText = "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar"
               fetchobj(data.management.sreejan, 1000)
          }
          if (id == "blindflod_id") {
               document.getElementById("allcore").innerText = "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar"
               fetchobj(data.management.blindfold, 1000)
          }
          if (id == "dashingfold_id") {
               document.getElementById("allcore").innerText = "Mr. Arpit Sharma , Mr. Harshit Malakar , Mr . Nirmal Patidar"
               fetchobj(data.management.dashingfold, 1000)
          }



          // civil event start
          // asetis
          if (id == "jengablock_id") {
               document.getElementById("allcore").innerText = "MR. Ritik Prajapati and Mr. Ritik Sharma "
               fetchobj(data.civil.jengablock)
          }
          if (id == "arcbridge_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik Prajapati and Mr. Ritik Sharma "
               fetchobj(data.civil.archbridge)
          }
          if (id == "Nirmaan_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik Prajapati and Mr. Ritik Sharma "
               fetchobj(data.civil.Nirmaan)
          }
          if (id == "ttt_id") {
               document.getElementById("allcore").innerText = "Mr. Ritik Prajapati and Mr. Ritik Sharma "
               fetchobj(data.civil.ttt)
          }

          // robotics event start 

          if (id == "roborace_id") {
               document.getElementById("allcore").innerText = "Mr. Ajay bangar [78694 76374] & Mr. Kailash choudhary [95755 42300]";
               fetchobj(data.robotics.roborace, 575)
          }
          if (id == "Electronicjunkyard_id") {
               document.getElementById("allcore").innerText = "Mr. Ajay bangar [78694 76374] & Mr. Kailash choudhary [95755 42300]";
               fetchobj(data.robotics.Electronicjunkyard, 575)
          }
          if (id == "linefollwer_id") {
               document.getElementById("allcore").innerText = "Mr. Ajay bangar [78694 76374] & Mr. Kailash choudhary [95755 42300]";
               fetchobj(data.robotics.linefollower, 575)
          }
          if (id == "pickplace_id") {
               document.getElementById("allcore").innerText = "Mr. Ajay bangar [78694 76374] & Mr. Kailash choudhary [95755 42300]";
               fetchobj(data.robotics.pickandplace, 575)
          }

          // write the above 
          if (id == "ygt_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 600) {
                         fetchobj(data.eship.ygt, 2578)
                    }
                    else {
                         fetchobj(data.eship.ygt, 1740)
                    }
               }
               else {
                    fetchobj(data.eship.ygt, 1500)
               }
               document.getElementById("allcore").innerText = "Mr. Jay Kumar Patidar [97995 75565] & Miss. Mansi Parmar [99933 58603]";
          }
          if (id == "d2d_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 600) {
                         fetchobj(data.eship.d2d, 2578)
                    }
                    else {
                         fetchobj(data.eship.d2d, 1740)
                    }
               }
               else {
                    fetchobj(data.eship.d2d, 1500)
               }

               document.getElementById("allcore").innerText = "Mr. Jay Kumar Patidar [97995 75565] & Miss. Mansi Parmar [99933 58603]";

          }
          if (id == "moneyhist_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 600) {
                         fetchobj(data.eship.moneyhist, 2578)
                    }
                    else {
                         fetchobj(data.eship.moneyhist, 1740)
                    }
               }
               else {
                    fetchobj(data.eship.moneyhist, 1500)
               }

               document.getElementById("allcore").innerText = "Mr. Jay Kumar Patidar [97995 75565] & Miss. Mansi Parmar [99933 58603]";

          }
          // 
          if (id == "pushpa_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 600) {
                         fetchobj(data.eship.pushpa, 2578)
                    }
                    else {
                         fetchobj(data.eship.pushpa, 1740)
                    }
               }
               else {
                    fetchobj(data.eship.pushpa, 1500)
               }
               document.getElementById("allcore").innerText = "Mr. Jay Kumar Patidar [97995 75565] & Miss. Mansi Parmar [99933 58603]";
          }
          if (id == "rlgl_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 600) {
                         fetchobj(data.eship.rlgl, 2578)
                    }
                    else {
                         fetchobj(data.eship.rlgl, 1740)
                    }
               }
               else {
                    fetchobj(data.eship.rlgl, 1500)
               }
               document.getElementById("allcore").innerText = "Mr. Jay Kumar Patidar [97995 75565] & Miss. Mansi Parmar [99933 58603]";
          }

          // pharma events 
          if (id == "pharmainovatsia_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.pharma.pharmainnovatsia, 2175)
                    }
                    else {
                         fetchobj(data.pharma.pharmainnovatsia, 1600)
                    }
               }
               else {
                    fetchobj(data.pharma.pharmainnovatsia)
               }

               document.getElementById("allcore").innerText = "Mr . Aman bundela [8962202886] ";

          }
          if (id == "Modelepharmeceutics_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.pharma.modelpharmaeutique, 2175)
                    }
                    else {
                         fetchobj(data.pharma.modelpharmaeutique, 1600)
                    }
               }
               else {
                    fetchobj(data.pharma.modelpharmaeutique)
               }

               document.getElementById("allcore").innerText = "Mr . Aman bundela [8962202886] ";

          }
          if (id == "PharmaDisenoconceptual_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.pharma.Pharmadisenoconceptual, 2175)
                    }
                    else {
                         fetchobj(data.pharma.Pharmadisenoconceptual, 1600)
                    }
               }
               else {
                    fetchobj(data.pharma.Pharmadisenoconceptual)
               }
               document.getElementById("allcore").innerText = "Mr . Aman bundela [8962202886] ";

          }


          // software event start 
          if (id == "Beatthebug_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.software.Beatthebug, 3400)
                    }
                    else {
                         fetchobj(data.software.Beatthebug, 1600)
                    }
               }
               else {
                    fetchobj(data.software.Beatthebug)
               }

               document.getElementById("allcore").innerText = `Miss Harshita Parmar [74770 84913] & Mr. Aman Kushwa[79743 92752]`;


          }
          if (id == "quizophile_id") {

               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.software.quizophile, 3400)
                    }
                    else {
                         fetchobj(data.software.quizophile, 1600)
                    }
               }
               else {
                    fetchobj(data.software.quizophile)
               }

               document.getElementById("allcore").innerText = `Miss Harshita Parmar [74770 84913] & Mr. Aman Kushwa[79743 92752]`;

          }
          if (id == "simongame_id") {
               // fetchobj(data.software.simongame)


               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.software.simongame, 3400)
                    }
                    else {
                         fetchobj(data.software.simongame, 1600)
                    }
               }
               else {
                    fetchobj(data.software.simongame)
               }

               document.getElementById("allcore").innerText = `Miss Harshita Parmar [74770 84913] & Mr. Aman Kushwa[79743 92752]`;
          }
          if (id == "inomanthan_id") {

               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.software.innomanthan, 3400)
                    }
                    else {
                         fetchobj(data.software.innomanthan, 1600)
                    }
               }
               else {
                    fetchobj(data.software.innomanthan)
               }

               document.getElementById("allcore").innerText = `Miss Harshita Parmar [74770 84913] & Mr. Aman Kushwa[79743 92752]`;



          }
          if (id == "Bestgoogler_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.software.Bestgoogler, 3400)
                    }
                    else {
                         fetchobj(data.software.Bestgoogler, 1600)
                    }
               }
               else {
                    fetchobj(data.software.Bestgoogler)
               }

               document.getElementById("allcore").innerText = `Miss Harshita Parmar [74770 84913] & Mr. Aman Kushwa[79743 92752]`;
          }
          if (id == "codedecode_id") {

               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.software.codedecode, 3400)
                    }
                    else {
                         fetchobj(data.software.codedecode, 1600)
                    }
               }
               else {
                    fetchobj(data.software.codedecode)
               }
               document.getElementById("allcore").innerText = `Miss Harshita Parmar [74770 84913] & Mr. Aman Kushwa[79743 92752]`;
          }
          // nationalquizstart
          if (id == "Nationalquiz_id") {

               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.nationalquiz.NationalQuiz, 3100)
                    }
                    else {
                         fetchobj(data.nationalquiz.NationalQuiz, 1600)
                    }
               }
               else {
                    fetchobj(data.nationalquiz.NationalQuiz, 1500)
               }
               document.getElementById("allcore").innerText = " ";
               let img = document.createElement("img");
               img.className = "exampleimg"
               img.setAttribute("src", "./media/quizexample.png")
               document.getElementById("description").appendChild(img)


          }



          // sports
          if (id == "Boxcricket_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.sports.Boxcricket, 3836)
                    }
                    else {
                         fetchobj(data.sports.Boxcricket, 1961)
                    }
               }
               else {
                    fetchobj(data.sports.Boxcricket, 1500)
               }
               document.getElementById("allcore").innerText = "Miss. Anshika mishara";

          }
          if (id == "chess_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.sports.Chess, 3700)
                    }
                    else {
                         fetchobj(data.sports.Chess, 1961)
                    }
               }
               else {
                    fetchobj(data.sports.Chess, 1500)
               }

               document.getElementById("allcore").innerText = "Miss. Anshika mishara";

          }


          // on the spot 
          if (id == "handleg_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.onthespotevents.handleg, 4100)
                    }
                    else {
                         fetchobj(data.onthespotevents.handleg, 1961)
                    }
               }
               else {
                    fetchobj(data.onthespotevents.handleg, 1500)
               }
               document.getElementById("allcore").innerText = "Mr. Kunal gourav [81209 51155]";
          }
          if (id == "aeroplanetoss_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.onthespotevents.aeroplanetoss, 4100)
                    }
                    else {
                         fetchobj(data.onthespotevents.aeroplanetoss, 1961)
                    }
               }
               else {
                    fetchobj(data.onthespotevents.aeroplanetoss, 1500)
               }

               document.getElementById("allcore").innerText = "Mr. Kunal gourav [81209 51155]";
          }
          if (id == "pubg_id") {

               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.onthespotevents.pubg, 4100)
                    }
                    else {
                         fetchobj(data.onthespotevents.pubg, 1961)
                    }
               }
               else {
                    fetchobj(data.onthespotevents.pubg, 1500)
               }
               document.getElementById("allcore").innerText = "Mr. Kunal gourav [81209 51155]";
          }
          if (id == "browniantennis") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.onthespotevents.browniantennis, 4100)
                    }
                    else {
                         fetchobj(data.onthespotevents.browniantennis, 1961)
                    }
               }
               else {
                    fetchobj(data.onthespotevents.browniantennis, 1500)
               }

               document.getElementById("allcore").innerText = "Mr. Kunal gourav [81209 51155]";

          }
          if (id == "rongoli_id") {

               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.onthespotevents.rangoli, 4100)
                    }
                    else {
                         fetchobj(data.onthespotevents.rangoli, 1961)
                    }
               }
               else {
                    fetchobj(data.onthespotevents.rangoli, 1500)
               }
               document.getElementById("allcore").innerText = "Mr. Kunal gourav [81209 51155]";

          }
          if (id == "sodacanroll_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.onthespotevents.sodacanroll, 4100)
                    }
                    else {
                         fetchobj(data.onthespotevents.sodacanroll, 1961)
                    }
               }
               else {
                    fetchobj(data.onthespotevents.sodacanroll, 1500)
               }

               document.getElementById("allcore").innerText = "Mr. Kunal gourav [81209 51155]";
          }

          // adventrious
          if (id == "roadies_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.adventuious.rodies, 4100)
                    }
                    else {
                         fetchobj(data.adventuious.rodies, 1961)
                    }
               }
               else {
                    fetchobj(data.adventuious.rodies, 1500)
               }
               document.getElementById("allcore").innerText = null;
          }
          // photo graphy
          if (id == "photography_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.photography.photography, 3100)
                    }
                    else {
                         fetchobj(data.photography.photography, 1961)
                    }
               }
               else {
                    fetchobj(data.photography.photography, 1500)
               }
               document.getElementById("allcore").innerText = " Mr. Pranav singh";
          }
          if (id == "reels_id") {
               if (document.body.clientWidth < 1300) {
                    if (document.body.clientWidth < 665) {
                         fetchobj(data.photography.reels, 3100)
                    }
                    else {
                         fetchobj(data.photography.reels, 1961)
                    }
               }
               else {
                    fetchobj(data.photography.reels, 1500)
               }
               document.getElementById("allcore").innerText = "Mr . Pranav singh";
          }
     })
}

let move = () => {
     document.getElementById("dynamicfetch").style.top = "-30000px";
     document.getElementById("guideline").innerHTML = ' ';
     document.getElementById("ham_id").style.backgroundColor = "rgb(0 0 0 / 0%)"
     document.getElementById("ham_id").style.zIndex = "-11"

}
document.getElementById("cross").addEventListener("click", move)
document.getElementById("close").addEventListener("click", move)

