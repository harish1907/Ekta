import React from 'react'
import InputField from '../components/InputField'
import NavBarType from '../components/NavBarType'
import $ from 'jquery';

export default function Dashboard() {
  $("body").css("display", "block");
  return (
    <div>
      <NavBarType/>
      <label>Search: </label>
      <InputField
        type="text"
        placeholder="Search"
      />
    </div>
  )
}
