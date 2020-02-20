import React, { Component } from 'react';
import { getMovie } from '../actions/MovieActions';
import { Form, FormControl, Button } from 'react-bootstrap';

class MovieSearch extends Component {
    state = {
        searchTitle: '',
        result: {},
        loading: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        getMovie(this.state.searchTitle) //importerat från actions
            .then(res => //för asynk! Väntar på svar, sen sätter den state
                this.setState({ result: res.data, loading: false })
            );
    }

    handleChange = (e) => {
        this.setState({ searchTitle: e.target.value });
    }

    render() {
        console.log(this.state.result);
        return (
            <section>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl
                        className='todo-input'
                        type="text"
                        value={this.state.searchTitle}
                        placeholder="Sök film"
                        onChange={this.handleChange}
                        
                    />
                    <Button type='submit'>Sök</Button>
                </Form>
                {
                    this.state.loading ?
                    <div>Hämtar film...</div>
                    :
                    <MovieInfo movie={this.state.result}/>
                }
                
            </section>
        )
    }
}

const MovieInfo = ({movie}) => {
    return (
        <div>
            <div>Titel: {movie.Title}</div>
            <div>År: {movie.Year}</div>
            <div>Skådespelare: {movie.Actors}</div>
            <div>Rating: {movie.imdbRating}</div>
            <div>
                <img src={movie.Poster} />
            </div>
        </div>
    )
}

export default MovieSearch;