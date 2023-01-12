import React from 'react'
import Google from '../Login-page/img/google.svg'
import './Demo.css'

function Demo() {
  return (
    <div>
      <div className='property-name'>1.Aspect-ratio
        <img className='aspect-ratio_img' src={Google}>
        </img>
      </div>

      <div className='property-name'>2.Backgrop-filter
        <div class="backdrop_filter">
          <p>Good morning</p>
        </div>
      </div>

      <div className='property-name'>3.Background blend mode
        <div>
          <div class="container">
            <h1>Example text</h1>
          </div>

          <div class="container container--blend">
            <h1>Example text</h1>
          </div>
        </div>
      </div>

      <div className='property-name'>4.Background-size
        <div className='background-size'>
        </div>

      </div>

      <div className='property-name'>5.Block-size
        <div className='block-size'>
          <p>"Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success."

            -- Thomas J. Watson</p>
        </div>
      </div>

      <div className='property-name'>6.Box-reflect
        <div className='box-reflect'>
          <p>"Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success."

            -- Thomas J. Watson</p>
        </div>
      </div>

      <div className='property-name'>7.column-fill,column-fill,column-rule-style,Column-rule-width
        <div className='column-fill'>
          <p class="fill-auto">
            This paragraph fills columns one at a time. Since all of the text can fit in
            the first column, the others are empty."Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success."
          </p>
        </div>
      </div>


    </div>
  )
}

export default Demo