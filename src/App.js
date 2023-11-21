import React, { Component } from 'react';

class App extends Component {
    state = {
        person: {
            fullName: "John Doe",
            bio: "Software Developer",
            imgSrc: "path_to_image.jpg",
            profession: "Engineer"
        },
        shows: false,
        timeElapsed: 0
    };

    componentDidMount() {
        this.mountTime = Date.now();
        this.timerID = setInterval(() => {
            this.setState({ timeElapsed: Date.now() - this.mountTime });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    toggleShow = () => {
        this.setState(prevState => ({ shows: !prevState.shows }));
    };

    renderProfile() {
        const { fullName, bio, imgSrc, profession } = this.state.person;
        return (
            <div>
                <h1>{fullName}</h1>
                <p>{bio}</p>
                <img src={imgSrc} alt="Profile" />
                <p>{profession}</p>
            </div>
        );
    }

    render() {
        const { shows, timeElapsed } = this.state;
        return (
            <div className="App">
                <button onClick={this.toggleShow}>Toggle Profile</button>
                {shows && this.renderProfile()}
                <p>Time since mounted: {Math.floor(timeElapsed / 1000)} seconds</p>
            </div>
        );
    }
}

export default App;
