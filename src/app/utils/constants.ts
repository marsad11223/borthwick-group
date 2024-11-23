import svgs from "@/_assets/svgs";

interface testiomonialData {
  stars: number;
  message: string;
  author: string;
}

export const processCardsData: testiomonialData[] = [
  {
    stars: 3,
    message:
      "Super professional service. Everything was on-time and totally fixed the problem. Reliable and affordable service with a friendly support team. ",
    author: "James Ellie",
  },
  {
    stars: 2,
    message:
      "Great experience! The team was very helpful, and they made sure everything was done to perfection.",
    author: "Alex Doe",
  },
  {
    stars: 4,
    message: "Reliable and trustworthy service. Highly recommended!",
    author: "Maria Smith",
  },
];

export const caseStudys = [
  {
    title: "ECO 4: Transforming Homes, Saving £2535 Annually",
    description:
      "Under the UK’s ECO 4 scheme, we help eligible homeowners access free grants for energy upgrades. In a recent Barnsley project, energy improvements cut heating costs from £1812 to £693, hot water costs from £1512 to £106, and emissions from 7.1 to 1.8 tonnes, raising the energy rating from G to B and saving £2535 annually.",
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
    title: "ECO 4: Transforming Homes, Saving £2535 Annually",
    description:
      "Under the UK’s ECO 4 scheme, we help eligible homeowners access free grants for energy upgrades. In a recent Barnsley project, energy improvements cut heating costs from £1812 to £693, hot water costs from £1512 to £106, and emissions from 7.1 to 1.8 tonnes, raising the energy rating from G to B and saving £2535 annually. ",
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
    title: "ECO 4: Transforming Homes, Saving £2535 Annually",
    description:
      "Under the UK’s ECO 4 scheme, we help eligible homeowners access free grants for energy upgrades. In a recent Barnsley project, energy improvements cut heating costs from £1812 to £693, hot water costs from £1512 to £106, and emissions from 7.1 to 1.8 tonnes, raising the energy rating from G to B and saving £2535 annually.",
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
];
