import React from 'react'

export default ({url, active}) => (
    <img className={active && "is-active"} src={url} alt='sample data'/>
)