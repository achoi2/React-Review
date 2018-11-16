class DescisionApp extends React.Component {
    render() {
        const title = "Decision";
        const subtitle = 'Organize your life';
        const options = ["one", "two", "three"]
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                {this.props.options.map(option => <Option key={option} optionText={option}/>)}

            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
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
