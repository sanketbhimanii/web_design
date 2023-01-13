import React from 'react'
import './Card.css'
import Book from '../Component/open-book.png'

function card() {
  return (
    <div className='container'>
      <div className=' container_card'>
        
        <div className=' card_header'>
          <div className=' card_detail'>
            <img src={Book} className="card_headerIcone" />
            <h3 className='card_headerTitle'>Total conclusions</h3>
          </div>
          <div>
            <h2 className='card_headerTotal'>
              410
            </h2>
          </div>
        </div>
        
        <div className='detail_box'>
          <div className='card_detail'>
            <div className='card_dot blue_dot' />
            <h3 className='card_boxTitle'>Phone collection</h3>
          </div>
          <div>
            <h2 className='card_boxTotal'>
              200
            </h2>
          </div>
        </div>

        <div className='detail_box'>
          <div className='card_detail'>
            <div className='card_dot cyan_dot' />
            <h3 className='card_boxTitle'>Pre-decaying Loans</h3>
          </div>
          <div>
            <h2 className='card_boxTotal'>
              70
            </h2>
          </div>
        </div>

        <div className='detail_box'>
          <div className='card_detail'>
            <div className='card_dot purpul_dot' />
            <h3 className='card_boxTitle'>Post-decaying Loans</h3>
          </div>
          <div>
            <h2 className='card_boxTotal'>
              110
            </h2>
          </div>
        </div>

        <div className='detail_box'>
          <div className='card_detail'>
            <div className='card_dot amber_dot' />
            <h3 className='card_boxTitle'>Non performing Loans (NPL)</h3>
          </div>
          <div>
            <h2 className='card_boxTotal'>
              30
            </h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default card