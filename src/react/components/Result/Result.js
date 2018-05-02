import React from 'react'
import PropTypes from 'prop-types'

import './result.css'
import YearResult from '../YearResult'

const Result = ({
  getCashFlowForYear,
  getCashOnCashReturnForYear,
  getEquityAfterYears,
  getInvestmentAfterYears
}) => (
  <div className='result'>
    <h2>Live Results</h2>
    <p>Initial Investment: { getInvestmentAfterYears(0) }</p>
    <p>Initial Equity: { getEquityAfterYears(0) }</p>
    <YearResult
      getCashFlowForYear={ getCashFlowForYear }
      getCashOnCashReturnForYear={ getCashOnCashReturnForYear }
      year={ 1 }/>
  </div>
)

Result.propTypes = {
  getCashFlowForYear: PropTypes.func.isRequired,
  getCashOnCashReturnForYear: PropTypes.func.isRequired,
  getEquityAfterYears: PropTypes.func.isRequired,
  getInvestmentAfterYears: PropTypes.func.isRequired
}

export default Result