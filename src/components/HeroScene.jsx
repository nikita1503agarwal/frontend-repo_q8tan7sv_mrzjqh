import React from 'react'
import Spline from '@splinetool/react-spline'

function HeroScene() {
  return (
    <div className="spline-wrap">
      <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="spline-gradient pointer-events-none" />
    </div>
  )
}

export default HeroScene
