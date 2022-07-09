var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, LitElement } from "lit";
import { property, customElement } from "lit/decorators";
import { bootstrapCss } from "./bootstrap";
import { bootstrapIconsCss } from "./bootstrap-icons";
/**
 * @prop schema
 * @prop data
 */
let ShinyForm = class ShinyForm extends LitElement {
    constructor() {
        super(...arguments);
        this._data = {};
    }
    get data() { return this._data; }
    set data(value) { this._data = value; }
    static get styles() {
        return [
            bootstrapCss,
            bootstrapIconsCss
        ];
    }
    render() {
        return html `Hello world !`;
    }
    connectedCallback() {
        super.connectedCallback();
    }
};
__decorate([
    property({ type: Object })
], ShinyForm.prototype, "data", null);
ShinyForm = __decorate([
    customElement("shiny-form")
], ShinyForm);
export { ShinyForm };
//# sourceMappingURL=shiny-form.js.map