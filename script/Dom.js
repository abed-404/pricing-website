const createDivElement = (className, parent) => {
  const div = document.createElement("div");
  div.className = className;
  parent.appendChild(div);
  return div;
};

const createParagraphElement = (className, textContent, parent) => {
  const p = document.createElement("p");
  p.className = className;
  p.innerText = textContent;
  parent.appendChild(p);
};

const createButton = (className, textContent, cb, parent) => {
  const btn = document.createElement("button");
  btn.className = className;
  btn.innerText = textContent;
  parent.appendChild(btn);
};

const createHeaderElement = (hType, textContent, className, parent) => {
  const h = document.createElement(hType);
  h.innerText = textContent;
  h.className = className;
  if (textContent === "standard") {
    parent.parentNode.setAttribute("style", "background-color:#edeef1;");
  }
  parent.appendChild(h);
};

const createSpanElement = (className, textContent, parent) => {
  const span = document.createElement("span");
  span.className = className;
  span.innerText = textContent;
  if (textContent === "") {
    span.setAttribute("style", "background-color: inherit;");
  }
  parent.appendChild(span);
};
const createListELement = (textContent, parent) => {
  const li = document.createElement("li");
  li.innerText = textContent;
  parent.appendChild(li);
};
const createList = (listELements, parent) => {
  const ul = document.createElement("ul");
  // ul.className = className;
  listELements.map((elem) => {
    createListELement(elem, ul);
  });
  parent.appendChild(ul);
};
