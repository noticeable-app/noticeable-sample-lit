import { css, html, LitElement, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('noticeable-page1')
export class NoticeablePage1 extends LitElement {
  public static styles = css`
    :host {
      width: 100%;
    }
  `

  protected render(): TemplateResult {
    return html`<div>Page 1</div>`
  }
}
