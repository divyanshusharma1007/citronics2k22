class cit {
     a = () => {
          let b = () => {
               let utter = new SpeechSynthesisUtterance();
               utter.lang = 'hi-IN';
               utter.rate = 0.8;
               utter.pitch = 1;
               utter.text = 'namaste aap kaa citronics me swagat hai !';
               window.speechSynthesis.speak(utter);
          }
          let l = () => {
               console.log("accha mamu bnya")
          }

          return { fun: b, fun2: l }
     }
}
class N {

     say() {
          let ob = new cit();
          return { fun: ob.a().fun() };
     }
}
let obj = new N();
let something = () => {

     return obj.say();
}
//something()
