class AppDrawer extends HTMLElement {
    get open() {
        return this.hasAttribute("open");
    }

    set open(val) {
        val ? this.setAttribute("open", '') : this.removeAttribute('open');
    }

    get disabled() {
        return this.hasAttribute("disabled");
    }

    set disabled(val) {
        val ? this.setAttribute("disabled", '') : this.removeAttribute('disabled');
    }

    static get observedAttributes() { return ["open"] };

    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener("click", () => {
            this.open = !this.open;
        })
        this.textContent = this.open ? "OPEN": "CLOSED";
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        this.textContent = this.open ? "OPEN": "CLOSED";
    }
}


customElements.define("app-drawer", AppDrawer)