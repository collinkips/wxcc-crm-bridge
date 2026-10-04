class JblCrmBridge extends HTMLElement {

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        :host {
          font-family: Arial, sans-serif;
        }

        .container {
          padding: 10px;
          min-width: 220px;
        }

        .title {
          font-weight: 600;
          margin-bottom: 8px;
        }

        .status {
          font-size: 12px;
          margin-bottom: 8px;
        }

        input {
          width: 190px;
          padding: 7px;
          margin-bottom: 8px;
          box-sizing: border-box;
        }

        button {
          padding: 7px 16px;
          cursor: pointer;
        }

        .details {
          margin-top: 8px;
          font-size: 11px;
        }
      </style>

      <div class="container">

        <div class="title">
          CRM Integration Test
        </div>

        <div class="status">
          Widget Status:
          <strong>Loaded</strong>
        </div>

        <input
          id="phone"
          type="tel"
          placeholder="+2547XXXXXXXX"
        />

        <br>

        <button id="callButton">
          CALL
        </button>

        <div class="details">
          <div>
            Agent:
            <span id="agent">Waiting...</span>
          </div>

          <div>
            Org:
            <span id="org">Waiting...</span>
          </div>

          <div id="result">
            Ready
          </div>
        </div>

      </div>
    `;

    shadow
      .getElementById("callButton")
      .addEventListener("click", () => {

        const number =
          shadow.getElementById("phone").value;

        shadow.getElementById("result").textContent =
          number
            ? `Test button clicked: ${number}`
            : "Enter a telephone number.";

      });
  }

  connectedCallback() {

    this.shadowRoot.getElementById("agent").textContent =
      this.agentId || "Property not received";

    this.shadowRoot.getElementById("org").textContent =
      this.orgId || "Property not received";

  }
}

customElements.define(
  "jbl-crm-bridge",
  JblCrmBridge
);
