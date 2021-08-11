import {
  css,
  customElement,
  html,
  LitElement,
  TemplateResult,
} from 'lit-element';

@customElement('noticeable-page2')
export class NoticeablePage2 extends LitElement {
  public static styles = css``;

  protected render(): TemplateResult {
    return html`Page2`;
  }
}
