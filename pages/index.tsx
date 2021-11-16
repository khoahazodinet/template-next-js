import {
  CalculatorInput,
  CalculatorOutput,
  NextPageWithLayout,
} from '@/models/index'
import React, { ChangeEvent } from 'react'
import styles from '@/styles/Home.module.scss'
import { calculatorApi } from '../api-client'
import CalculatorInputPage from '@/components/common/CalculatorInput'
import CalculatorOutputPage from '@/components/common/CalculatorOutput'


const Home: NextPageWithLayout = () => {
  const [data, setData] = React.useState<CalculatorInput>({
    bill: 0,
    billErr: false,
    billErrText: '',

    tip: 0,
    tipErr: false,
    tipErrText: '',

    personCount: 0,
    personCountErr: false,
    personCountErrText: '',

    isCustomAvailable: false,
    fetchResponseErr: false,
    fetchResponseErrText: '',
  })

  const [result, setResult] = React.useState<CalculatorOutput>({
    amount: '00.00',
    total: '00.00',
    isFetching: false,
    fetchResponseErr: true,
    fetchResponseErrText: '',
  })

  const setError = () => {
    const isBillTrue = data.bill === 0 || data.bill === ''
    const isPersonTrue = data.personCount === 0 || data.personCount === ''
    setData({
      ...data,
      billErr: isBillTrue,
      billErrText: isBillTrue ? 'Bill must be add' : 'Bill must be greater than 0',
      personCountErr: isPersonTrue,
      personCountErrText: isBillTrue ? 'Number of person must be add' :
        'Number of person must be greater than 0',
    })
  }

  const isValidateTrue = () => {
    return !(data.bill === 0 || data.bill === '' ||
      data.personCount === 0 || data.personCount === '')
  }


  const handleSubmit = () => {
    setError()

    if (!isValidateTrue()) return
    setResult({
      ...result,
      amount: '--.--',
      total: '--.--',
      isFetching: true,
    })
    calculatorApi.get(data).then((res) => {
      setResult({
        ...result,
        amount: res.amount.toFixed(2).toString(),
        total: res.total.toFixed(2).toString(),
        isFetching: false,
      })
    }).catch(() => {
      setResult({
        ...result,
        isFetching: false,
        fetchResponseErr: true,
        fetchResponseErrText: 'Fetch Data Error',
      })
    })
  }

  const handleReset = () => {
    setData({
      bill: 0,
      billErr: false,
      billErrText: '',

      tip: 0,
      tipErr: false,
      tipErrText: '',

      personCount: 0,
      personCountErr: false,
      personCountErrText: '',

      isCustomAvailable: false,
      fetchResponseErr: false,
      fetchResponseErrText: '',
    })
    setResult({
      amount: '00.00',
      total: '00.00',
      isFetching: false,
      fetchResponseErr: true,
      fetchResponseErrText: '',
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name
    const value: string = e.target.value
    const max = 999999999
    // @ts-ignore
    const nameErr: 'billErr' | 'tipErr' | 'personCountErr' = name + 'Err'
    const decimalValue: number | '' = value === '' ? value :
      parseFloat(value.split('.')[1])
    const re = name === 'personCount' ? /^[0-9]*$/ : /^[0-9]*\.?[0-9]*$/

    // if value is not blank, then test the regex
    if (re.test(value) || value === '') {
      if (decimalValue > 99 && decimalValue !== '') return
      if ((parseFloat(value) <= max || value === '')) {
        setData({
          ...data,
          [name]: value ? value : '',
          [name + 'Err']: false,
          [name + 'ErrText']: '',
        })
      } else {
        if (data[nameErr]) return
        setData({
          ...data,
          [`${name}Err`]: true,
          [`${name}ErrText`]: `Max number is 999 999 999`,
        })
      }
    }
  }
  const handleFocus: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    // @ts-ignore
    const name: 'bill' | 'tip' | 'personCount' = e.target.name
    const value = e.target.value

    setData(rev => ({
      ...data,
      [name]: parseFloat(value) === 0 ? '' : rev[name],
    }))
  }

  const handleBlur: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    // @ts-ignore
    const name: 'bill' | 'tip' | 'personCount' = e.target.name
    const value = e.target.value

    setData(rev => ({
      ...data,
      [name]: value === '' ? 0 : rev[name],
    }))
  }

  const handleCustomAvailable: (isAvailable: boolean) => void = (isAvailable) => {
    if (data.isCustomAvailable === isAvailable) return
    setData({
      ...data,
      tip: 0,
      isCustomAvailable: isAvailable,
    })
  }

  return (
    <div className={styles.homePage}>
      <section className={styles.mainContainer}>
        {/*logo*/}
        <h3 style={{ color: 'red', marginTop: '20px' }}
        >{data.fetchResponseErrText}</h3>
        <div id='form-submit'
             className={styles.calculator}
        >
          {/*content left*/}
          <CalculatorInputPage handleChange={handleChange}
                               data={data}
                               handleFocus={handleFocus}
                               handleBlur={handleBlur}
                               handleCustomAvailable={handleCustomAvailable} />

          {/*content right*/}
          <CalculatorOutputPage handleSubmit={handleSubmit}
                                handleReset={handleReset}
                                data={data} result={result} />
        </div>
      </section>
    </div>
  )
}

export default Home
