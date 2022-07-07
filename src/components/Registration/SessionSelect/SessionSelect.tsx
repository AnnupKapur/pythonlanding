import React, { useEffect, useState } from 'react'
import { Accordion, useAccordionState, Button } from '@mantine/core'
import { useStyles } from './SessionSelect.style'
import { SESSIONS } from './../../../constants'
import CardAvailable from './CardAvailable'

type Props = {
  strLessonSelect:string | null,
  setstrLessonSelect: React.Dispatch<React.SetStateAction<string | null>>,
}

const SessionSelect = ({
  strLessonSelect,
  setstrLessonSelect
}: Props) => {
  const { classes } = useStyles();

  const arrDays = 
    SESSIONS
      .map((objSession) => {return objSession.DAY})
      .filter((value, index, array) => {return array.indexOf(value) === index});

  const funcCreateInitialState:any = () => {
    const arrTruth = arrDays.map(()=>true);
    const length = arrDays.length;
    return {
      total: length,
      initialState: {...arrTruth}
    }
  }

  const [state, handlers] = useAccordionState(funcCreateInitialState());

  const funcCreateCards = (strDayName:string) => {
    return SESSIONS.map(objSession => {
      if(objSession.DAY.toLowerCase() === strDayName.toLowerCase()){
        return (
          <CardAvailable 
            key={objSession.PLAN_ID} 
            objSession={objSession}
            sessionIDSelected={strLessonSelect}
            setSessionIDSelected={setstrLessonSelect} 
          />)
      }
    })
  }

  const objAccordianStyles = {
    item: classes.accordian_item,
    itemOpened: classes.accordian_item,
    itemTitle: classes.accordian_itemTitle,
    control: classes.accordian_control,
    label: classes.accordian_label,
    icon: 'your-icon-class',
    // content: classes.accordian_content,
    contentInner: classes.accordian_contentInner,
  }

  return (
    <div className={classes.wrapper}>
      <Accordion initialState={state} onChange={handlers.setState} classNames={objAccordianStyles} multiple={true} offsetIcon={true}>]
      {arrDays.map((strDay, index) => (
        <Accordion.Item key={index} label={strDay}>
          {funcCreateCards(strDay)}
        </Accordion.Item>
      ))}
      </Accordion>
    </div>
    )
}

export default SessionSelect