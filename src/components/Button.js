import React from 'react'
import classNames from 'classnames'

const Button = ({outline,className,children}) => {
    return (

      <button
        onClick={()=>alert('hello')}
        className={classNames('button',className, {'button--outline': outline})}
      >
          {children}
      </button>
    )
}

export default Button

