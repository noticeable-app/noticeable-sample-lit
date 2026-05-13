import { css, html, LitElement, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('noticeable-page2')
export class NoticeablePage2 extends LitElement {
  public static styles = css``

  protected render(): TemplateResult {
    return html`Page 2`
  }
}
