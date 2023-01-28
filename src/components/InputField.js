import React from 'react'

export default function InputField(props) {

  const styles = {
    inputStyle: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      fontSize: '1em',
      padding: '10px 15px',
    }
  }
  return (
    <div className="input-box">
      <input 
        style={styles.inputStyle} 
        type={props.type} 
        name={props.name} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        maxLength={props.maxLength}
      />
    </div>
  )
}
