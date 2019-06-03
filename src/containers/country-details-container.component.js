import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountry(this.props.params.id))
    }

    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
};

const mapStateToProps = function (store) {
    return {selectedCountry: store.countriesReducer.selectedCountry}
};

export default connect(mapStateToProps)(CountryDetailsContainer);