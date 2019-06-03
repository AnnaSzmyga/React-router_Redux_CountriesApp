import React from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries } from '../actions/actions';

class CountryFlagContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search(e) {
        this.props.dispatch(searchCountries(e.target.value));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);