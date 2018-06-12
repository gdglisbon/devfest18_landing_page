import { PolymerElement, html } from "/node_modules/@polymer/polymer/polymer-element.js"



export class MailChimpElement extends PolymerElement {

    static get template() {
        return html`
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
            <style type="text/css">
                #mc_embed_signup{background:transparent; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
                #mc_embed_signup{ position: absolute; bottom: 24px;}
                /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
                We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
            </style>
            <div id="mc_embed_signup">
                <form action="https://google.us13.list-manage.com/subscribe/post?u=ab348098372d2b33687f05541&amp;id=b28c252858" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email address" required>
                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ab348098372d2b33687f05541_b28c252858" tabindex="-1" value=""></div>
                        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                    </div>
                </form>
            </div>
        `;
    }

    constructor() {
        super();
    }
}
customElements.define('mail-chimp', MailChimpElement);



