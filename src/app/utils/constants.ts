import svgs from "@/_assets/svgs";

interface testiomonialData {
  stars: number;
  message: string;
  author: string;
}

export const processCardsData: testiomonialData[] = [
  {
    stars: 5,
    message:
      "Bright Eco Future made the entire process easy and stress-free. The installation was quick, and I’ve already noticed significant savings on my energy bills. Highly recommend their professional team!",
    author: "Sarah T., Sheffield",
  },
  {
    stars: 5,
    message:
      "The team at Bright Eco Future was incredibly efficient and professional. My home is now much warmer, and I’m thrilled to be saving money while reducing my carbon footprint!",
    author: "Mark L., Leeds",
  },
  {
    stars: 5,
    message: "I’m so glad I chose Bright Eco Future. They took care of everything and secured a government grant for me. The process was smooth, and the results are fantastic!",
    author: " Emma J., Rotherham",
  },
];

export const caseStudys = [
  {
    title: "ECO 4: Transforming Homes, Saving £2535 Annually",
    description:
      "In a recent Barnsley project, energy improvements cut heating costs from £1812 to £693, hot water costs from £1512 to £106, and emissions from 7.1 to 1.8 tonnes, raising the energy rating from G to B and saving £2535 annually.",
    stats: [
      { icon: svgs.Lighting, label: "Lighting", before: "£84", after: "£84" },
      { icon: svgs.Heating, label: "Heating", before: "£1812", after: "£693" },
      {
        icon: svgs.HotWater,
        label: "Hot Water",
        before: "£1512",
        after: "£106",
      },
      {
        icon: svgs.Emission,
        label: "Emission",
        before: "7.1 Tonnes",
        after: "1.8 Tonnes",
      },
      { icon: svgs.Rating, label: "Rating", before: "G", after: "B" },
    ],
    notes: [
      "This is a real case study of a semi-detached home, with 76m square area, in Barnsley.",
      "Now saving £2535 annually",
    ],
  },
  {
    title: "ECO 4: Transforming Homes, Saving £1149 Annually",
    description:
      "This happy couple from Rotherham are now saving £1149 annually, all while helping the planet. Their biggest savings came from heating bills, from which they are now saving over £1,000 pound. The savings have been possible through internatl wall insulation, loft insulation and heating controls.",
    stats: [
      { icon: svgs.Lighting, label: "Lighting", before: "£112", after: "£112" },
      { icon: svgs.Heating, label: "Heating", before: "£2086", after: "£936" },
      {
        icon: svgs.HotWater,
        label: "Hot Water",
        before: "£153",
        after: "£108",
      },
      {
        icon: svgs.Emission,
        label: "Emission",
        before: "7.1 Tonnes",
        after: "1.8 Tonnes",
      },
      { icon: svgs.Rating, label: "Rating", before: "G", after: "B" },
    ],
    notes: [
      "This is a real case study of a terrace home in Sheffield.",
      "Now saving £1149 annually",
    ],
  },
  {
    title: "ECO 4: Transforming Homes, Saving £3093 Annually",
    description:
      "A small family in Leeds are now able to save over £3,000 a year at absolutely no cost to them. These massive savings were possible through the addition of internal wall insulation and a brand-new condensing boiler completely free.",
    stats: [
      { icon: svgs.Lighting, label: "Lighting", before: "£137", after: "£98" },
      { icon: svgs.Heating, label: "Heating", before: "£3455", after: "£505" },
      {
        icon: svgs.HotWater,
        label: "Hot Water",
        before: "£300",
        after: "£196",
      },
      {
        icon: svgs.Emission,
        label: "Emission",
        before: "8.1 Tonnes",
        after: "1.7 Tonnes",
      },
      { icon: svgs.Rating, label: "Rating", before: "G", after: "B" },
    ],
    notes: [
      "This is a real case study of a terrace home in Leeds.",
      "Now saving £3093 annually",
    ],
  },
];
