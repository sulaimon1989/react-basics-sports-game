class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }

        this.shotSound = new Audio()
        this.scoresound = new Audio()
    }
    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()
        let random = Math.random()
        if (random > 0.5) {
            score += 1
            setTimeout(() => {
                this.scoresound.play()
            }, 100)

        }

        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }



    render() {
        let shotPercentageDiv
        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            shotPercentageDiv = (
                <div>
                    <strong> Shooting %: {shotPercentage} </strong>
                </div>
            )
        }
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>
                <div className="identity">
                    <img style={{ height: "200px", width: "200px" }} src={this.props.logo} alt={this.props.name} />
                </div>

                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.shots}
                </div>

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>SHOOT !</button>
            </div>
        )
    }
}
function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                    />

                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc }
                    />


            </div>
        </div>

    )
}

function App(props) {
    const manutd = {
        name: "Manchester United",
        logoSrc: "https://manunitedwallpaper.files.wordpress.com/2012/04/manchester-united-logo-82.jpg"
    }

    const chelsea = {
        name: "Chelsea FC",
        logoSrc: "https://i.pinimg.com/originals/87/7b/fc/877bfccabf05aaf7fe626382774a7ee1.jpg"
    }

    const tottenham = {
        name:"tottenham Fc",
        logoSrc:"https://logos-world.net/wp-content/uploads/2020/06/Tottenham-Hotspur-Logo-2013-present.jpg"

    }

    const liverpool = {
        name: "Liverpool Fc",
        logoSrc:"https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/my-context/0001/40/67ea981e58f5be74ecbfcda1da4a1e18d275ff1e.jpeg"
    }

    
    return (
        <div className="App">
            <Game 
            venue="Old Trafford Stadium"
            homeTeam={manutd}
            visitingTeam={chelsea}
            
            />
            <Game venue="Stamford Bridge" 
            homeTeam={tottenham}
            visitingTeam={liverpool}
            />
        </div>

    )
}



// Render the App
ReactDOM.render(
    <App />,
    document.getElementById('root')
)