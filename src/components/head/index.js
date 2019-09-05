import React, { Fragment } from 'react'

import './head.scss'


const Head = ()=> {

    return (
      <Fragment >
        <div>
          <img className='head_image' src='../../../images/menu.png'/>
        </div>
        <div className="msg">
          <strong>Page de test</strong>
        </div>
      </Fragment>
    )
  
}

export default  Head
