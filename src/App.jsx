import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit   p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Elang Marine, jasa perbaikan dan perawatan kapal laut</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6"></h1>
          <p className="text-base/loose mb-6 opacity-50">
            PT Elang Marine Teknindo adalah perusahaan yang bergerak di bidang
            jasa perbaikan dan perawatan kapal laut, dengan komitmen tinggi
            terhadap kualitas, ketepatan waktu, dan keselamatan kerja.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Our Products
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Our Services
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Image"
          className="w-[400px] ml-auto"
        />
      </div>
    </>
  );
}

export default App;
