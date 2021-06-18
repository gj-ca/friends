// ask for json
// ask for text
// ask for html

function enableAndAssign(button, list, name) {
  button.disabled = false
  // should probably set data-list as an attribute in the html
  // instead of applying it here
  // but cbf
  button.setAttribute("data-list", list) 
  button.setAttribute("data-name", name) 
}

function reApplyListeners(button) {
  button.removeEventListener("click", addToList)
  button.addEventListener("click", addToList)
}



function addToList(event) {
  console.log(event.target)
  const ul = document.getElementById(event.target.dataset.list)
  ul.append(createUserElement("li", event.target.dataset.name))

}

function createUserData(data) {
  const userDataDiv = document.querySelector("#user-data")
  userDataDiv.innerHTML = ""
  const {name, dob, gender, location} = data.results[0] 
  userDataDiv.append(
    createUserElement("h2", `My name is ${name.first}`), 
    createUserElement("p", `I am a ${dob.age} year old ${gender}, born in ${location.country}`)
    )
}

function createUserElement(elementType, innerText) {
  const element = document.createElement(elementType)
  element.innerText = innerText
  return element
}

const button = document.querySelector("#getUser")
button.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(jsonData => {
      createUserData(jsonData)
      const {name} = jsonData.results[0] 
      const friendButton = document.querySelector("#friendButton")
      const enemyButton = document.querySelector("#enemyButton")
      enableAndAssign(friendButton, "friendList", name.first)
      enableAndAssign(enemyButton, "enemyList", name.first)
      reApplyListeners(friendButton)
      reApplyListeners(enemyButton)
    })
    .catch(error => console.log(error))
})