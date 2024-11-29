import Gallery from "./components/Gallery"


function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 p-4 text-white">

        <h1 className="text-5xl text-center tracking-wider font-semibold mb-8">React & Axios Gallery</h1>
        <div className="mt-8 ">
          <Gallery />
        </div>

      </div >
    </>
  )
}

export default App
