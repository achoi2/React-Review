class DescisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Descision App</h1>
                <h2>Organize your life</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                options component
                <Option />  
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                option component
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                add option component
            </div>
        );
    }
}


ReactDOM.render(<DescisionApp /> , document.getElementById('app'));
