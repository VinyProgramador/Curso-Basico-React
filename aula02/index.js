var nav = React.createElement(
    'nav', { className: "links" },
    React.createElement("ul",
        null,
        React.createElement("li",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "Home"
            ),
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "Cadastro"
            ),
        ), React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: "#" },
                "Contatos"
            ),
        ),
    )
);
ReactDOM.render(nav, document.getElementById('root'));