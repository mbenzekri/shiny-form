/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, LitElement } from "lit";
import { property, customElement } from "lit/decorators";
import { bootstrapCss } from "./bootstrap"
import { bootstrapIconsCss } from "./bootstrap-icons"

/**
 * @prop schema
 * @prop data
 */
@customElement("shiny-form")
export class ShinyForm extends LitElement {

    private _data = {}
    @property({ type: Object })
    get data() { return this._data }
    set data(value: any) { this._data = value }

    static get styles() {
        return [
            bootstrapCss,
            bootstrapIconsCss
        ]
    }

    render() {
        return html`Hello world !`
    }

    connectedCallback() {
        super.connectedCallback()
    }

}