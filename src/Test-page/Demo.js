import React from 'react'
import Google from '../Login-page/img/google.svg'
import './Demo.css' 

function Demo() {
  return ( 
    <div className='property-name'> 1.First - child 2.First - of - type 3.last-child 4. last-of-type 5.::first-latter 6.::selector
      <header>
        <p>Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.</p>
        <p>If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.</p>
        <p>My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.</p>
        <h3>Inspiring Quotes</h3>
      </header>
     
      <header>
        <h3>Inspiring Quotes</h3>
        <p>Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.</p>
        <p>If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.</p>
        <p>My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.</p>
      </header>

      <p>direct child of property-name.</p>
      <p>this is also direct child of property-name.</p>

      <div className='container'>
        <p>this is the first paragraph inside the container</p>
        <p>this is the second paragraph inside the container</p>
        <p>this is the third paragraph inside the container</p>
      </div>

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

      <div className='property-name'>
        <a href='https://www.google.com'>Google</a>
        <a href='https://www.instagram.com'>Instagram</a>

        <form>
          <input type='textBox' placeholder='Enter Your Email' required /> <br></br>
          <input type='textBox' placeholder='enter your password' />
        </form>

      </div>

    </div>
    
     



 
    
  )
}

export default Demo 