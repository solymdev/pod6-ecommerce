import React from 'react';
import PropTypes from 'prop-types';
import './filterprices.css';

const FilterPrices = ({
    prices,
    onChange
}) => {
    const handleChange = (e) => {
        onChange(e.currentTarget.value);
    }
    return (
        <table data-testid="prices-radio">
            <tbody>
                {prices.map((price, index) => {
                    index += 1;
                    return (
                        <tr key={index} className="radio-option">
                            <td>
                                <input
                                    data-testid={"prices-radio-" + index}
                                    type="radio"
                                    name="prices"
                                    value={price}
                                    onChange={handleChange}
                                >
                                </input>
                                {price}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

FilterPrices.propTypes = {
    prices: PropTypes.array,
    onChange: PropTypes.func.isRequired,
}


export default FilterPrices;
