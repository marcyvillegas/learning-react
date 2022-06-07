
function UnorderedList() {
    return (<ul>
        <li>hi</li>
        <li>hello</li>
    </ul>)
}

function Content() {
    return(<p>
        just something
    </p>)
}

const Nav = (
    <nav>
        <h1>Try Page</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
)

ReactDOM.render(
    Nav,
document.querySelector('#App'));