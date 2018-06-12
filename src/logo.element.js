import { PolymerElement, html } from "/node_modules/@polymer/polymer/polymer-element.js"



export class LogoElement extends PolymerElement {

    static get template() {
        return html`
    
    <style>
        :host {
            
        }
    
        .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            height: 100%;
        }
    
    
    
        @keyframes scaleanim {
            0% {
                transform: scale(1);
            }
    
            100% {
                transform: scale(1.5);
            }
        }
        @keyframes zoomanim {
            0% {
                transform: scale(1);
            }
    
            100% {
                transform: scale(1.5);
            }
        }

        svg {
            transform: scale(1.5);
            animation: zoomanim 1s ease;
            
        }
    
        svg image {
            animation: scaleanim 10s ease-in-out infinite alternate;
            opacity: 0;
        }

        svg image.loaded {
            opacity: 1;
            transition: opacity .7s;
        }
    
        #img1 {
            height: 79%;
            x: -41px;
            transform-origin: 50% 50%;
        }
    
        #img2 {
            height: 65%;
            transform-origin: 50% 50%;
        }
    
        #img3 {
            height: 55%;
            y: 45%;
            transform-origin: 50% 50%;
        }
    
        #img4 {
            height: 41%;
            y: 59%;
            x: -39px;
            transform-origin: 50% 50%;
        }
    </style>
    <div class="wrapper">
    
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 277 474" width="277" height="474" >
            <defs>
                <clipPath id="mask1">
                    <path d="M2.49 8.72C3.95 5.01 7.27 2.83 12.46 2.16L65.34 2.16L244.71 300.46L197.4 379.65C201.3 368.63 202.59 360.05 201.27 353.91C199.94 347.78 198.32 343.54 196.38 341.21L4.42 21.33C1.67 16.63 1.03 12.43 2.49 8.72Z"
                        id="aHugcncY">
                    </path>
                </clipPath>
                <clipPath id="mask2">
                    <path d="M122.04 2.16C128.2 2.94 133.97 5.01 139.36 8.38C144.75 11.74 149.18 16.05 152.65 21.3L269.02 214.75C273.1 222.78 275.27 230.11 275.52 236.74C275.76 243.37 273.6 251.03 269.02 259.72L244.71 300.46L65.39 2.16L122.04 2.16Z"
                        id="a5fGCle2o"></path>
    
                </clipPath>
                <clipPath id="mask3">
                    <path d="M122.98 255.82C125.72 250.31 127.1 244.48 127.1 238.3C127.1 232.13 125.72 225.63 122.98 218.8L170.46 297.79L65.77 472.81L12.56 472.81C7.7 472.61 4.42 470.57 2.73 466.7C1.04 462.82 1.53 458.74 4.19 454.45L122.98 255.82Z"
                        id="aokt9D9gI"></path>
                </clipPath>
                <clipPath id="mask4">
                    <path d="M170.46 297.45L197.46 342.43C200.45 347.94 201.94 353.79 201.94 359.96C201.94 366.14 200.45 372.64 197.46 379.47L151.02 456.26C148.52 460.07 144.31 463.75 138.4 467.31C132.49 470.87 126.36 472.7 120.03 472.81L65.39 472.81L170.46 297.45Z"
                        id="a3n9K9gDvV"></path>
                </clipPath>
            </defs>
    
            <g clip-path="url(#mask1)">
                <image id="img1" href="/images/lisbon-bay-cityscape-on-sunset-599705349-5919aae15f9b5864702dd105.jpg"
                />
                <rect width="100%" height="100%" fill="#4285F4" class="text-1" fill-opacity="0.5" />
            </g>
            <g clip-path="url(#mask2)">
                <image id="img2" href="/images/Torre_Bel%C3%A9m_April_2009-4a.jpg" />
                <rect width="100%" height="100%" fill="#DB4437" fill-opacity="0.5" />
            </g>
            <g clip-path="url(#mask3)">
                <image id="img3" href="/images/Lisbon_Bridge-1400x788.jpg" />
                <rect width="100%" fill="#0F9D58" fill-opacity="0.5" />
            </g>
            <g clip-path="url(#mask4)">
                <image id="img4" href="/images/maxresdefault.jpg" />
                <rect width="100%" height="100%" fill="#FFC107" fill-opacity="0.5" />
            </g>
        </svg>
    
    </div>
    
    `;

    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
        

        // wait for all images loaded and then show them all
        const images = Array.from(this.shadowRoot.querySelectorAll('image'))
            .map((image) => 
                new Promise((resolve,reject) => {
                    image.onload = ( _ => resolve(image));
                }));
            
        Promise.all(images)
            .then((images) => {
                images.forEach((image) => {
                    image.classList.add('loaded');
                });
            })
        
    }
}
customElements.define('gdglx-logo', LogoElement);



