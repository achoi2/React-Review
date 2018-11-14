console.log('hello world');

const app = {
    title: 'Decision app',
    subtitle: 'Let it help you make decisions',
    options: []
};

const onFormSubmit = e => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const removeAllOptions = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();


