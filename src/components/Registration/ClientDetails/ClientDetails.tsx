import React from 'react'

type Props = {
  strSalutation: string | null,
  setstrSalutation: React.Dispatch<React.SetStateAction<string | null>>,
  strFirstName: string | null,
  setstrFirstName: React.Dispatch<React.SetStateAction<string | null>>,
  strLastName: string | null,
  setstrLastName: React.Dispatch<React.SetStateAction<string | null>>,
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
  return (
    <div>ClientDetials</div>
  )
}

export default ClientDetials