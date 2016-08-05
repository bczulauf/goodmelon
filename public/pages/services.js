const loadServices = () => {
    const page = $("#page")
    const template = 
    `<h1>Idea &#8594 Prototype &#8594 Validation &#8594 Product</h1>
     <div class="splitter"></div>
     <p>We are here to guide you from idea to reality. Our team specializes in rapidly prototyping and validating ideas, so you know you have a winner before you say, "BUILD!".</p>
     <h4>Our services include:</h4>
     <div class="boxes">
     <div class="box">Branding & Communications
     <ul>
     <li>Branding strategy</li>
     <li>Visual identity</li>
     <li>Marketing materials</li>
     <li>Photography and videography</li>
     </ul>
     </div>
     <div class="box">Strategy & Design
     <ul>
     <li>Wireframing and Prototyping</li>
     <li>User testing</li>
     <li>Site Architecture</li>
     <li>Style guide</li>
     </ul>
     </div>
     <div class="box">Application development
     <ul>
     <li>Front-end development</li>
     <li>Back-end services and databases</li>
     <li>SDKs, APIs, and documentation</li>
     </ul>
     </div>
     </div>`

    page.html(template)
}