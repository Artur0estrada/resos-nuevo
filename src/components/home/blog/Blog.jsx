import React from "react"
import Blogdata from "./Blogdata"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"

const Blog = () => {
  return (
      <>
        <section className='blog Services'>
          <div className='container topMarign'>
            <div className='heading'>
              <h3>.</h3>
              <h3>.</h3>
              <h3>NOTICIAS MÁS RECIENTES</h3>
              <h1>Descubre sobre nuestros más recientes casos</h1>
            </div>

            <div className='contain grid topMarign'>
              {Blogdata.map((val) => {
                return (
                    <div className='box'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='text'>
                        <span>{val.date}</span>
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                        <a href='/'>
                          Leer Más
                          <KeyboardDoubleArrowRightIcon className='icon' />
                        </a>
                      </div>
                    </div>
                )
              })}
            </div>
          </div>
        </section>
      </>
  )
}

export default Blog
