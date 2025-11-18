import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-6 xl:gap-0 gap-6">
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
          className="w-[400px] md:ml-auto rounded-b-4xl opacity-60"
        />
      </div>

      {/* About */}
      <div className="about mt-32 py-10">
        <div className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Didirikan di Jakarta pada tahun 2025, kami hadir untuk mendukung
            kebutuhan industri maritim Indonesia yang semakin berkembang,
            terutama dalam layanan ship repair, maintenance, dan engineering
            support untuk kapal niaga, kapal tunda, maupun kapal pemerintah.
            Dengan tenaga ahli berpengalaman dan sistem kerja profesional, kami
            bertekad menjadi mitra terpercaya bagi perusahaan galangan, operator
            kapal, dan instansi maritim di seluruh Indonesia.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
