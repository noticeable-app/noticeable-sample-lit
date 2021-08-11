import {
  css,
  customElement,
  html,
  LitElement,
  TemplateResult,
} from 'lit-element';

@customElement('noticeable-page3')
export class NoticeablePage3 extends LitElement {
  public static styles = css``;

  protected render(): TemplateResult {
    return html`Page3`;
  }
}
