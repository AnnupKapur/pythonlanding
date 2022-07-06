import React, { useEffect, useState } from 'react'
import { Stepper, Button, ActionIcon } from '@mantine/core'
import { FcMindMap, FcManager, FcApproval } from 'react-icons/fc'
import { useStyles } from './Registration.style';
import { useParams, useNavigate } from 'react-router-dom'
import SessionSelect from './SessionSelect'

/*
data: {
  customer: {
    display_name : `${req.query.client_first_name} ${req.query.client_last_name}`,
    salutation: req.query.salutation,
    first_name: req.query.client_first_name,
    lase_name: req.query.client_last_name,
    email : req.query.client_email,
    billing_address: {
      street: req.query.billing_address_street,
      city: req.query.billing_address_city,
      zip: req.query.billing_address_zip,
    },
    shipping_address:{
      street:req.query.shipping_address_street,
      city: req.query.shipping_address_city,
      zip: req.query.shipping_address_zip,
    },
    payment_terms: 1,
    payment_terms_label: 'Due on receipt',
  },
  plan:{
    plan_code: req.query.plan_code,
  },
  starts_at:req.query.start_date,
  redirect_url:req.query.redirect_url,
},
*/

type Props = {}

function Registration({}: Props) {
  const {strStep} = useParams();
  const navigate = useNavigate();
  const intStepPosition = parseInt(strStep||'0');
  const [stepPosition, setstepPosition] = useState(intStepPosition);
  const [strLessonSelect, setstrLessonSelect] = useState<string | null>(null);
  const [strSalutation, setstrSalutation] = useState<string | null>(null);
  const [strFirstName, setstrFirstName] = useState<string | null>(null);
  const [strLastName, setstrLastName] = useState<string | null>(null);
  const [strEmail, setstrEmail] = useState<string | any>(null);
  const [strBillingStreet, setstrBillingStreet] = useState<string | any>(null);
  const [strBillingCity, setstrBillingCity] = useState<string | any>(null);
  const [strBillingZip, setstrBillingZip] = useState<string | any>(null);
  const [strShippingStreet, setstrShippingStreet] = useState<string | any>(null);
  const [strShippingCity, setstrShippingCity] = useState<string | any>(null);
  const [strShippingZip, setstrShippingZip] = useState<string | any>(null);

  const { classes } = useStyles();

  const objStepClasses = {
    root: classes.stepperRoot,
    steps: classes.stepper,
    step: classes.step,
    stepProgress: classes.stepProgress,
    separator: classes.step,
    stepLabel: classes.stepLabel,
    content: classes.stepContent,
  }

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        className={classes.closeButton}
        color="cyan"
        size="xl"
        radius="xl"
        variant="hover"
        onClick={()=>navigate('/', {replace:true})}
        >
        X
      </ActionIcon>
      <Stepper
        active={stepPosition}
        onStepClick={setstepPosition}
        classNames={objStepClasses}
        >

        <Stepper.Step
          classNames={objStepClasses}
          label='Select a session'
          allowStepSelect={stepPosition>0}
        >
          <SessionSelect 
            strLessonSelect={strLessonSelect}
            setstrLessonSelect={setstrLessonSelect}
          />

          {strLessonSelect && (
          <div className={classes.buttonContainer}>
            <Button>Confirm Selection</Button>
          </div>
          )}
        </Stepper.Step>

        <Stepper.Step
          classNames={objStepClasses}
          label='Select a session'
          allowStepSelect={stepPosition>1}
        >
          Uno
        </Stepper.Step>

        <Stepper.Step
          classNames={objStepClasses}
          label='Select a session'
          allowStepSelect={stepPosition>2}
        >
          Uno
        </Stepper.Step>
      </Stepper>
    </div>
  )
}

export default Registration