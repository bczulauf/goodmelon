const loadAbout = () => {
    const page = $("#page")
    const template = 
    `<h1>At that moment, I knew. I knew the way you know about a good melon.</h1>
    <p>-- When Harry Met Sally</p>
    <div class="splitter"></div>
    <p>Our team is not normal and we like it that way. We are thoughtful problem-solvers, who hail from big tech companies, startups, and some truly out-there places.</p>`

    page.html(template)
}