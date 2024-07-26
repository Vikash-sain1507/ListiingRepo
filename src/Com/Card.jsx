import React from 'react';


const cardData = [
  {
    id: 1,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGSVS1Eadfa9yUKt4DosgaFueTpiPiFdGtA&s",
    title: "Card title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: 2,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_FZ17Swos64Xi1u3bArlZAlvy4oN396ZQUBtmoSN65djaSMNwiAPG4YRZ8uAhMJH_Lc&usqp=CAU",
    title: "Card title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: 3,
    
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzGHA-EBTfH18FW9-S0PW9GeW_kRvkZqPXuhDs51O81wZrBIHHaXNbchmyVfXShH6VpA&usqp=CAU",
    title: "Card title 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: 4,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpXBkhy8-WPuVSnXoBtLW8J5TK970kkYt_EeuJW24coCO_1FthzOZS5c_AMgIaO5NvHU&usqp=CAU",
    title: "Card title 4",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: 5,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhZM-jAaYNE7uv_ZvG6EAudcAcMlpJo4RXmh3hFwCdijywB55eVu8UvsnvOwZelyVlwU&usqp=CAU",
    title: "Card title 5",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: 6,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKWBkshS0VVDCA0-trR0iz-TSI9EoKhrs8U5uVgkAitV5HFJTEovF2jMeS81e1iNKW1w&usqp=CAU",
    title: "Card title 6",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: 7,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_FZ17Swos64Xi1u3bArlZAlvy4oN396ZQUBtmoSN65djaSMNwiAPG4YRZ8uAhMJH_Lc&usqp=CAU",
    title: "Card title 5",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  },
  {
    id: 8,
    imgSrc: "https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_1280.jpg",
    title: "Card title 6",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#"
  }
];

function Card() {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",marginLeft:"100px"}}>
      {cardData.map((card) => (
        <div className="card" style={{ width: "18rem", marginTop: "20px" }}>
          <img src={card.imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href={card.link} className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
