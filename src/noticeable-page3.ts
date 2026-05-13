import { css, html, LitElement, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('noticeable-page3')
export class NoticeablePage3 extends LitElement {
  public static styles = css``

  protected render(): TemplateResult {
    return html`Page 3`
  }
}
