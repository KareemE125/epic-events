import { useRouter } from 'next/router'
import React from 'react'

export default function EventDetails() {
  const router =  useRouter();
  const id = router.query.id;
  const city = router.query.city;
  return (
    <div>EventDetails {city} {id}</div>
  )
}
