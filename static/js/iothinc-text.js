function decodeText() {
  var text = document.getElementsByClassName("decode-text")[0];

  var state = [];
  for (var i = 0, j = text.children.length; i < j; i++) {
    text.children[i].classList.remove("state-1", "state-2", "state-3");
    state[i] = i;
  }
  var shuffled = shuffle(state);

  for (var i = 0, j = shuffled.length; i < j; i++) {
    var child = text.children[shuffled[i]];
    classes = child.classList;

    var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
    if (classes.contains("text-animation")) {
      setTimeout(firstStages.bind(null, child), state1Time);
    }
  }
}

function firstStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  } else if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
    setTimeout(secondStages.bind(null, child), 100);
  }
}
function secondStages(child) {
  if (child.classList.contains("state-1")) {
    child.classList.add("state-2");
    setTimeout(thirdStages.bind(null, child), 100);
  } else if (!child.classList.contains("state-1")) {
    child.classList.add("state-1");
  }
}
function thirdStages(child) {
  if (child.classList.contains("state-2")) {
    child.classList.add("state-3");
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
decodeText();

setInterval(function () {
  decodeText();
}, 5000);
