import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { ReactTyped } from "react-typed";

// Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-6 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-0.5s">
          {/* <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit   p-4 rounded-2xl">
            <div className="custom-shape-divider-bottom-1764691577">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            
          </div> */}
          <h1 className="text-5xl/tight font-bold mb-6"></h1>
          <p className="text-base/loose mb-6 opacity-50" id="element">
            PT Elang Marine Teknindo is a company engaged in marine vessel
            repair and maintenance services, with a strong commitment to
            quality, timeliness, and workplace safety.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#product"
              className="bg-violet-900 p-4 rounded-2xl hover:bg-emerald-600"
            >
              Our Products
            </a>
            {/* <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Our Services
            </a> */}
          </div>
        </div>
        <img
          // src={DataImage.HeroImage}
          alt="Image maintenance"
          className="w-[400px] md:ml-auto rounded-b-4xl opacity-60 animate__animated animate__fadeInUp animate__delay-1s"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="w-2/3 lg:w-3/4 w-full mx-auto p-7 backdrop-blur-md bg-white/10 rounded-lg shadow-xl"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <img
            src="assets/elangmarine.ico"
            alt="Image"
            className="w-12 rounded-md sm:hidden mb-2 mx-auto block"
            loading="lazy"
          />
          <h1
            className="text-center text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            About Us
          </h1>

          <p className="text-base/loose mb-8">
            Established in Jakarta in 2025, we are here to support the growing
            needs of Indonesia’s maritime industry, particularly in ship repair,
            maintenance, and engineering support services for merchant vessels,
            tugboats, and government vessels. With experienced specialists and a
            professional work system, we are committed to becoming a trusted
            partner for shipyards, vessel operators, and maritime institutions
            across Indonesia.
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
      </div>

      {/* Vision Mission */}
      <div className="vimi mt-32 py-10 gap-4">
        <div className="grid md:grid-cols-2 items-start items-center pt-6 gap-6 ">
          <div
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
          >
            <h1 className="text-2xl text-center font-bold">Vision</h1>
            <p className="text-base/loose w-full">
              To become a leading ship repair service company in Indonesia,
              recognized for reliability, professionalism, and a strong
              commitment to safety and work quality.
            </p>
          </div>
          <div
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
          >
            <h1 className="text-2xl text-center font-bold">Mission</h1>
            <p className="text-base/loose w-full">
              1.To provide ship repair and maintenance services with
              high-quality standards and timely execution.. <br />
              2.To build long-term partnerships with customers based on trust
              and integrity. <br /> 3.To develop the competencies of human
              resources in the field of maritime engineering. <br />
              4.To implement a sustainable occupational safety and environmental
              management system. <br /> 5.To contribute to the growth of the
              national maritime industry.
            </p>
          </div>
        </div>
      </div>
      {/* Vision Mission */}

      {/* company values */}
      <div className="tools mt-32">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Company Values
        </h1>
        <p
          className="xl:w2/5 lg:w2/4 md:w2/3 sm:w3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-once="true"
        >
          Here are some of the company values.
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
      {/* End of About */}

      {/* Swiper */}
      <div className="w-full max-w-4xl mx-auto rounded-[40px] overflow-hidden border border-zinc-700 shadow-xl shadow-zinc-900/60 mt-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl"
        >
          <SwiperSlide>
            <img
              src="/assets/31.jpg"
              className="w-full h-64 object-cover rounded-xl"
              alt="Slide 1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/assets/32.jpg"
              className="w-full h-64 object-cover rounded-xl"
              alt="Slide 2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/assets/33.jpg"
              className="w-full h-64 object-cover rounded-xl"
              alt="Slide 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Swiper */}

      {/* Product */}
      <div className="proyek mt-32 py-10" id="product">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Products
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Our products.
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
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center bm-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Get in touch with us
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
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="nama"
                placeholder="Enter Name"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
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
                Submit
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
