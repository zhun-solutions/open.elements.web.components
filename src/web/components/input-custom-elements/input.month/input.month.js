import { Item } from "open.elements.data.ts";
export class InputMonthEle extends HTMLElement {
  metaItem = new Item();
  constructor() {
    super();
    // this.metaItem = item;
    this.attachShadow({ mode: "open" });
  }
  initialize(item) {
    this.metaItem = item;
  }
  connectedCallback() {
    console.log("meta item rcvd  :", this.metaItem);
    let fields = this.metaItem.fields;
    let ele = fields.get("element").fieldValue;
    let type = fields.get("type").fieldValue;
    let lbl = fields.get("label")?.fieldValue;
    let value = fields.get("value")?.fieldValue;
    if (lbl != undefined) {
      let lblEle = document.createElement("label");
      lblEle.textContent = lbl;
      this.shadowRoot.appendChild(lblEle);
    }

    let element = document.createElement(ele);
    element.type = type;
    this.shadowRoot.appendChild(element);

    let subEle = fields.get("ele").fieldValue;
    let subType = fields.get("typ").fieldValue;
    let element1 = document.createElement(subEle);
    element1.type = subType;
    this.shadowRoot.appendChild(element1);
    element1.addEventListener("click", () => {
      localStorage.setItem("date", element.value);
      alert("date stored successfully");
      console.log("date stored successfully");
      let date = localStorage.getItem("date");
      console.log(date);
    });
  }
}
customElements.define("input-month", InputMonthEle);