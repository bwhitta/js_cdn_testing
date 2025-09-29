function incrementScoreEvent() {
  score++;
}
function halveScoreEvent() {
  console.log("halved score to " + score/2);
  score = Math.ceil(score/2);
}

function updateScoreObjects() {
  if (score > scoreObjects.length) {
    // Create needed objects
    const objectsToCreate = score - scoreObjects.length;
    for (let i = 0; i < objectsToCreate; i++) {
      createScoreObject();
    }
  }
  else if (score < scoreObjects.length) {
    // Destroy excess objects
    const objectsToDestroy = scoreObjects.length - score;
    console.log("Destroying " + objectsToDestroy + " objects.");
    for (let i = 0; i < objectsToDestroy; i++) {
      scoreObjects.pop().remove();
    }
  }
}
function createScoreObject() {
  let scoreObject = document.createElement("div");
  scoreObjectsHolder.appendChild(scoreObject);
  scoreObject.classList.add("score-object");
  scoreObjects.push(scoreObject);
  console.log("Created object");
}

function tick() {
  scoreValue.textContent = score;
  
  updateScoreObjects();
  
  // Repeat each frame
  requestAnimationFrame(tick);
}

const scoreValue = document.getElementById("score-value");
let score = 0;

const incrementButton = document.getElementById("increment-button");
incrementButton.addEventListener("click", incrementScoreEvent);
const halveScoreButton = document.getElementById("halve-score-button");
halveScoreButton.addEventListener("click", halveScoreEvent);


const scoreObjectsHolder = document.getElementById("score-objects-holder");
let scoreObjects = []

// Start the game loop
requestAnimationFrame(tick);
