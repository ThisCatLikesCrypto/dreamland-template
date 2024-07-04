// The layout file, to serve before and after div. Meant to be used in every page.

let nav = html`
    <div>
        <button on:click=${()=>window.location.replace("https://wilburwilliams.uk")}>Example Nav</button>
    </div>
`

let footer = html`
    <div>
        <p>&copy; Wilbur Williams. Rights not really reserved.</p>
    </div>
`

window.addEventListener('load', () => {
    document.getElementById("before").appendChild(nav);
    document.getElementById("after").appendChild(footer);
});