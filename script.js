(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let i in names) {
    var firstLetter = names[i].charAt(0)
  
    if (firstLetter.toLowerCase() == "j") {
      byeSpeaker.speak(names[i])
    } else {
      helloSpeaker.speak(names[i])
    }
  }
})()
