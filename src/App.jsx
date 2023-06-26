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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map(pizza => (
          // <Pizza name={pizza.name} photoName={pizza.photoName} />
          <Pizza pizzaobj={pizza} />
        ))}
      </div>

      {/* <Pizza
        name='Pizza Spinaci'
        ingredient='Tomato, mozarella, spinach, and ricotta cheese'
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient='Tomato, mozarella, spinach, and ricotta cheese'
        photoName="pizzas/funghi.jpg"
        price={10}
      /> */}

    </main>
  )
}

function Pizza({ pizzaobj }) {
  return (
    <div className='pizza'>
      <img src={pizzaobj.photoName} alt="" />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.price}</span>
      </div>
    </div>
  )
}

function Header() {
  return <header className='header'>
    <h1>Fast React Pizza Co.</h1>

  </header>

}


// function Pizza() {
//   return (
//     <div className='pizzas'>

//       <ul>{pizzaData.map((i) =>
//         <li className='pizza' key={i.name}>
//           <img src={i.photoName} />
//           <b>{i.name}</b>
//           {i.ingredients} <br />
//           ${i.price}</li>)}</ul>
//     </div>
//   )
// }
function Footer() {
  const hour = new Date().getHours()
  const openHour = 20
  const closeHour = 22

  if (hour >= openHour && hour <= closeHour) {
    {
      <p>
        "We are currently open"
      </p>
    }
  } else {
    <p>
      "We are currently closed"
    </p>
  }


  return <footer className='footer'>
    {new Date().toLocaleTimeString()}. We're currently open
  </footer>
}
export default App
