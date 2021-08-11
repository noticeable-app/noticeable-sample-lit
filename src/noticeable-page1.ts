import {css, html, LitElement, TemplateResult,} from 'lit';
import {customElement} from 'lit/decorators.js';


@customElement('noticeable-page1')
export class NoticeablePage1 extends LitElement {
  public static styles = css``;

  protected render(): TemplateResult {
    return html`Page1`;
  }
}
