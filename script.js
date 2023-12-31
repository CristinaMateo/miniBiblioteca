
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


  //general HTML

let body = document.querySelector("body")
let header = document.createElement("header")
let main =document.createElement("main")
let footer =document.createElement("footer")
let nombre =document.createElement("h1")
let t1 = document.createTextNode("Minibiblioteca")


body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)
header.appendChild(nombre)
nombre.appendChild(t1)

//FASE1

let section = document.createElement("section")
main.appendChild(section)



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
 
    let n1 = document.createTextNode("")
    let n2 = document.createTextNode("")
    let n3 = document.createTextNode("")
    let n4 = document.createTextNode("")
    let n5 = document.createTextNode("")
    
    let a = document.createElement("a");
    let aTexto = document.createTextNode("More information");
   


   section.appendChild(article)
   article.appendChild(titulo)
   titulo.appendChild(titulotxt)
   titulotxt.textContent =books[i].title
   article.appendChild(image)
   image.src = books[i].imageLink
   article.appendChild(ul)
   ul.appendChild(li1)
   ul.appendChild(li2)
   ul.appendChild(li3)
   ul.appendChild(li4)
   ul.appendChild(li5)
   ul.appendChild(a)

   li1.appendChild(n1)
   li2.appendChild(n2)
   li3.appendChild(n3)
   li4.appendChild(n4)
   li5.appendChild(n5)
  
   n1.textContent = "Author: " + books[i].author
   n2.textContent="Country: " + books[i].country
   n3.textContent="Language: " + books[i].language
   n4.textContent="Pages: " + books[i].pages
   n5.textContent= "Year: " + books[i].year
  
   a.setAttribute("href", books[i].link);
   a.appendChild(aTexto);
}



//FASE 2 
let segunda = document.createElement("section")
main.appendChild(segunda)

let fase2 = ``

for(let i=0; i<books.length; i++){
 fase2+= ` <article>
        <h3>${books[i].title}</h3>
        <img src= ${books[i].imageLink}>
        <ul>
          <li>Author ${books[i].author}</li>
          <li>Country ${books[i].country}</li>
          <li>Language ${books[i].language}</li>
          <li>Pages ${books[i].pages}</li>
          <li>Year ${books[i].year}</li>
          <a href=${books[i].link}>More information</a>
        </ul>
      </article>`
}
  
    segunda.innerHTML = fase2


  




 




