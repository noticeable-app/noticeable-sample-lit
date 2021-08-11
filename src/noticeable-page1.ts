import {
  css,
  customElement,
  html,
  LitElement,
  TemplateResult,
} from 'lit-element';

@customElement('noticeable-page1')
export class NoticeablePage1 extends LitElement {
  public static styles = css``;

  protected render(): TemplateResult {
    return html`Page1`;
  }
}
