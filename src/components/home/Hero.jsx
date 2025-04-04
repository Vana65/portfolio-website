import React from 'react'
import Home from '../home/Home'
function Hero() {
  return (
    <>
    <Home/>

    <section className='hero'>
      <div className='hero__container'>
      {home.map((value, i) => (
  <div className='herocontainer' key={i}>
    <h3>{value.text}</h3>
<h1>
<Typewriter
  options={{
    strings: [`${val.name}`, `${val.post}`, `${val.design}`],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
<p>{value.desc}</p>
<button className='primarybtn'>Download CV</button>
    </div>
))}
      </div>
       
    </section>
    </>
  )
}

export default Hero
