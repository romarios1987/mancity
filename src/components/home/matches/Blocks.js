import React, {Component} from 'react';
import {firebaseMatches} from "../../../firebase";
import {FirebaseLooper} from "../../ui/misc";
import {ReverseArray} from "../../ui/misc";
import MatchesBlock from "../../ui/matches_block";
import Slide from 'react-reveal';

class Blocks extends Component {

    state = {
        matches: []
    };

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value')
            .then((snapshot) => {
                const matches = FirebaseLooper(snapshot);

                this.setState({
                    matches: ReverseArray(matches)
                })

            })
    }

    showMatches = (matches) => (
        matches ?
            matches.map((match) => (
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))
            : null
    );

    render() {
        const {matches} = this.state;
        console.log(matches);

        return (
            <div className="home_matches">
                {this.showMatches(matches)}
            </div>
        );
    }
}

export default Blocks;