import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

function FooterBanner({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image}}) {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
        <p style={{fontSize: "30px"}}>{discount}</p>
          <h3>Flash</h3>
          <h3>SALE</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          {/* <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p> */}
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image" alt="" />
      </div>
    </div>
  )
}

export default FooterBanner