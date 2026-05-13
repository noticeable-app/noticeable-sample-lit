import { css, html, LitElement, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

import { config } from './config'

@customElement('noticeable-page1')
export class NoticeablePage1 extends LitElement {
  public static styles = css`
    :host {
      width: 100%;
    }
  `

  protected firstUpdated(): void {
    window.noticeable.render('widget', config.noticeable.newspageEmbedWidgetId, {
      root: this.shadowRoot!,
      selector: '#noticeable-newspage-embed',
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    window.noticeable.destroy('widget', config.noticeable.newspageEmbedWidgetId)
  }

  protected render(): TemplateResult {
    return html`<div id="noticeable-newspage-embed"></div>`
  }
}
