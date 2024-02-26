import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  //const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  //pizzas = []
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          Tasty Pizzas are here
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                // name={pizza.name}
                // ingredients={pizza.ingredients}
                // price={pizza.price}
                // photoName={pizza.photoName}
                // soldOut={pizza.soldOut}
                pizzaObj={pizza}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We will come back soon</p>
      )}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h4>{pizzaObj.name}</h4>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const Hour = new Date().getHours();
  const OpenHours = 8;
  const CloseHours = 22;
  const isOpen = Hour >= OpenHours && Hour <= CloseHours;
  console.log(isOpen);
  // Hour >= OpenHours
  //   ? alert("We are currently open!")
  //   : alert("Sorry we are closed!");
  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order CloseHours={CloseHours} OpenHours={OpenHours} />
        ) : null}
      </footer>
    </div>
  );
};

function Order({ CloseHours, OpenHours }) {
  return (
    <div className="order">
      <p>
        We are from {OpenHours}:00 to {CloseHours}:00 ,So please visit on open
        time or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
