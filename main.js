
const cards = [
   {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      id: "card_1",
      price: 200
   },
   {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      id: "card_2",
      price: 200
   },
   {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      id: "card_3",
      price: 200
   },
   {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      id: "card_4",
      price: 200
   },
   {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      id: "card_5",
      price: 200
   },
   {
      background: "https://assets.cntraveller.in/photos/6384b156bb1325328a451eb3/1:1/w_984,h_984,c_limit/bizza-lead.jpg",
      id: "card_6",
      price: 200
   },
]
function new_element(id, type, parent_name, class_name) {
   const element = document.createElement(type);
   document.getElementById(parent_name).appendChild(element);
   element.id = id ;
   element.className = type +" _"+class_name  ;
};
cards.forEach((card) => {

   new_element(card.id, "div", "main","");
   document.getElementById(card.id).style.backgroundImage = `url(${card.background})`;
   new_element(card.id+"name", "p", card.id,"name");
   document.getElementById(card.id+"name").innerHTML = "name"+ " : "+ card.id;
   new_element(card.id+"price", "p", card.id,"price");
   document.getElementById(card.id+"price").innerHTML = "price" + " : "+ card.price;
});

