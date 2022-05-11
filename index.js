//const back = document.createElement ("img");
        //back.classList = "back"
        //back.setAttribute('src', './img/cardBack.jpg');

const section = document.querySelector("section");

const getData = () =>[
        {img: "./img/theArrow.jpg", id:1, name:"Arrow card"},
        {img: "./img/theDark.jpg", id:2, name: "The dark card"},
        {img: "./img/theFlower.jpg", id:3, name:"The flower card"},
        {img: "./img/theLittle.jpg", id:4, name:"The little card" },
        {img: "./img/theMirror.jpg", id:5, name:"The mirror card"},
        {img: "./img/theWood.jpg", id:6, name:"The wood card"},
        {img: "./img/theLight.jpg", id:7, name:"The light card"},
        {img: "./img/theArrow.jpg", id:8, name:"Arrow card"},
        {img: "./img/theDark.jpg", id:9, name: "The dark card"},
        {img: "./img/theFlower.jpg", id:10, name:"The flower card"},
        {img: "./img/theLittle.jpg", id:11, name:"The little card" },
        {img: "./img/theMirror.jpg", id:12, name:"The mirror card"},
        {img: "./img/theWood.jpg", id:13, name:"The wood card"},
        {img: "./img/theLight.jpg", id:14, name:"The light card"},
        {img: "./img/theSnow.jpg", id:15, name: "The snow card"},
        {img:"./img/theSnow.jpg", id:16, name: "The snow card"}
    ];

    //ordenar las cartas 

    const randomize = () =>{
    const cardData = getData();
    console.log(cardData); 
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    };

//generar las cartas

const cardGenerator = () => {
    const cardData = randomize();

    const cards = document.querySelectorAll(".card");
    cardData.forEach((item) => {
    const card = document.createElement("div");
    const front = document.createElement("img");
    const back = document.createElement("img");

    card.classList = "card";
    front.classList = "front";
    back.classList = "back";

    front.src = item.img;
    back.setAttribute('src', './img/cardBack.jpg');
    card.setAttribute("name", item.name);

    section.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', (e) =>{
        card.classList.toggle('toggleCard');
        checkCards(e);
    })
    });
    
};

const checkCards = (e) =>{
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    console.log(flippedCards);

    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else{
            console.log("not match!");
            flippedCards.forEach ((card) => {
                card.classList.remove("flipped");
                setTimeout(()=> card.classList.remove("toggleCard"), 1000);
            });
            //playerTries--;
            //playerTriesCount.textContent = playerTries;
        }
    }

    /*const restart = () =>{
        let cardData = randomize();
        let front = document.querySelectorAll(".front");
        let cards = document.querySelectorAll(".card");
        cardData.forEach((item, index) => {
            cards[index].classList.remove("toggleCard");
        })
    } */
}

cardGenerator();

