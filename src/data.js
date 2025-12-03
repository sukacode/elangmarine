import HeroImage from "/assets/33.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/collaboration.png";
import Tools2 from "/assets/tools/quality.png";
import Tools3 from "/assets/tools/safety.png";
import Tools4 from "/assets/tools/partners.png";
import Tools5 from "/assets/tools/innovation.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Integrity",
    ket: "Bekerja dengan jujur dan bertanggung jawab",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Quality",
    ket: "Menempatkan kualitas sebagai prioritas utama",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Safety First",
    ket: "Keselamatan adalah budaya kerja kami",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Teamwork",
    ket: "Kolaborasi kuat dalam setiap proyek",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Innovation",
    ket: "Selalu mencari cara baru untuk meningkatkan efisiensi",
    dad: "500",
  },
];

import Proyek1 from "/assets/33.jpg";
import Proyek2 from "/assets/31.jpg";
import Proyek3 from "/assets/32.jpg";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Ship Repair & Maintenance",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [
      "Hull repair & steel renewal",
      "Machinery overhaul & alignment",
      "Propulsion system maintenance",
      "Pipe fitting & welding works",
    ],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Electrical & Instrumention Services",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [
      "Installation & troubleshooting",
      "Panel control system repair",
      "Lighting and power distribution",
    ],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Marine Fabrication Works",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [
      "Custom steel structure fabrication",
      "Tank, ladder, railing and piping",
    ],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "On-site / Dockside Service",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [
      "Floating dock & dry dock coordination",
      "Mobile repair team for",
      "emergency call",
    ],
    dad: "500",
  },
];
