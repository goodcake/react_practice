import React from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import { Button } from "reactstrap";

const PreventingTransitionsExample = () => (
    <Router>
        <div>
            <div>
                <Button>
                    <Link to="/">Form</Link>
                </Button>
                <Button>
                    <Link to="/one">One</Link>
                </Button>
                <Button>
                    <Link to="/two">Two</Link>
                </Button>
            </div>
            <Route path="/" exact component={Form} />
            <Route path="/one" render={() => <h3>One</h3>} />
            <Route path="/two" render={() => <h3>Two</h3>} />
        </div>
    </Router>
);

class Form extends React.Component {
    state = {
        isBlocking: false
    };

    validButton() {
        return this.state.isBlocking;
    }

    componentDidMount() {
        console.log('mounted');
        // this.refs.btn.firstChild.data = 'ttt';
    }

    render() {
        const { isBlocking } = this.state;

        return (
            <form
                onSubmit={event => {
                    event.preventDefault();
                    event.target.reset();
                    this.setState({
                        isBlocking: false
                    });
                }}
            >
                <Prompt
                    when={isBlocking}
                    message={location =>
                        `Are you sure you want to go to ${location.pathname}`
                    }
                />

                <p>
                    Blocking?{" "}
                    {isBlocking ? "Yes, click a link or the back button" : "Nope"}
                </p>

                <p>
                    <input
                        size="50"
                        placeholder="type something to block transitions"
                        onChange={event => {
                            this.setState({
                                isBlocking: event.target.value.length > 0
                            });
                        }}
                    />
                </p>

                <p>
                    <button ref="btn" disabled={!this.validButton()}>Submit to stop blocking</button>
                </p>
            </form>
        );
    }
}

export default PreventingTransitionsExample;