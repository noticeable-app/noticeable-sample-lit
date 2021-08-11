import { Router } from '@vaadin/router';
import {
  css,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';

import './noticeable-page1.js';
import './noticeable-page2.js';
import './noticeable-page3.js';

@customElement('noticeable-sample-lit')
export class NoticeableSampleLit extends LitElement {
  @property({ type: String })
  private appTitle = 'My app';

  protected firstUpdated(): void {
    const router = new Router(this.shadowRoot?.querySelector('#outlet'));
    router.baseUrl = '/';
    router.setRoutes([
      { path: '/', component: 'noticeable-page1' },
      { path: '/page1', component: 'noticeable-page1' },
      { path: '/page2', component: 'noticeable-page2' },
      { path: '/page3', component: 'noticeable-page3' },
    ]);
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 8px 0;
    }

    p {
      margin: 0;
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

    .toolbar #twitter-logo {
      height: 40px;
      margin: 0 8px;
    }

    .toolbar #youtube-logo {
      height: 40px;
      margin: 0 16px;
    }

    .toolbar #twitter-logo:hover,
    .toolbar #youtube-logo:hover {
      opacity: 0.8;
    }

    .content {
      display: flex;
      margin: 82px auto 32px;
      padding: 0 16px;
      flex-direction: column;
      align-items: center;
    }

    svg.material-icons {
      height: 24px;
      width: auto;
    }

    svg.material-icons:not(:last-child) {
      margin-right: 8px;
    }

    .card svg.material-icons path {
      fill: #888;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 16px;
    }

    .card {
      all: unset;
      border-radius: 4px;
      border: 1px solid #eee;
      background-color: #fafafa;
      height: 40px;
      width: 200px;
      margin: 0 8px 16px;
      padding: 16px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
      line-height: 24px;
    }

    .card-container .card:not(:last-child) {
      margin-right: 0;
    }

    .card.card-small {
      height: 16px;
      width: 168px;
    }

    .card-container .card:not(.highlight-card) {
      cursor: pointer;
    }

    .card-container .card:not(.highlight-card):hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    }

    .card-container .card:not(.highlight-card):hover .material-icons path {
      fill: rgb(105, 103, 103);
    }

    .card.highlight-card {
      background-color: #1976d2;
      color: white;
      font-weight: 600;
      border: none;
      width: auto;
      min-width: 30%;
      position: relative;
    }

    .card.card.highlight-card span {
      margin-left: 60px;
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

    .terminal {
      position: relative;
      width: 80%;
      max-width: 600px;
      border-radius: 6px;
      padding-top: 45px;
      margin-top: 8px;
      overflow: hidden;
      background-color: rgb(15, 15, 16);
    }

    .terminal::before {
      content: '\\2022 \\2022 \\2022';
      position: absolute;
      top: 0;
      left: 0;
      height: 4px;
      background: rgb(58, 58, 58);
      color: #c2c3c4;
      width: 100%;
      font-size: 2rem;
      line-height: 0;
      padding: 14px 0;
      text-indent: 4px;
    }

    .terminal pre {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      color: white;
      padding: 0 1rem 1rem;
      margin: 0;
    }

    .circle-link {
      height: 40px;
      width: 40px;
      border-radius: 40px;
      margin: 8px;
      background-color: white;
      border: 1px solid #eeeeee;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: 1s ease-out;
    }

    .circle-link:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    }

    footer {
      margin-top: 8px;
      display: flex;
      align-items: center;
      line-height: 20px;
    }

    footer a {
      display: flex;
      align-items: center;
    }

    /* Responsive Styles */
    @media screen and (max-width: 767px) {
      .card-container > *:not(.circle-link),
      .terminal {
        width: 100%;
      }

      .card:not(.highlight-card) {
        height: 16px;
        margin: 8px 0;
      }

      .card.highlight-card span {
        margin-left: 72px;
      }
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
  `;

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
            <path
              d="m438.61 167.53v80a70.3 70.3 0 0 0 40-40z"
              fill="#324fff"
            ></path>
            <path
              d="m478.61 207.53c5.7 27.3 5.3 47 0 80l-40-40z"
              fill="#283198"
            ></path>
            <path
              d="m478.61 207.53v80l40-40a149.9 149.9 0 0 0-40-40z"
              fill="#0ff"
            ></path>
            <path d="m518.61 87.526v80s-31.7-24.3-40-40z" fill="#324fff"></path>
            <path
              d="m478.61 127.53v80a84.8 84.8 0 0 0 40-40z"
              fill="#324fff"
            ></path>
            <path
              d="m518.61 167.53a182 182 0 0 1 0 80l-40-40z"
              fill="#00e8ff"
            ></path>
            <path
              d="m518.61 167.53v80c17-7.5 31.5-19 40-40-5.9-17-18.1-30.9-40-40z"
              fill="#283198"
            ></path>
            <path d="m558.61 127.53v80l-40-40z" fill="#283198"></path>
            <path
              d="m558.61 207.53c6.1 27 4.9 53.6 0 80l-40-40z"
              fill="#00e8ff"
            ></path>
            <path
              d="m558.61 207.53v80l40-40c-5.4-15-18.3-27.9-40-40z"
              fill="#324fff"
            ></path>
            <path d="m598.61 167.53v80l-40-40z" fill="#324fff"></path>
          </g>
        </svg>
        <span>${this.appTitle}</span>
        <div class="spacer"></div>
        <ul id="menubar">
          <li><a href="/page1">Page 1</a></li>
          <li><a href="/page2">Page 2</a></li>
          <li><a href="/page3">Page 3</a></li>
        </ul>
      </div>

      <div class="content" role="main">
        <div id="outlet"></div>
      </div>
    `;
  }
}
