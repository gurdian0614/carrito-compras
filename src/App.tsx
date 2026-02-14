import { Item } from "./components/Item"

function App() {
 return (
    <>
      <main className="min-h-screen bg-gary-100 flex justify-center p-6">
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 space-y-6">
          <header className="border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              🛒 Mi carrito
            </h1>
            <p className="text-sm text-gray-500">
              Revisa tus productos antes de pagar
            </p>
          </header>
          
          <div className="space-y-4">
            <Item nombreProducto="Coca Cola 3 Litros" />
            <Item nombreProducto="Zambos" cantidad={10} />
            <Item nombreProducto="Jugo de Naranja" cantidad={5} />
          </div>

          <footer className="border-t pt-4 flex justify-betwen items-center" />
        </section>
      </main>
    </>
  )
}

export default App
