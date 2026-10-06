import type { Article } from './types';

export const ARTICLES: Article[] = [
  {
    slug: 'nigeria-lpg-storage-deficit',
    title: "Solving Nigeria's LPG Storage Deficit",
    description:
      'Nigeria produces LPG in abundance yet consumers still face frequent shortages. The bottleneck is bulk storage capacity, and closing it changes the economics of delivered gas.',
    date: '2026-02-18',
    updated: '2026-02-18',
    category: 'Infrastructure',
    readingTime: '6 min read',
    author: 'emmanuel-uwandu',
    content: [
      'Nigeria is consistently one of the largest producers of liquefied petroleum gas in Africa. The country exports a substantial share of what it produces. At the same time, retailers and industrial consumers across the country report frequent supply interruptions. Both facts are true at once, and the reason is bulk storage capacity.',
      'LPG leaves production sites by road, in cylinders or small tankers. Moving one tonne of gas that way is expensive, and it ties up vehicles and drivers for long haulages that cut into working capital. When capacity is thin, distributors keep low inventory, which makes small disruptions look like shortages across a whole region.',
      'The structural fix is straightforward: store more gas, closer to demand. A bulk storage terminal holding thousands of tonnes on site reduces the number of road trips needed per tonne delivered and gives distributors enough inventory to ride through supply interruptions. That is the logic behind Windek\'s 20,000 metric tonne LPG terminal at Atabrikang, Akwa Ibom, positioned on the corridor between gas production and the South East and South South consumption markets.',
      'Storage also changes who can participate in the market. Retailers depend on small-scale suppliers today because they cannot afford to hold large inventory. Regional distribution capacity near demand centres opens the market to a broader set of participants and makes volumes predictable enough to support long-term planning.',
    ],
    takeaways: [
      'Nigeria has gas supply but lacks the storage that makes delivery reliable.',
      'Bulk storage cuts delivered cost by reducing road transport per tonne.',
      'Locating storage between production and demand shortens haul distances.',
      'More regional capacity widens market access beyond large distributors.',
    ],
    faqs: [
      {
        question: 'Why does Nigeria import LPG when it produces its own?',
        answer:
          'Nigeria produces LPG in large volumes and exports a share of it, yet domestic consumers still face supply gaps. The constraint is not gas availability but the bulk storage and terminal capacity needed to hold gas close to demand centres, so what is produced is not always where and when it is needed.',
      },
      {
        question: 'How much LPG storage does Nigeria need?',
        answer:
          'Nigeria has no single published national requirement, but independent estimates have placed national LPG demand in the region of hundreds of thousands of tonnes per month. Storage capacity across the country has remained well below what would allow distributors to hold inventory comfortably, which is why individual terminals at the scale of tens of thousands of tonnes are commercially meaningful.',
      },
    ],
  },
  {
    slug: 'indigenous-content-in-epci',
    title: 'Why Local Content Matters on EPCI Projects',
    description:
      'EPCI collapses four phases into one contract, which makes local capability a delivery advantage rather than a compliance checkbox. Here is how that works out in practice.',
    date: '2026-01-22',
    updated: '2026-02-10',
    category: 'Delivery',
    readingTime: '5 min read',
    author: 'motunrayo-adeogun',
    content: [
      'EPCI means engineering, procurement, construction and installation sit under a single contract with a single accountable contractor. That structure is popular with clients because it removes the interface risk that appears when four different companies hand work to each other on the same site.',
      'It also changes how local content performs. Under a split-contract model, each package is tendered separately and Nigerian firms compete on price for whichever package they can win. Under EPCI, capability is judged as a whole: can this contractor design the works, source the equipment, execute the construction and commission the facility?',
      'Three practical effects follow. Mobilisation is faster, because crews and equipment are already in the country rather than being imported after contract award. Exposure to foreign exchange falls, because more of the project spend stays in naira. And more of the project value stays in the local economy, which is the point Nigeria\'s local content policy exists to serve.',
      'The constraint is real: indigenous engineering firms need sustained project flow to build and keep capability. Terminal projects measured in years, rather than the short single-asset jobs of the past, are what make that sustainable.',
    ],
    takeaways: [
      'EPCI gives clients one accountable contractor instead of four interfaces.',
      'Capability is assessed holistically rather than package by package.',
      'Local participation shortens mobilisation and cuts currency exposure.',
      'Multi-year project flow is what sustains indigenous capability.',
    ],
    faqs: [
      {
        question: 'What is the difference between EPCI and EPC?',
        answer:
          'EPCI is engineering, procurement, construction and installation. EPC is engineering, procurement and construction. The added I is installation and commissioning, so the contractor remains responsible through to the facility being operational, not merely until the works are physically complete.',
      },
      {
        question: 'What is Nigeria\'s local content policy in oil and gas?',
        answer:
          'Nigeria\'s local content policy requires that Nigerian engineering capability, labour, equipment and services are used wherever they are reasonably available on projects in the country. For EPCI contractors this is assessed against the share of project value delivered by Nigerian suppliers and personnel.',
      },
    ],
  },
  {
    slug: 'understanding-gas-flaring-nigeria',
    title: 'Understanding Gas Flaring in Nigeria',
    description:
      'Associated gas is burned at the wellhead because there is nowhere to put it. That single infrastructure gap explains most of Nigeria\'s flaring problem.',
    date: '2025-11-06',
    updated: '2026-01-15',
    category: 'Environment',
    readingTime: '7 min read',
    author: 'emmanuel-uwandu',
    content: [
      'Crude oil arrives at the wellhead mixed with gas. Separating the two is routine engineering work. The problem is what happens to the gas afterwards: where it goes. In many fields there is no gathering line, no processing facility and no offtake agreement, so the only option is to burn it.',
      'Flaring is therefore an infrastructure problem before it is a behavioural one. Operators flare because the alternative does not exist. Add gathering and processing, and the gas has somewhere to go.',
      'The environmental case against flaring is straightforward. It releases carbon dioxide, it wastes a fuel input that has commercial value, and it exposes nearby communities to heat, light and noise around the clock. Nigeria has set reduction targets under its flaring programme, and progress has been real but uneven.',
      'There is also an economic argument that gets less attention. Associated gas is a feedstock. Captured, it becomes LPG, fuel gas or petrochemical input, and it displaces imported product. The infrastructure that ends flaring and the infrastructure that converts gas into revenue turn out to be the same investment.',
    ],
    takeaways: [
      'Most flaring happens because there is nowhere to send the gas.',
      'Gathering and processing infrastructure is the real remedy.',
      'Captured associated gas has commercial value as LPG or feedstock.',
      'Reducing flaring and monetising gas are the same investment.',
    ],
    faqs: [
      {
        question: 'Why is gas flared in Nigeria?',
        answer:
          'Associated gas produced with crude oil is mostly flared because the field lacks gathering lines, processing facilities or an offtake arrangement for it. Without somewhere to send the gas, burning it at the wellhead is the only available option, which makes flaring an infrastructure gap before it is a choice.',
      },
      {
        question: 'Does captured gas become LPG?',
        answer:
          'Yes. LPG is produced from associated gas and natural gas, so capturing and processing gas that would otherwise be flared yields LPG along with other products. This is why gas capture, LPG production and flaring reduction tend to be the same commercial opportunity.',
      },
    ],
  },
  {
    slug: 'choosing-an-lpg-storage-partner',
    title: 'Choosing an LPG Storage Partner',
    description:
      'Capacity, location and delivery record matter more than headline tonnage. A checklist for operators and distributors evaluating storage providers.',
    date: '2025-09-15',
    updated: '2025-12-02',
    category: 'Commercial',
    readingTime: '6 min read',
    author: 'motunrayo-adeogun',
    content: [
      'When a distributor needs storage capacity, the decision usually comes down to a small number of questions. How much can you hold? How close is it to where I sell? And can you prove you have built and run this before?',
      'Capacity is the starting point but not the deciding one. A large tank that is far from your customers is expensive to serve, because you still pay for road transport on every delivery. Storage sited between production and demand reduces the distance gas travels on a truck, which is where most of the delivered cost sits.',
      'Delivery record is where due diligence earns its keep. Ask for completed terminal projects, get references from operators who are using the facility now, and confirm what happens to your supply if the terminal has an unplanned outage. Bulk storage is valuable precisely because it is a buffer, and it stops being a buffer if the operator cannot manage continuity.',
      'Finally, confirm the commercial terms against delivered cost rather than storage rate. Storage rate is the visible number, but access, handling, minimum lift and distance charges often decide the total. Model the delivered cost per tonne to your customer before signing.',
    ],
    takeaways: [
      'Location often matters more than raw tank capacity for delivered cost.',
      'Ask for completed projects and live customer references.',
      'Clarify how supply is handled during an unplanned terminal outage.',
      'Compare delivered cost per tonne, not just the storage rate.',
    ],
    faqs: [
      {
        question: 'How do I calculate delivered LPG cost?',
        answer:
          'Delivered cost is the storage or wholesale rate plus all charges between the terminal and your customer: haulage, distance and access fees, handling, and any minimum lift requirements. Divide the total by tonnes delivered to get a cost per tonne, then compare that figure across providers rather than comparing headline storage rates.',
      },
      {
        question: 'How much storage capacity does a distributor typically need?',
        answer:
          'It depends on consumption volume, delivery frequency and how much interruption risk you want to carry. Larger distributors with daily lift volumes need capacity measured in thousands of tonnes to hold a meaningful buffer, while smaller retailers typically draw from distributors rather than holding bulk inventory themselves.',
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}