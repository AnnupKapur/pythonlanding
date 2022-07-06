import React from 'react'
import { Card, Group, Text, Badge } from '@mantine/core'
import { useStyles } from './CardAvailable.style'

type Props = {
  objSession: Record<string, any>,
  sessionIDSelected: string | null,
  setSessionIDSelected: Function,
}

const CardAvailable = ({
  objSession,
  sessionIDSelected,
  setSessionIDSelected,
}: Props) => {
  const { classes } = useStyles();
  const seatsAvailable = objSession.SEATS.TOTAL - objSession.SEATS.BOOKED - (sessionIDSelected===objSession.PLAN_ID ? 1 : 0);
  const objLength = {
    hours : Math.floor(objSession.LENGTH/60),
    mins: objSession.LENGTH%60,
  }

  const objBadgeStyles = {
    root:classes.badge_root,
  }

  const funcFormatMins = (intMins:number) => ('0'+intMins).slice(-2)

  const funcCreateTime = () => {
    const intHours = (objSession.HOUR > 11 ? objSession.HOUR-12 : objSession.HOUR);
    const strAmPm = (objSession.HOUR > 11 ? 'pm' : 'am');
    return (
      <div className={classes.time}>
        <div className={classes.time_numbers}>
          {`${intHours}:${funcFormatMins(objSession.MINS)}`}
        </div>
        <div className={classes.time_AmPm}>
          {strAmPm.toUpperCase()}
        </div>
      </div>
    )
  }

  const funcSelectCard = () => {
    if(sessionIDSelected===objSession.PLAN_ID){
      setSessionIDSelected(null);
    } else {
      if(seatsAvailable>0){
        setSessionIDSelected(objSession.PLAN_ID)
      }
    }
  }

  return (
    <Card onClick={funcSelectCard} p='lg' radius='sm'
      className={(sessionIDSelected===objSession.PLAN_ID )? classes.wrapperSelected : classes.wrapper}>
      {funcCreateTime()}
      <Badge classNames={objBadgeStyles} leftSection={<div className={classes.badge_LeftSection}>{seatsAvailable}</div>}>spaces available</Badge>

      {(seatsAvailable===0 && sessionIDSelected !== objSession.PLAN_ID) && (
        <div className={classes.fullybooked}>SESSION FULL</div>
      )}
    </Card>
  )
}

export default CardAvailable