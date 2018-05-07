import { expect } from 'chai'

import {
  getAfterRepairValue,
  getAmortizationPeriod,
  getAnnualConstantExpensesGrowth,
  getAnnualIncomeGrowth,
  getAnnualPropertyValueGrowth,
  getClosingCosts,
  getDownPayment,
  getOtherInitialCosts,
  getPurchasePrice,
  getRepairCosts
} from '../../src/utils/stateGetters'
import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_CAP_EX,
  INPUT_ID_CITY,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_COUNTRY,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_ELECTRICITY,
  INPUT_ID_GARBAGE,
  INPUT_ID_HOA,
  INPUT_ID_INSURANCE,
  INPUT_ID_INTEREST_RATE,
  INPUT_ID_LOAN_AMOUNT,
  INPUT_ID_MANAGEMENT,
  INPUT_ID_MORTGAGE,
  INPUT_ID_NEIGHBORHOOD,
  INPUT_ID_OTHER_EXPENSES,
  INPUT_ID_OTHER_INCOME,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_POSTAL_OR_ZIP_CODE,
  INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
  INPUT_ID_PROPERTY_TAX,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_PROVINCE_OR_STATE,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_REPAIR_COSTS,
  INPUT_ID_REPAIRS_AND_MAINTENANCE,
  INPUT_ID_SQUARE_FEET,
  INPUT_ID_STREET_ADDRESS,
  INPUT_ID_UNIT_NUMBER,
  INPUT_ID_VACANCY,
  INPUT_ID_WATER_AND_SEWER,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_GENERAL_INFO,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../../src/constants'

const AFTER_REPAIR_VALUE = 140000.25
const AFTER_REPAIR_VALUE_STRING = '140000.25'
const AMORTIZATION_PERIOD = 25
const AMORTIZATION_PERIOD_STRING = '25'
const ANNUAL_CONSTANT_EXPENSES_GROWTH = 3.25
const ANNUAL_CONSTANT_EXPENSES_GROWTH_STRING = '3.25'
const ANNUAL_INCOME_GROWTH = 2.25
const ANNUAL_INCOME_GROWTH_STRING = '2.25'
const ANNUAL_PROPERTY_VALUE_GROWTH = 1.25
const ANNUAL_PROPERTY_VALUE_GROWTH_STRING = '1.25'
const CLOSING_COSTS = 3000.25
const CLOSING_COSTS_STRING = '3000.25'
const DOWN_PAYMENT = 20000.25
const DOWN_PAYMENT_STRING = '20000.25'
const OTHER_INITIAL_COSTS = 250.25
const OTHER_INITIAL_COSTS_STRING = '250.25'
const PURCHASE_PRICE = 100000.25
const PURCHASE_PRICE_STRING = '100000.25'
const REPAIR_COSTS = 25000.25
const REPAIR_COSTS_STRING = '25000.25'

const DEFAULT_INPUT_CONTENT = {
  [TITLE_GENERAL_INFO]: {
    [INPUT_ID_NEIGHBORHOOD]: 'A Neighborhood',
    [INPUT_ID_STREET_ADDRESS]: '1090 Real Street',
    [INPUT_ID_UNIT_NUMBER]: '1204',
    [INPUT_ID_CITY]: 'Seattle',
    [INPUT_ID_PROVINCE_OR_STATE]: 'Washington',
    [INPUT_ID_COUNTRY]: 'United States',
    [INPUT_ID_POSTAL_OR_ZIP_CODE]: 'T6G 1S9',
    [INPUT_ID_SQUARE_FEET]: '1200'
  },
  [TITLE_INITIAL_PURCHASE]: {
    [INPUT_ID_PURCHASE_PRICE]: PURCHASE_PRICE_STRING,
    [INPUT_ID_DOWN_PAYMENT]: DOWN_PAYMENT_STRING,
    [INPUT_ID_LOAN_AMOUNT]: '80000.25',
    [INPUT_ID_INTEREST_RATE]: '6.25',
    [INPUT_ID_AMORTIZATION_PERIOD]: AMORTIZATION_PERIOD_STRING,
    [INPUT_ID_AFTER_REPAIR_VALUE]: AFTER_REPAIR_VALUE_STRING,
    [INPUT_ID_REPAIR_COSTS]: REPAIR_COSTS_STRING,
    [INPUT_ID_CLOSING_COSTS]: CLOSING_COSTS_STRING,
    [INPUT_ID_OTHER_INITIAL_COSTS]: OTHER_INITIAL_COSTS_STRING
  },
  [TITLE_MONTHLY_INCOME]: {
    [INPUT_ID_RENTAL_INCOME]: '1800.25',
    [INPUT_ID_OTHER_INCOME]: '250.25'
  },
  [TITLE_MONTHLY_EXPENSES]: {
    [INPUT_ID_MORTGAGE]: '800.25',
    [INPUT_ID_ELECTRICITY]: '25.25',
    [INPUT_ID_WATER_AND_SEWER]: '50.25',
    [INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]: '75.25',
    [INPUT_ID_GARBAGE]: '100.25',
    [INPUT_ID_HOA]: '0.25',
    [INPUT_ID_INSURANCE]: '125.25',
    [INPUT_ID_PROPERTY_TAX]: '1.25',
    [INPUT_ID_VACANCY]: '2.25',
    [INPUT_ID_REPAIRS_AND_MAINTENANCE]: '3.25',
    [INPUT_ID_CAP_EX]: '4.25',
    [INPUT_ID_MANAGEMENT]: '5.25',
    [INPUT_ID_OTHER_EXPENSES]: '6.25'
  },
  [TITLE_FUTURE_PROJECTIONS]: {
    [INPUT_ID_PROPERTY_VALUE_GROWTH]: ANNUAL_PROPERTY_VALUE_GROWTH_STRING,
    [INPUT_ID_ANNUAL_INCOME_GROWTH]: ANNUAL_INCOME_GROWTH_STRING,
    [INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH]: ANNUAL_CONSTANT_EXPENSES_GROWTH_STRING
  }
}

describe('utils/stateGetters', () => {
  describe('getAnnualConstantExpensesGrowth', () => {
    it('returns proper value', () => {
      expect(getAnnualConstantExpensesGrowth(DEFAULT_INPUT_CONTENT))
        .to
        .equal(ANNUAL_CONSTANT_EXPENSES_GROWTH)
    })
  })
  describe('getAfterRepairValue', () => {
    it('returns proper value', () => {
      expect(getAfterRepairValue(DEFAULT_INPUT_CONTENT))
        .to
        .equal(AFTER_REPAIR_VALUE)
    })
  })
  describe('getAnnualPropertyValueGrowth', () => {
    it('returns proper value', () => {
      expect(getAnnualPropertyValueGrowth(DEFAULT_INPUT_CONTENT))
        .to
        .equal(ANNUAL_PROPERTY_VALUE_GROWTH)
    })
  })
  describe('getAnnualIncomeGrowth', () => {
    it('returns proper value', () => {
      expect(getAnnualIncomeGrowth(DEFAULT_INPUT_CONTENT))
        .to
        .equal(ANNUAL_INCOME_GROWTH)
    })
  })
  describe('getAmortizationPeriod', () => {
    it('returns proper value', () => {
      expect(getAmortizationPeriod(DEFAULT_INPUT_CONTENT))
        .to
        .equal(AMORTIZATION_PERIOD)
    })
  })
  describe('getDownPayment', () => {
    it('returns proper value', () => {
      expect(getDownPayment(DEFAULT_INPUT_CONTENT))
        .to
        .equal(DOWN_PAYMENT)
    })
  })
  describe('getRepairCosts', () => {
    it('returns proper value', () => {
      expect(getRepairCosts(DEFAULT_INPUT_CONTENT))
        .to
        .equal(REPAIR_COSTS)
    })
  })
  describe('getClosingCosts', () => {
    it('returns proper value', () => {
      expect(getClosingCosts(DEFAULT_INPUT_CONTENT))
        .to
        .equal(CLOSING_COSTS)
    })
  })
  describe('getOtherInitialCosts', () => {
    it('returns proper value', () => {
      expect(getOtherInitialCosts(DEFAULT_INPUT_CONTENT))
        .to
        .equal(OTHER_INITIAL_COSTS)
    })
  })
  describe('getPurchasePrice', () => {
    it('returns proper value', () => {
      expect(getPurchasePrice(DEFAULT_INPUT_CONTENT))
        .to
        .equal(PURCHASE_PRICE)
    })
  })
})