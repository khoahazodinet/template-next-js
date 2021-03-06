import React, { ChangeEvent } from 'react'
import { CalculatorInput } from '@/models/comon'
import dollar from '@/public/icon-dollar.svg'
import person from '@/public/icon-person.svg'
import Image from 'next/image'

export interface CalculatorInputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  data: CalculatorInput,
  handleFocus: (e: ChangeEvent<HTMLInputElement>) => void,
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void,
  handleCustomAvailable: (isCustomAvailable: boolean) => void
}

export interface ITipSelect {
  name: string,
  value: number
}

const CalculatorInputPage = (props: CalculatorInputProps) => {
  const {
    handleChange,
    data,
    handleFocus,
    handleBlur,
    handleCustomAvailable,
  } = props

  const tipSelection: ITipSelect[] = [
    {
      name: '5%',
      value: 5,
    },
    {
      name: '10%',
      value: 10,
    },
    {
      name: '15%',
      value: 15,
    },
    {
      name: '25%',
      value: 25,
    },
    {
      name: '50%',
      value: 50,
    },
  ]

  const checkTip: (item: ITipSelect)=> string  = (item) => {
    if(data.isCustomAvailable) return '';
    if(parseFloat(data.tip as string)===item.value) return 'isChecked';
    return '';
  }

  return (
    <div className={'content' + ' ' + 'contentLeft'}>
      <div className={'bill'}>
        <label htmlFor='billInput'>Bill</label>
        &nbsp;&nbsp;
        <span className={'error'} id='bill-error'>
          {data.billErr && data.billErrText}
        </span>
        <div className={'bill__input'}>
          <Image src={dollar} alt="dollar-icon" />
          <input type='text' id='billInput'
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 value={data.bill} name='bill' />
        </div>
      </div>
      <div className={'tip'}>
        <label>
          Select Tip % &nbsp;&nbsp;
          <span className={'error'} id='tip-error'>
            {data.tipErr && data.tipErrText}
          </span>
        </label>
        <div className={'items'}>
          {tipSelection.map((item, key) => (
            <div className={'item'} key={key}>
              <label className={'containerInput'}>
                <input type='radio' name='tip' onChange={handleChange} value={item.value} />
                <span className={'checkmark' + ' ' + checkTip(item)}
                      onClick={() => handleCustomAvailable(false)}
                >{item.name}</span>
              </label>
            </div>
          ))}

          <div className={'item'} onClick={() => handleCustomAvailable(true)}>
            {data.isCustomAvailable ?
              (<input
                value={data.tip}
                autoFocus={data.isCustomAvailable}
                onFocus={handleFocus} onBlur={handleBlur}
                type='text' className={'inputCustom'} name='tip'
                onChange={(e) => handleChange(e)} />) :
              (<div className={'custom'}>
                Custom
              </div>)
            }
          </div>
        </div>
      </div>
      <div className={'count__number'}>
        <label htmlFor='count-number'>
          Number of People &nbsp;&nbsp;
          <span className={'error'} id='person-count-error'>
            {data.personCountErr && data.personCountErrText}
          </span>
        </label>
        <div className={'count__number__input'}>
          <Image src={person} alt="person-icon"/>
          <input id='count-number' type='text'
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 value={data.personCount} name='personCount' step='0.01' />
        </div>
      </div>
    </div>
  )
}

export default CalculatorInputPage
