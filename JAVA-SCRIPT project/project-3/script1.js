function generate(){
    var quotes = {
      "— carol Burnett":
        "When you have a dream, you've got to grab it and never let go.",
        "— Audrey Hepburn":
     "Nothing is impossible. The word itself says 'I'm possible!",
       "— Alexander the Great":
     ".There is nothing impossible to they who will try.",
     "— Michael Altshuler":
     "The bad news is time flies. The good news is you're the pilot.",
     "— Walt Whitman":
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
     "— Duchess Meghan":
     "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box"
    }
    var authors = Object.keys(quotes);
    // console.log(authors);
    var author =authors[Math.floor(Math.random()*authors.length)]
    // console.log(author);
    var qute = quotes[author];
    console.log(qute);

    document.getElementById("quote").innerHTML = qute;
    document.getElementById("author").innerHTML = author;
}