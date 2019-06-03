import React from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries } from '../actions/actions';

class CountryFlagContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
    }

    render() {
        return (
            <div>
                <CountryFlagList countries={this.props.countries} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);