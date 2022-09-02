import React from 'react'
import { getCountries } from '../../actions/action'
import { useDispatch } from 'react-redux';

export default function Countries() {
    const dispatch = useDispatch()

    const handleOnclick=()=>{
        dispatch(getCountries())
    }

return (
    
    <div>Countries

        <button type = 'button' onClick = {handleOnclick}>seach</button>

    </div>
    
  )
}
