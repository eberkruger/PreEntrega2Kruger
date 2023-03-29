const Hero = ({ greeting, greeting2 }) => {
     return (
        <div className="heroContainer">
            <h2 className="heroTitle">
                {greeting}
            </h2>
            <h3 className="heroSubTitle">
                {greeting2}
            </h3>
            <p className="heroDescription">
             Descubre nuestra selección de productos y encuentra tu próximo dispositivo favorito. <span>¡Haz tu pedido ahora y comienza a disfrutar!</span>
            </p>
        </div>
     )
}

export default Hero