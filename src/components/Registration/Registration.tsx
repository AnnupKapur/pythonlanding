import React, { useEffect, useState } from 'react'
import { Stepper, Button } from '@mantine/core'
import { FcMindMap, FcManager, FcApproval } from 'react-icons/fc'
import { useStyles } from './Registration.style';
import { useParams } from 'react-router-dom'

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
    step: classes.step,
  }

  return (
    <div className={classes.wrapper}>
      <Stepper active={stepPosition} onStepClick={setstepPosition}>

        <Stepper.Step
          classNames={objStepClasses}
          label='Select a session'
          allowStepSelect={stepPosition>0}
        >
          Uno
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