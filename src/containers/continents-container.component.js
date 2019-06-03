import React from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions';
import CountryFlagList from '../presentational/flag-list.component';

class ContinentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    chooseContinent(e) {
        this.props.dispatch(setContinent(e.target.value));
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    componentDidMount() {
        this.props.dispatch(setContinent('Europa'));
    }

    render() {
        return (
            <div>
                <select onChange={e => this.chooseContinent(e)}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
};

const mapStateToProps = function(store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    };
}

export default connect(mapStateToProps)(ContinentContainer);