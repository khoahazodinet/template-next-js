import React, { ChangeEvent } from 'react'
// import dollar from "../../../../assets/images/icon-dollar.svg";
// import person from "../../../../assets/images/icon-person.svg";
import { CalculatorInput } from '@/models/comon'
import styles from '@/components/common/CalculatorInput/styles.module.scss';

export interface CalculatorInputProps{
  handleChange: (e: ChangeEvent<HTMLInputElement>)=>void,
  data: CalculatorInput,
  handleFocus: (e: ChangeEvent<HTMLInputElement>)=>void,
  handleBlur:(e: ChangeEvent<HTMLInputElement>)=>void,
  handleCustomAvailable: (isCustomAvailable: boolean)=>void
}

export interface ITipSelect{
  name: string,
  value: number
}

const CalculatorInputPage = (props : CalculatorInputProps)=>{
  const {
    handleChange,
    data,
    handleFocus,
    handleBlur,
    handleCustomAvailable
  } = props;

  const tipSelection: ITipSelect[] = [
    {
      name: '5%',
      value: 5
    },
    {
      name: '10%',
      value: 10
    },
    {
      name: '15%',
      value: 15
    },
    {
      name: '25%',
      value: 25
    },
    {
      name: '50%',
      value: 50
    },
  ];

  return(
    <div className={styles.content + ' ' + styles.contentLeft}>
      <div className={styles.bill}>
        <label htmlFor="billInput">Bill</label>
        &nbsp;&nbsp;
        <span className={styles.error} id="bill-error" >
          {data.billErr && data.billErrText}
        </span>
        <div className={styles.bill__input}>
          {/*<img src={dollar} alt="dollar-icon"/>*/}
          <input type="text" id="billInput"
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 value={data.bill} name="bill"/>
        </div>
      </div>
      <div className={styles.tip}>
        <label>
          Select Tip % &nbsp;&nbsp;
          <span className={styles.error} id="tip-error" >
            {data.tipErr && data.tipErrText}
          </span>
        </label>
        <div className={styles.items}>
          {tipSelection.map((item, key)=>(
            <div className={styles.item} key={key}>
              <label className={styles.containerInput}>
                <input type="radio" name="tip" onChange={handleChange} value={item.value} />
                <span className={`${styles.checkmark} ${
                  ( data.tip === item.value && !data.isCustomAvailable)
                  && styles.isChecked
                }`}
                      onClick={()=>handleCustomAvailable(false)}
                >{item.name}</span>
              </label>
            </div>
          ))}

          <div className={styles.item} onClick={()=>handleCustomAvailable(true)}>
            {data.isCustomAvailable ?
              (<input
                value={data.tip}
                autoFocus={data.isCustomAvailable}
                onFocus={handleFocus} onBlur={handleBlur}
                type='text' className={styles.inputCustom} name='tip'
                onChange={(e)=>handleChange(e)}/>) :
              (<div className={styles.custom}>
                Custom
              </div>)
            }
          </div>
        </div>
      </div>
      <div className={styles.count__number}>
        <label htmlFor="count-number">
          Number of People &nbsp;&nbsp;
          <span className={styles.error} id="person-count-error" >
            {data.personCountErr && data.personCountErrText}
          </span>
        </label>
        <div className={styles.count__number__input}>
          {/*<img src={person} alt="person-icon"/>*/}
          <input id="count-number" type="text"
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 value={data.personCount} name="personCount" step="0.01"/>
        </div>
      </div>
    </div>
  );
}

export default CalculatorInputPage;
