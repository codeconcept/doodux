import React from 'react';

class DoodEventForm extends React.Component {
    state = {
        title: '',
        place: '',
        note: ''
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        console.log(this.props);
        this.props.addDoodEvent({id: Date.now(), ...this.state, participants: []});
        this.setState({title: '', place: '', note: ''});
    } 

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="titre" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/><br />
                <input type="text" placeholder="lieu" value={this.state.place} onChange={(event) => this.setState({place: event.target.value})} /><br />
                <input type="text" placeholder="note" value={this.state.note} onChange={(event) => this.setState({note: event.target.value})} /><br />
                <button type="submit">créer</button>
            </form>
        );
    }
}

export default DoodEventForm;