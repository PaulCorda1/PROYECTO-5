
import Card from "./componentes/Card/Card"
import Header from "./componentes/Header/Header"
import './App.css'
import products from "./data/products"


function  App() {
  const productsList = products.map (v => {
    return <Card photo={v.imagen} price={v.precio} title={v.nombre} description={v.categoria} />
  })

  return (
    <div className="conteiner">
      <div className="conteiner0">
      <Header />
      </div>
      <div className="container1">
       {productsList}
      </div>
    </div>
  )
}

export default App