import React from 'react'
import { Card } from 'antd';
import './card.scss'
const CardHeader = ({handleclikChoose}) =>{
    return(
        <div className='card' style={{ background: '#AFABAB' , height : 0 }}>
            <Card title="Garez vous sur un espace privé et laissez la trappe ouverte" bordered={true} >
              <p>laissez votre véhicule sur un espace privé (domicile, parking , bureau) nous intervenons sans avoir besoin de votre présence en laissant la trappe à essence ouverte</p>
            <div className="cardheader">
         
              <div className="card_choose">
                <div className='card_choose_decline' onClick={()=>handleclikChoose('decliner')}>DECLINEZ  </div>
                <div className='card_choose_accept'onClick={()=>handleclikChoose('accepter')}>ACCEPTER  </div>
            </div>
        </div>  
           
            </Card>
      </div>
    ); 
}

export default CardHeader
