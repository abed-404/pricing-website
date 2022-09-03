const cards = [
  {
    id: 1,
    type: "lite",
    monthPrice: 17.99,
    savings: 60,
    semesterPrice: 68.97,
    annualPrice: 215.88,
    features: [
      "Estimate long term and short term (Airbnb) rental rate",
      "Project rental ROI",
      "Pick winning properties by using investment opportunity scores powered by machine learning",
    ],
    specialFeature: "",
  },
  {
    id: 2,
    type: "standard",
    monthPrice: 49.99,
    savings: 240,
    semesterPrice: 209.97,
    annualPrice: 599.88,
    features: [
      "Discover the most profitable properties and markets",
      "Compare similar short term and long term rental rates",
      "Export 20 searches per month",
      "Compare properties side-by-side",
    ],
    specialFeature: "Most popular",
  },
  {
    id: 3,
    type: "Professional",
    monthPrice: 74.99,
    savings: 300,
    semesterPrice: 299.97,
    annualPrice: 899.88,
    features: [
      "Find multifamily and foreclosure properties",
      "Export 60 searches per month, plus property PDFs",
      "Upload and analyze property listings",
    ],
    specialFeature: "",
  },
];
const cardsDiv = document.getElementById("cards");
const semBtn = document.getElementById("sem");
const yearlyBtn = document.getElementById("yearly");

//yearlyBtn.addEventListener("click", renderYearlyCards);

const priceDiscription = (monthPrice, savings) => {
  return `Only $${monthPrice} - with $ ${savings} in savings on an annual plan`;
};
const renderCard = (
  { type, monthPrice, savings, features, specialFeature },
  price
) => {
  const card = createDivElement("card", cardsDiv);
  const priceBadge = createDivElement("price-badge", card);
  createSpanElement("badge-text", specialFeature, priceBadge);
  const cardDiscription = createDivElement("card-disc", card);
  createHeaderElement("h2", type, "card-type", cardDiscription);
  createParagraphElement(
    "discription",
    priceDiscription(monthPrice, savings),
    cardDiscription
  );
  const priceWrapper = createDivElement("price-con", card);
  createSpanElement("price", `$${price}`, priceWrapper);
  createSpanElement("price-type", "every 3 months", priceWrapper);
  const traial = createDivElement("trial", card);
  createButton("trialBtn", "Start trial", null, traial);
  const featuresDiv = createDivElement("features", card);
  createParagraphElement("list-header", "this includes", featuresDiv);
  createList("features-list", features, card);
};
const renderCards = (cards, duration) => {
  if (duration === "semester") {
    return cards.map((card) => renderCard(card, card.semesterPrice));
  }
  cards.map((card) => renderCard(card, card.annualPrice));
};

renderCards(cards, "semester");
const resetDiv = (e) => {
  cardsDiv.innerHTML = "";
  const togglers = document.getElementsByClassName("toggle-button");
  for (i = 0; i < togglers.length; i++) {
    togglers[i].className = togglers[i].className.replace(" active", "");
  }
  e.target.className += " active";
};
semBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetDiv(e);
  renderCards(cards, "semester");
});
yearlyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetDiv(e);
  renderCards(cards, "year");
});
