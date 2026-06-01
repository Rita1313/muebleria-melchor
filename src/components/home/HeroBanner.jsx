import {
  BadgeCheck,
  MessageCircle,
  Store,
} from 'lucide-react'

import './HeroBanner.css'
//Pirmera seccion 
const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2>
          Renueva tu hogar <br />
          con <span>lo mejor</span>
        </h2>

        <p>
          Electrodomésticos y muebles <br />
          que hacen tu vida más fácil
        </p>

        <div className="hero__features">
          <div>
            <BadgeCheck size={30} />
            <span>Productos<br />de calidad</span>
          </div>

          <div>
            <MessageCircle size={30} />
            <span>Atención por<br />WhatsApp</span>
          </div>

          <div>
            <Store size={30} />
            <span>Sin envíos<br />Compra local</span>
          </div>
        </div>
      </div>

      <div className="hero__products">
        <div className="hero__washer"></div>
        <div className="hero__fridge"></div>
        <div className="hero__airfryer"></div>
        <div className="hero__blender"></div>
        <div className="hero__vacuum"></div>
      </div>

      <div className="hero__dots">
        
      </div>
    </section>
  )
}

export default HeroBanner