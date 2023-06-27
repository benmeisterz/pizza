// import './App.css'
import './index.css'

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
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  )
}
function Menu() {
  const pizzas = pizzaData
  // const pizzas = []
  const numPizzas = pizzas.length
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzas.map(pizza => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
          ))}
        </ul>
      )
        : <p>We are still working on our menu. Please come back later</p>}
    </main>
  )
}

function Pizza({ pizzaobj }) {
  // if (pizzaobj.soldOut) return null

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaobj.photoName} alt="" />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </div>
    </li>
  )
}

function Header() {
  return <header className='header'>
    <h1>Fast React Pizza Co.</h1>

  </header>

}



function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour openHour />
      ) : (<p>We're happy to serve you between {openHour}:00 and {closeHour}:00.</p>
      )}
    </footer >
  )
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We're open until fromr {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  )
}
export default App
