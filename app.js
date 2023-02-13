//Här är en array med objekt.
//Arrayen representerar en varukorg på en shoppingsajt.
//Varje objekt i arrayen representerar en produkt.
const cart = [
  // hak-parentes för att definiera en array
  {
    productId: 1,
    productImage: "images/product_xlarge_jordans.jpg",
    name: "Jordan Brand Jordan 5 Retro",
    price: 2249,
    quantity: 1,
  }, // ett komma mellan varje produkt eftersom det är en array.
  {
    productId: 2,
    productImage: "images/product_xlarge_asics.jpg",
    name: "ASICS SportStyle Gel-Venture 6",
    price: 899,
    quantity: 1,
  },
  {
    productId: 3,
    productImage: "images/product_xlarge_socks.jpg",
    name: "Sport Socks",
    price: 149,
    quantity: 2,
  },
]

// Här hämtas en referens till <div id="shopping-cart-container">
// och läggs i variabeln shoppingCartContainer
let shoppingCartContainer = document.getElementById("shopping-cart-container")

/* ------------------ Loop för lösning med produktnamn. ----------------- */

/* 
  Här är en loop som går igenom alla produkter i arrayen cart.
  Den skriver ut alla produktnamn i shoppingCartContainer.
*/
/*
cart.forEach(function (product) {
  // Här är en rad soshoppingCartContainerm skriver ut produktens namn i konsollen.
  // Öppna konsollen i webbläsaren (med t.ex. Shift + CTRL + J) för att se utskrifterna.
  console.log(product.name)

  // Här läggs namnen till i shoppingCartContainer genom att lägga ihop
  // produktnamnet med det som redan ligger i .innerText
  shoppingCartContainer.innerText += " " + product.name

})
*/

/* ------------------ Loop för lösning med DIV. ----------------- */
/*
cart.forEach(function (product) {
  // Här är en rad som skriver ut produktens namn i konsollen.
  // Öppna konsollen i webbläsaren (med t.ex. Shift + CTRL + J) för att se utskrifterna.
  console.log(product.name)

  // Här används insertAdjacentHTML för att 
  // lägga in en <div> med produktinformation sist (längst ned) 
  // i shoppingCartContainer.
  // En "template string" används för att göra en sträng med HTML.
  shoppingCartContainer.insertAdjacentHTML("beforeend",
    `<div>   
      <img class="product-image" src="${product.productImage}"> 
      Namn: ${product.name},
      Pris: ${product.price}, 
      Antal: ${product.quantity}
      <button class="remove">Ta bort</button>
    </div>`
  )

})
*/

/* ------------------ Kod för lösning med tabell ------------------ */

// De här två raderna behövs för lösning med tabell
let table = document.createElement("table") // Skapar ett tabell element
// Sedan läggs det in en tabellrad med "tabell-headings"
table.insertAdjacentHTML(
  "afterbegin",
  "<tr><th>Bild</th><th>Produkt</th><th>Pris</th><th>Antal</th><th>Totalt</th><th></th></tr>"
)

let totalPrice = 0 // den här variabeln används för att summera totala priset.

for (let index = 0; index < cart.length; index++) {
  const product = cart[index]
  // Här är en rad som skriver ut produktens namn i konsollen.
  // Öppna konsollen i webbläsaren (med t.ex. Shift + CTRL + J) för att se utskrifterna.
  console.log(product.name)

  // Här skapas en tabellrad för varje produkt.
  // De läggs in i variabeln table (ett element) som skapats längre upp, innan loopen.
  // När loopen är klar läggs table in i DOM:en.
  table.insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td><img class="product-image" src="${product.productImage}"></td>
      <td>${product.name}</td>
      <td>${product.price} kr</td> 
      <td>${product.quantity}</td>
      <td>${product.quantity * product.price} kr</td>
      <td><button class="remove">Ta bort</button></td>
    </tr>`
  )

  totalPrice = totalPrice + product.quantity * product.price
}

console.log("Totalt pris", totalPrice)
table.insertAdjacentHTML(
  "beforeend",
  `<tr>
    <td></td>
    <td></td>
    <td></td> 
    <td></td>
    <td>${totalPrice} kr</td>
    <td></td>
  </tr>`
)

// Här läggs tabellen table (ett element) in i shoppingCartContainer med metoden .append()
// Det är först nu den läggs in i DOMen och blir synlig i webbläsaren.
shoppingCartContainer.append(table)

// Extra funktionalitet. Eventlyssnare för Ta bort-knapparna

const removeButtons = document.getElementsByClassName("remove")
for (let index = 0; index < removeButtons.length; index++) {
  const button = removeButtons[index]

  button.addEventListener("click", function (event) {
    console.log("Klickade knappen: ", event.target)

    // Hitta den tabellrad som knappen ligger på
    const tableRow = event.target.parentElement.parentElement
    console.log("Tabellraden: ", tableRow)

    // Ta bort raden
    tableRow.remove()
  })
}
