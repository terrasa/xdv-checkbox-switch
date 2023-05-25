import { LitElement, html, css } from 'lit'
// import { XdvStringToKebabCase } from '../mixins/XdvStringToKebabCase'
// import { XdvSetCustomPropertiesFromAttributesMixin } from '../mixins/XdvSetCustomPropertiesFromAttributesMixin'

export class XdvCheckboxSwitch extends LitElement {
  static styles = [
    css`
      :host {
        /*display: flex;
        align-items: center;*/
        position: relative;
      }

      .sw__container {
        display: flex;
        align-items: center;
      }

      .sw__container span {
        padding-left: 0.5rem;
        cursor: pointer;
      }

      .sw__body {
        display: block;
        width: var(--xdv-switch-bar-width, 2.75rem);
        height: var(--xdv-switch-bar-height, 1.5rem);
        box-sizing: border-box;
        border-radius: var(--xdv-switch-bar-radius, 1.5625rem);
        background-color: var(--xdv-switch-bar-bg, var(--grey-inactive));
      }
      
      .sw__item {
        display: inline-block;
        width: var(--xdv-switch-item-width-height, 1.25rem);
        height: var(--xdv-switch-item-width-height, 1.25rem);
        box-sizing: border-box;
        border-radius: var(--xdv-switch-item-radius, 1.5625rem);
        background-color: var(--xdv-switch-item-bg, var(--grey-tertiary));
        translate: var(--xdv-switch-item-initial-position, 0.125rem 0.125rem);
        transition: all .3s;
  
      }
  
      :host([checked]) .sw__item {
        background-color: var(--xdv-switch-item-checked-bg, var(--soft-excel));
        translate: var(--xdv-switch-item-checked-position, 1.375rem 0.125rem);
      } 

      ::slotted(p) {
        margin: 0;
        color: var(--text-color);
      } 
    `
  ]

  static get properties () {
    return {
      checked: {
        type: Boolean,
        reflect: true
      },
      value: { type: String },
      id: { type: String },
      loaded: { type: Boolean },
      apiValue: { type: String}
    }
  }

  constructor () {
    super()

    this.id = false
    this.checked = false
    this.loaded = false
    this.value = ''
    this.isLabel = false
    this.apiValue = ''
  }

  connectedCallback() {
    super.connectedCallback();
  
  }

  firstUpdated () {
    this.id = this.dataset.checkId || this.xdvRandomID()

    this.isLabel = this.querySelector("[slot='description']")
    this.xdvToggleCheckbox ()
    //this.xdvSetCustomProperties ('switch')
  }

  xdvToggleCheckbox () {    
    this.loaded
    ? this.value = this.checked = !this.checked
    : (this.loaded = true, this.value = this.checked)
    
    this.value = this.checked ? `${this.dataset.valueTrue}` : `${this.dataset.valueFalse}`
    this.apiValue = this.checked ? `${this.dataset.apiValueTrue}` : `${this.dataset.apiValueFalse}`
    const xdvCheckboxToggle = new CustomEvent('xdvCheckboxToggle', {
      bubbles: true,
      composed: true,
      detail: {
        value: this.value,
        apiValue: this.apiValue,
        id: this.id
      }
    })
    this.dispatchEvent(xdvCheckboxToggle)
  }

  xdvRandomID () {
    const randomId = Math.random()
    const alphanumericId = randomId.toString(36).slice(2)
    return alphanumericId
  }

  render () {
    return html`
      <div class='sw__container' ?loaded=${this.loaded} @click=${this.xdvToggleCheckbox}>
        <div class="sw__body">
          <div class='sw__item'></div>
        </div>
        ${ this.isLabel && html`<span> <slot name='description'></slot> </span>`}
      </div>
    `
  }
}