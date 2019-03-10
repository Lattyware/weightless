import { customElement, html, LitElement } from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import "../../../../lib/label/wl-label";
import "../../../../lib/title/wl-title";
import { cssResult } from "../../../../lib/util/css";
import "../../../elements/code-example/code-example-element";
import "../../../elements/demo/demo-element";
import { sharedStyles } from "../../../style/shared";

import styles from "./theme-page.scss";

const requiredColors = ["primary", "secondary", "error", "shade"];
const requiredDefaultHues = [400, 500, 600];
const requiredShadeHues = [200, 300, 400, 500, 600, 700];

@customElement("theme-page")
export default class ThemePage extends LitElement {

	static styles = [sharedStyles, cssResult(styles)];

	protected render () {
		return html`
			<div id="colors">
				${repeat(requiredColors, color => html`
					<div id="palette">
						${repeat(color == "shade" ? requiredShadeHues : requiredDefaultHues, hue => html`
							<div class="color ${color}-${hue}" title="${color}-${hue}">
								<wl-label nowrap class="text">${color}-${hue}</wl-label>
							</div>
						`)}
					</div>
				`)}
			</div>
		`;
	}
}