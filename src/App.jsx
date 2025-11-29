import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { ReactTyped } from "react-typed";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-6 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-0.5s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit   p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <ReactTyped
              strings={["jasa perbaikan", "perawatan kapal laut"]}
              typespeed={120}
              backspeed={240}
              loop
            />
            {/* <q>Elang Marine, jasa perbaikan dan perawatan kapal laut</q> */}
          </div>
          <h1 className="text-5xl/tight font-bold mb-6"></h1>
          <p className="text-base/loose mb-6 opacity-50" id="element">
            PT Elang Marine Teknindo adalah perusahaan yang bergerak di bidang
            jasa perbaikan dan perawatan kapal laut, dengan komitmen tinggi
            terhadap kualitas, ketepatan waktu, dan keselamatan kerja.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-emerald-700 p-4 rounded-2xl hover:bg-emerald-600"
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
          className="w-[400px] md:ml-auto rounded-b-4xl opacity-60 animate__animated animate__fadeInUp animate__delay-1s"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="about mt-32 py-10">
        <div
          className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
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
            {/* <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            /> */}
            {/* <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  <span className="text-violet-500"></span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Vision Mission */}
        <div className="vimi mt-32 py-10">
          <div className="grid md:grid-cols-2 items-start items-center pt-6 xl:gap-0 gap-6">
            <div>
              <h1 className="text-2xl text-center font-bold">Visi</h1>
              <p className="text-base/loose w-full">
                Menjadi perusahaan jasa perbaikan kapal terkemuka di Indonesia
                yang dikenal karena keandalan, profesionalisme, dan komitmen
                terhadap keselamatan serta kualitas kerja.
              </p>
            </div>
            <div>
              <h1 className="text-2xl text-center font-bold">Misi</h1>
              <p className="text-base/loose w-full">
                1.Menyediakan layanan perbaikan dan perawatan kapal dengan
                standar mutu tinggi dan tepat waktu. <br />
                2.Membangun kemitraan jangka panjang dengan pelanggan
                berdasarkan kepercayaan dan integritas. <br /> 3.Mengembangkan
                kompetensi sumber daya manusia di bidang teknik maritim. <br />{" "}
                4.Menerapkan sistem manajemen keselamatan kerja dan lingkungan
                yang berkelanjutan. <br /> 5.Berkontribusi terhadap pertumbuhan
                industri maritim nasional.
              </p>
            </div>
          </div>
        </div>
        {/* Vision Mission */}

        {/* tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Nilai-nilai perusahaan
          </h1>
          <p
            className="xl:w2/5 lg:w2/4 md:w2/3 sm:w3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
          >
            Berikut ini beberapa nilai-nilai perusahaan
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End of About */}

      {/* Product */}
      <div className="proyek mt-32 py-10">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Produk
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Produk yang kami miliki.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              {/* image need maintain */}
              {/* <img src={proyek.gambar} alt="Proyek Image" loading="lazy" /> */}
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border text-amber-300 border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                {/* <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-emerald-700 p-3 rounded-lg block border border-zinc-600 hover:bg-emerald-600"
                  >
                    Detail
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Product */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center bm-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari terhubung dengan kami
        </p>

        <form
          action="https://formsubmit.co/firmansahalhadi@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Email"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Nama"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan....."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  );
}

export default App;
