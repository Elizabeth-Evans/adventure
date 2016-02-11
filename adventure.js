var confirmation = confirm(
  "Welcome to the Recycling Adventure Game!! Are you ready? I am! Let's do this!!"
);
var answer = prompt("Do you think it's cool to recycle? yes or no or maybe");
if (answer === "yes") {
  alert("Awesome! You are beautiful, smart, and strong!");
  var answer = prompt(
    "Let's test your knowledge.... Does an aluminum beer can go in (a) the trash can or (b) the recycling bin? a or b"
  );
  if (answer === "b") {
    alert("You continue to blow my mind!! Let's try another!");
    var answer = prompt(
      "Does a dirty diaper go in (a) the trash can or (b) the recycling bin? a or b"
    );
    if (answer === "a") {
      alert(
        "You're right again! You must be the most popular person in the world! Let's do another!"
      );
      var answer = prompt(
        "Does food go in (a) the trash can or (b) the recycling bin? a or b");
      if (answer === "a") {
        alert(
          "You are the most wonderfu person in the whole world! I love you! Everyone loves you! You win the game! You win life! Thank you...now please go away"
        );
      } else {
        alert("Oh come on! You know the answer...it's a! Go back and chose a!!");
        var answer = prompt(
          "Does food go in (a) the trash can or (b) the recycling bin? a or b"
        );
        if (answer === "a") {
          alert(
            "You are the most wonderful person in the whole world! I love you! Everyone loves you! You win the game! You win life! Thank you...now please go away"
          );
        } else {
          alert(
            "Really?? I gave you the answer!!!! I'm done with you! Go away!!!"
          )
        }
      }
    } else {
      alert("Seriously!!?? Go do 10 push ups and try again");
      var answer = prompt(
        "Does a dirty napkin go in (a) the trash can or (b) the recycling bin? a or b"
      );
      if (answer === "a") {
        alert("Yes! You are a genius! Go away and teach you're friends!");
      } else {
        alert(
          "Umm...NO! Go eat the dirty napkin you put in the recycling bin!!!"
        );
      }
    }
  } else {
    alert(
      "boooooooo! Go take a lap! .....did you take a lap? Whatever. Let's keep going!"
    );
    var answer = prompt("Should you put babies in the recylcing bin? yes or no");
    if (answer === "yes") {
      alert("Ewwwww! I don't like you! Go away!!");
    } else {
      alert(
        "Glad to know you have some since. Why don't you refresh the browser and give it another go!"
      )
    }
  }
} else if (answer === "maybe") {
  alert("Maybe??!! I'm mad at you, but I'm going to give you another chance.");
  var answer = prompt("Recycling...cool? yes or no");
  if (answer === "yes") {
    alert("Now you're getting it! Let's keep going!");
      var answer = prompt("Do coffee grounds go in the (a) the trash can or (b) the recycling bin? a or b");
        if (answer ==="a") {
          alert("Nice work! Let's do some more!");
            var answer= prompt("Do candy wrappers go in (a) the trash can or (b) the recycling bin? a or b");
              if (answer ==="a") {
                alert("Now you're on the right track! Go take a nap and come back later ready to dominate the game!");
              }else{ "Are you messing with me? Well, I'll mess back with you! You can start the game over! Bye!"}
        }else{"Are you messing with me? Well, I'll mess back with you! You can start the game over! Bye!"}
  } else {
    var answer = prompt("Please tell me you were joking! Were you joking?? yes or no");
    if (answer === "no"){
    alert("I'm through with you...AND I HEARD YOU EAT DRYER LINT!");
  }else{
    alert("I'm proud of you for admitting that. Give yourself a hig and take a nap. xoxo");
  }
}
} else if (answer === "no") {
  alert("Everyone knows that your feet stink");
  var answer = prompt("Do you enojoy being a jerk? yes or no");
  if (answer === "yes") {
    alert("Ok, cool. I'll leave you alone then.");
  } else {
    var answer = prompt(
      "Then let's work on your recycling knowledge. It will help you be less of a jerk...btw. :) You ready? yes or no"
    );
    if (answer === "no") {
      alert("Fine then! Bye!");
    } else {
      var answer = prompt(
        "Yay!! Here we go! Should dirty paper towels go in (a) the trash can or (b) the recycling bin? a or b"
      )
      if (answer === "a") {
        alert(
          "That's what I'm talking about! Woohoo! I knew you had it in you! Ok, now refresh the page and retry the game!! You can do it!!"
        )
      } else {
        alert(
          "I'm mad at you. I tried to work with you, but I'm totes over it. Go away!"
        )
      }
    }
  }
}
