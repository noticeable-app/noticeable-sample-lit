import { Router } from '@lit-labs/router'
import { css, html, LitElement, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { config } from './config'

import './noticeable-page1'
import './noticeable-page2'
import './noticeable-page3'

@customElement('noticeable-sample-lit')
export class NoticeableSampleLit extends LitElement {
  @property({ type: String })
  private appTitle = 'My app'

  private router = new Router(this, [
    { path: '/', render: () => html`<noticeable-page1></noticeable-page1>` },
    { path: '/page1', render: () => html`<noticeable-page1></noticeable-page1>` },
    { path: '/page2', render: () => html`<noticeable-page2></noticeable-page2>` },
    { path: '/page3', render: () => html`<noticeable-page3></noticeable-page3>` },
  ])

  protected firstUpdated(): void {
    window.noticeable.render('widget', config.noticeable.iconWidgetId, {
      root: this.shadowRoot!,
      selector: '#noticeable-icon',
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    window.noticeable.destroy('widget', config.noticeable.iconWidgetId)
  }

  private navigate(event: Event, path: string): void {
    event.preventDefault()
    history.pushState({}, '', path)
    this.router.goto(path)
  }

  public static styles = css`
    :host {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      font-size: 14px;
      color: #333;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .spacer {
      flex: 1;
    }

    .toolbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      display: flex;
      align-items: center;
      background-color: #111111;
      color: white;
      font-weight: 600;
    }

    .toolbar svg {
      height: 32px;
      margin: 0 16px;
    }

    .content {
      display: flex;
      margin: 82px auto 32px;
      padding: 0 16px;
      flex-direction: column;
      align-items: center;
    }

    a,
    a:visited,
    a:hover {
      color: #1976d2;
      text-decoration: none;
    }

    a:hover {
      color: #125699;
    }

    ul#menubar {
      display: flex;
      list-style-type: none;
      margin-right: 8px;
    }

    ul#menubar li {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }

    ul#menubar a {
      color: white;
      text-decoration: underline;
    }

    ul#menubar a:hover {
      text-decoration: none;
    }

    #outlet {
      text-align: center;
      width: 100%;
    }

    #noticeable-icon {
      width: 39px;
    }
  `

  protected render(): TemplateResult {
    return html`
      <div class="toolbar" role="banner">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          version="1.1"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(2.24 0 0 2.24 -937.69 -164.06)">
            <path d="m438.61 167.53v80a70.3 70.3 0 0 0 40-40z" fill="#324fff"></path>
            <path d="m478.61 207.53c5.7 27.3 5.3 47 0 80l-40-40z" fill="#283198"></path>
            <path d="m478.61 207.53v80l40-40a149.9 149.9 0 0 0-40-40z" fill="#0ff"></path>
            <path d="m518.61 87.526v80s-31.7-24.3-40-40z" fill="#324fff"></path>
            <path d="m478.61 127.53v80a84.8 84.8 0 0 0 40-40z" fill="#324fff"></path>
            <path d="m518.61 167.53a182 182 0 0 1 0 80l-40-40z" fill="#00e8ff"></path>
            <path d="m518.61 167.53v80c17-7.5 31.5-19 40-40-5.9-17-18.1-30.9-40-40z" fill="#283198"></path>
            <path d="m558.61 127.53v80l-40-40z" fill="#283198"></path>
            <path d="m558.61 207.53c6.1 27 4.9 53.6 0 80l-40-40z" fill="#00e8ff"></path>
            <path d="m558.61 207.53v80l40-40c-5.4-15-18.3-27.9-40-40z" fill="#324fff"></path>
            <path d="m598.61 167.53v80l-40-40z" fill="#324fff"></path>
          </g>
        </svg>
        <span>${this.appTitle}</span>
        <div class="spacer"></div>
        <ul id="menubar">
          <li><a href="/page1" @click=${(e: Event) => this.navigate(e, '/page1')}>Page 1</a></li>
          <li><a href="/page2" @click=${(e: Event) => this.navigate(e, '/page2')}>Page 2</a></li>
          <li><a href="/page3" @click=${(e: Event) => this.navigate(e, '/page3')}>Page 3</a></li>
          <li>
            <div id="noticeable-icon"></div>
          </li>
        </ul>
      </div>

      <div class="content" role="main">
        <div id="outlet">${this.router.outlet()}</div>
      </div>
    `
  }
}
