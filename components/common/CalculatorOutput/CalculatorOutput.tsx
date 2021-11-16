import React, { ChangeEvent } from 'react'

import { CalculatorInput, CalculatorOutput } from '@/models/comon'
export interface CalculatorInputProps{
  handleSubmit: ()=>void,
  data: CalculatorInput,
  result: CalculatorOutput,
  handleReset: ()=>void
}

const CalculatorOutputPage = (props: CalculatorInputProps)=>{
  const {
    handleSubmit,
    data,
    result,
    handleReset
  } = props

  return(
    <div className={'content' + ' ' + 'contentRight'}>
      <div className={'contentBox'}>
        <div className={'item' + ' ' + 'tipAmount'}>
          <div className={'label'}>
            <h1>
              Tip Amount
            </h1>
            <span>
              / person
            </span>
          </div>
          <div className={'result'}>
            <h2 id="amount-result">
              {result.amount}
            </h2>
          </div>
        </div>
        <div className={'item' + ' ' + 'total'}>
          <div className={'label'}>
            <h1>
              Total
            </h1>
            <span>
                  / person
                </span>
          </div>
          <div className={'result'}>
            <h2 id="total-result">
              {result.total}
            </h2>
          </div>
        </div>
      </div>
      <div className={'buttonFooter'}>
        <button
          disabled={result.isFetching}
          className={result.isFetching ? 'btnDisabled' : ''}
          onClick={handleSubmit}
          id="submit-button">SUBMIT
        </button>
        <button
          disabled={
            (result.isFetching
            )
          }
          className={
            `${( result.isFetching
              || ((data.bill === 0 || data.bill === '') &&
                (data.personCount===0 || data.personCount==='')
              )) && 'btnDisabled'}`
          }
          onClick={handleReset} type="button">RESET
        </button>
      </div>
    </div>
  )
}

export default CalculatorOutputPage;