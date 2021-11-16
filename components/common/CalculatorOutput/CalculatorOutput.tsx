import React, { ChangeEvent } from 'react'
import styles from './styles.module.scss'

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
    <div className={styles.content + ' ' + styles.contentRight}>
      <div className={styles.contentBox}>
        <div className={styles.item + ' ' +styles.tipAmount}>
          <div className={styles.label}>
            <h1>
              Tip Amount
            </h1>
            <span>
              / person
            </span>
          </div>
          <div className={styles.result}>
            <h2 id="amount-result">
              {result.amount}
            </h2>
          </div>
        </div>
        <div className={styles.item + ' ' + styles.total}>
          <div className={styles.label}>
            <h1>
              Total
            </h1>
            <span>
                  / person
                </span>
          </div>
          <div className={styles.result}>
            <h2 id="total-result">
              {result.total}
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.buttonFooter}>
        <button
          disabled={result.isFetching}
          className={result.isFetching ? styles.btnDisabled : ''}
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
              )) && styles.btnDisabled}`
          }
          onClick={handleReset} type="button">RESET
        </button>
      </div>
    </div>
  )
}

export default CalculatorOutputPage;