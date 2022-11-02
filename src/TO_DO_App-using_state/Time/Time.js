import React from 'react'


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export default function Time() {
    let today = new Date()
    let date = today.getDate().toLocaleString();
    let year = today.getFullYear()
    let month = today.getMonth();
    let monthName = monthNames[month];


  return (
    <>
   {
    `${monthName} ${date}, ${year}`
   }
    </>
  )
}
