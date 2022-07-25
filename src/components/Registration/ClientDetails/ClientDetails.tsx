import React, { useState, useEffect } from 'react'
import { TextInput, Select } from '@mantine/core'
import { useStyles } from './ClientDetails.style'

type Props = {
  strSalutation: string | null,
  setstrSalutation: React.Dispatch<React.SetStateAction<string | null>>,
  strFirstName: string | null,
  setstrFirstName: React.Dispatch<React.SetStateAction<string | null>>,
  strLastName: string | null,
  setstrLastName: React.Dispatch<React.SetStateAction<string | null>>,
  strPhone: string | null,
  setstrPhone: React.Dispatch<React.SetStateAction<string | null>>,
  strEmail: string | null,
  setstrEmail: React.Dispatch<React.SetStateAction<string | null>>,
  strBillingStreet: string | null,
  setstrBillingStreet: React.Dispatch<React.SetStateAction<string | null>>,
  strBillingCity: string | null,
  setstrBillingCity: React.Dispatch<React.SetStateAction<string | null>>,
  strBillingZip: string | null,
  setstrBillingZip: React.Dispatch<React.SetStateAction<string | null>>,
  strShippingStreet: string | null,
  setstrShippingStreet: React.Dispatch<React.SetStateAction<string | null>>,
  strShippingCity: string | null,
  setstrShippingCity: React.Dispatch<React.SetStateAction<string | null>>,
  strShippingZip: string | null,
  setstrShippingZip: React.Dispatch<React.SetStateAction<string | null>>,
}

function ClientDetials({
  strSalutation,
  setstrSalutation,
  strFirstName,
  setstrFirstName,
  strLastName,
  setstrLastName,
  strPhone,
  setstrPhone,
  strEmail,
  setstrEmail,
  strBillingStreet,
  setstrBillingStreet,
  strBillingCity,
  setstrBillingCity,
  strBillingZip,
  setstrBillingZip,
  strShippingStreet,
  setstrShippingStreet,
  strShippingCity,
  setstrShippingCity,
  strShippingZip,
  setstrShippingZip,
}: Props) {
  const { classes } = useStyles();
  const [stateSalutation, setstateSalutation] = useState(strSalutation);
  const [stateFname, setstateFname] = useState(strFirstName);
  const [stateSname, setstateSname] = useState(strLastName);
  const [statePhone, setstatePhone] = useState(strPhone);
  const [stateEmail, setstateEmail] = useState(strEmail);
  const [stateBStreet, setstateBStreet] = useState(strBillingStreet);
  const [stateBCity, setstateBCity] = useState(strBillingCity);
  const [stateBZip, setstateBZip] = useState(strBillingZip);
  const [stateSStreet, setstateSStreet] = useState(strShippingStreet);
  const [stateSCity, setstateSCity] = useState(strShippingCity);
  const [stateSZip, setstateSZip] = useState(strShippingZip);

  const [salutationData, setsalutationData] = useState(['Mr', 'Mrs', 'Ms']);


  useEffect(()=>{console.log(stateFname)},[stateFname])

  const objStyles_salutation = {
    root: classes.salutation_root,
    input: classes.general_input,
  }

  const objStyles_names = {
    root: classes.names_root,
    input: classes.general_input,
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.inputGroup}>
        <Select 
          label='Salutation' 
          data={salutationData}
          placeholder="Select or Type"
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => setsalutationData((current) => [...current, query])}
          value={stateSalutation}
          onChange={(value)=>setstateSalutation(value)}
          variant='filled'
          size='md'
          classNames={objStyles_salutation}
          searchable
          creatable
          clearable
          required
          />

      <TextInput
        placeholder="First Name"
        label="First name"
        variant="filled"
        radius="sm"
        size="md"
        type='text'
        value={(stateFname) ? stateFname : ''}
        onChange={(event)=>setstateFname(event.target.value)}
        classNames={objStyles_names}
        required
        />

      <TextInput
        placeholder="Last Name"
        label="Last name"
        variant="filled"
        radius="sm"
        size="md"
        type='text'
        value={(stateSname) ? stateSname : ''}
        onChange={(event)=>setstateSname(event.target.value)}
        classNames={objStyles_names}
        required
        />

      </div>
    </div>
  )
}

export default ClientDetials