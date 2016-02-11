var confirmation = confirm(
  "Welcome to the Recycling Adventure Game!! Are you ready? I am! Let's do this!!"
);
var answer = prompt("Do you think it's cool to recycle? yes or no or maybe");
if (answer === "yes") {
  alert("Awesome! You are beautiful, smart, and strong!");
  var answer = prompt(
    "Let's test your knowledge.... Does an aluminum beer can go in (a) the trash can or (b) the recycling bin or (c) idk? a, b, or c"
  );
  if (answer === "b") {
    alert("You continue to blow my mind!! Let's try another!");
    var answer = prompt(
      "Does a dirty diaper go in (a) the trash can or (b) the recycling bin or (c) the toilet? a, b, or c"
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
    } else if (answer === "b") {
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
    } else if (answer === "c") {
      alert("So you think you're funny... Ok, fine. Let's keep going.");
      var answer = prompt(
        "What do you like better... (a) the trash can or (b) the recycling bin or (c) the toilet? a, b, or c"
      );
      if (answer === "a") {
        alert(
          "That's cool! Please go check and make sure there are no recyclables in it! Thanks, hun! Bye!"
        );
      } else if (answer === "b") {
        alert(
          "That's cool! Please go check to make sure there's no trash in it! Toodles!"
        );
      } else if (answer === "c") {
        alert(
          "I get it. The toilet is a useful thing. But really, it's your favorite? I think you should go outside and think about your decision. I'll be here when you're ready. Bye."
        );
      }
    }
  } else if (answer === "a") {
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
  } else if (answer === "c") {
    alert(
      "Ok. Let's focus....aluminum can....is it recyclable.....if so.....it goes in the recycling bin...hint...hint. Ok, let's try again!"
    );
    var answer = prompt(
      "Does an aluminum beer can go in (a) the trash can or (b) the recycling bin? a or b"
    );
    if (answer === "b") {
      alert("You continue to blow my mind!! Let's try another!");
      var answer = prompt(
        "Does a dirty diaper go in (a) the trash can or (b) the recycling bin or (c) the toilet? a, b, or c"
      );
      if (answer === "a") {
        alert(
          "You're right again! You must be the most popular person in the world! Let's do another!"
        );
        var answer = prompt(
          "Does food go in (a) the trash can or (b) the recycling bin? a or b"
        );
        if (answer === "a") {
          alert(
            "You are the most wonderfu person in the whole world! I love you! Everyone loves you! You win the game! You win life! Thank you...now please go away"
          );
        } else {
          alert(
            "Oh come on! You know the answer...it's a! Go back and chose a!!"
          );
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
            );
          }
        }
      }
    } else {
      alert("Oh my! You are really trying my nerves! I need a breather. Bye!")
    }
  }
} else if (answer === "maybe") {
  alert("Maybe??!! I'm mad at you, but I'm going to give you another chance.");
  var answer = prompt("Recycling...cool? yes, no, or idk");
  if (answer === "yes") {
    alert("Now you're getting it! Let's keep going!");
    var answer = prompt(
      "Do coffee grounds go in the (a) the trash can or (b) the recycling bin? a or b"
    );
    if (answer === "a") {
      alert("Nice work! Let's do some more!");
      var answer = prompt(
        "Do candy wrappers go in (a) the trash can or (b) the recycling bin? a or b"
      );
      if (answer === "a") {
        alert(
          "Now you're on the right track! Go take a nap and come back later ready to dominate the game!"
        );
      } else {
        "Are you messing with me? Well, I'll mess back with you! You can start the game over! Bye!"
      }
    } else {
      "Are you messing with me? Well, I'll mess back with you! You can start the game over! Bye!"
    }
  } else if (answer === "no") {
    var answer = prompt(
      "Please tell me you were joking! Were you joking?? yes or no");
    if (answer === "no") {
      alert("I'm through with you...AND I HEARD YOU EAT DRYER LINT!");
    } else {
      alert(
        "I'm proud of you for admitting that. Give yourself a hig and take a nap. xoxo"
      );
    }
  } else if (answer === "idk") {
    var answer = prompt(
      "What else don't you know about? (a) Cool stuff, (b) Nail Polish, (c) Justin Timberlake? a, b, or c"
    );
    if (answer === "a") {
      var answer = prompt(
        "Awww, I'm sorry. Would you rather (a) keep playing or (b) go cry a little? a or b"
      );
      if (answer === "a") {
        alert("I'm Proud of you!");
        var answer = prompt(
          "Ok. back to recycling... Do plastic bottles got in (a) the trash can or (b) the recycling bin? a or b"
        );
        if (answer === "b") {
          alert(
            "Totally awesome work, but I feel like you should probably go and learn about Cool Stuff, so go google cool stuff and BYE!"
          );
        } else {
          alert("Wrong! Go take a time out! Bye!");
        }
      } else if (answer === "b") {
        var answer = prompt(
          "I'm sorry. Let's talk about something fun! Nail Polish! What do you think...(a) glitter or (b) no glitter??"
        );
        if (answer === "a") {
          alert("Nice choice! I love glitter! Go paint your nails! Bye!");
        } else {
          alert("I'm mad at you now. Maybe you should go cry a little. Bye!");
        }
      }
    } else if (answer === "b") {
      var answer = prompt(
        "I'm sorry. Let's talk about something fun! Nail Polish! What do you think...(a) glitter or (b) no glitter??"
      );
      if (answer === "a") {
        alert("Nice choice! I love glitter! Go paint your nails! Bye!");
      } else {
        alert("I'm mad at you now. Maybe you should go cry a little. Bye!");
      }
    } else if (answer === "c") {
      var answer = prompt(
        "JT! JT is the man! Do you think he's an awesome dancer? (a)yes or (b)no"
      );
      if (answer === "a") {
        alert(
          "You are a beautiful genius!! You should treat yourself to some JT videos. Bye!"
        );
      } else {
        alert("You're not my friend. I don't want to talk to you anymore!!");
      }
    }
  }
} else if (answer === "no") {
  alert("Everyone knows that your feet stink");
  var answer = prompt("Do you enojoy being a jerk? yes or no or poop");
  if (answer === "yes") {
    alert("Ok, cool. I'll leave you alone then.");
  } else if (answer === "no") {
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
  } else if (answer === "yes") {
    var answer = prompt(
      "really??!! Ok, Let's do this! You ready? yes or no or poop");
    if (answer === "yes") {
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
    } else if (answer === "no") {
      var answer = prompt("Ugh! Really? Are you sure? yes or no");
      if (answer === "yes");
      alert(
        "I'm mad at you. I tried to work with you, but I'm totes over it. Go away!"
      );
    } else if (answer === "poop"){
      alert(
        "POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP Ok bye!"
      );
    }
  } else if (answer === "poop") {
    alert(
      "POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP POOP Ok bye!"
    );
  }
}
