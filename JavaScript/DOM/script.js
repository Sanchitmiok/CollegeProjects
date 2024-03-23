let elem = document.createElement('p')
elem.className = "new"
elem.innerHTML = "i'm newly inserted elemnet"

let add = document.getElementById("good")

// add.append(elem) => last 
// add.prepend(elem) => first
// add.before(elem)
// add.after(elem)
// add.replaceWith(elem)
// add.remove()
add.insertAdjacentHTML("afterbegin","afterbegin  ")
add.insertAdjacentHTML("afterend","afterend  ")
add.insertAdjacentHTML("beforebegin","beforebegin  ")
add.insertAdjacentHTML("beforeend","beforeend  ")

