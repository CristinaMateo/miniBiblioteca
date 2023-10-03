
const books = [
  {
    "author": "Chinua Achebe", //n1
    "country": "Nigeria",//n2
    "imageLink": "images/things-fall-apart.jpg", //img
    "language": "English",//n3
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",//n4
    "pages": 209,//n5
    "title": "Things Fall Apart", //titulotxt
    "year": 1958//n6
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }]


//FASE1

let section = document.createElement("section")

for (let i=0;i<books.length;i++){
    let article = document.createElement("article")
    let titulo = document.createElement("h3")
    let titulotxt = document.createTextNode("")
    let image = document.createElement("img")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let li5 = document.createElement("li")
    let li6 = document.createElement("li")
    let n1 = document.createTextNode("")
    let n2 = document.createTextNode("")
    let n3 = document.createTextNode("")
    let n4 = document.createTextNode("")
    let n5 = document.createTextNode("")
    let n6 = document.createTextNode("")


   section.appendChild(article)
   article.appendChild(titulo)
   titulo.appendChild(titulotxt)
   titulotxt.textContent =books[i].title
   article.appendChild(image)
   article.appendChild(ul)
   ul.appendChild(li1)
   ul.appendChild(li2)
   ul.appendChild(li3)
   ul.appendChild(li4)
   ul.appendChild(li5)
   ul.appendChild(li6)
   li1.appendChild(n1)
   li2.appendChild(n2)
   li3.appendChild(n3)
   li4.appendChild(n4)
   li5.appendChild(n5)
   li6.appendChild(n6)
   n1.textContent =books[i].author
   n2.textContent=books[i].country
   n3.textContent=books[i].language
   n4.textContent=books[i].link
   n5.textContent=books[i].pages
   n6.textContent=books[i].year
}




