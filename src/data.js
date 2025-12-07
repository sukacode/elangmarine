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
    ket: "To work with honesty and responsibility.",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Quality",
    ket: "To place quality as the top priority.",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Safety First",
    ket: "Safety is our work culture and core principle.",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Teamwork",
    ket: "Strong collaboration in every project.",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Innovation",
    ket: "Always seeking new ways to improve efficiency.",
    dad: "500",
  },
];

import Proyek1 from "/assets/tools/optimizing.png";
import Proyek2 from "/assets/tools/engineering.png";
import Proyek3 from "/assets/tools/helmet.png";
import Proyek4 from "/assets/tools/maintenance.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Ship Repair & Maintenance",
    desk: "Services that cover all activities related to the repair, inspection, and maintenance of vessels to ensure they operate optimally, safely, and in accordance with maritime operational standards",
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
    nama: "Electrical & Instrumention services",
    desk: "Our services include a wide range of solutions designed to ensure the reliability, safety, and efficiency of electrical and control systems on board. We provide installation, repair, troubleshooting, and maintenance services for various electrical components and instrumentation systems on vessels",
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
    desk: "refers to the process of designing, constructing, and assembling various steel and metal structures used on ships, offshore platforms, and other marine facilities. These works typically involve welding, cutting, forming, and installation of structural components to ensure the vessel’s strength",
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
    desk: "Services carried out directly at the customer’s location, such as on vessels in operation, in the field, or at specific work sites.",
    tools: [
      "Floating dock & dry dock coordination",
      "Mobile repair team for",
      "emergency call",
    ],
    dad: "500",
  },
];
