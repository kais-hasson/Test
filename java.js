const cards = [
    {
       background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
       name: "card_1",
       price: 200
    },
    {
       background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
       name: "card_2",
       price: 200
    },
    {
       background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
       name: "card_3",
       price: 200
    },
    {
       background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
       name: "card_4",
       price: 200
    },
    {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      name: "card_5",
      price: 200
   },
   {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      name: "card_6",
      price: 200
   },]
    cards.forEach((card) => {
    document.getElementById("main").innerHTML+=
    `<div class="div" style="background-image:url(${card.background})">
    <p class="p _name">name : ${card.name}</p>
    <p class="p _price">price : ${card.price}</p>
    </div>`
    });