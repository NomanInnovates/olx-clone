import React from 'react'
import '../StyleSheet/hero.css'
import bannerImg from '../images/banner.png'
function Hero() {
    return (
        <div className="heroSection">
            <div className="bannerContainer">
                <img src={bannerImg} alt="adsds" />
            </div>
            <div className="addContainer">
                <img 
src="https://firebasestorage.googleapis.com/v0/b/olx-clone-1bdd3.appspot.com/o/adsImg%2Fads.png?alt=media&token=d843b518-34a1-4c3c-bba0-25ee8991f63d"
 alt="ads" />
            </div>
        </div>
    )
}

export default Hero
