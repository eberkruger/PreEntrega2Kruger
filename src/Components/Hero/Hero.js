const Hero = ({ greeting, greeting2, description }) => {
     return (
        <div className="heroContainer">
            <h2 className="heroTitle">
                {greeting}
            </h2>
            <h3 className="heroSubTitle">
                {greeting2}
            </h3>
            <p className="heroDescription">
            En nuestra tienda online encontrarás los mejores productos tecnológicos del mercado. Desde smartphones hasta portátiles, tabletas y televisores, todo lo que necesitas para mantenerte conectado y disfrutar de la última tecnología. Descubre nuestra selección de productos y encuentra tu próximo dispositivo favorito. <span>¡Haz tu pedido ahora y comienza a disfrutar!</span>
            </p>
        </div>
     )
}

export default Hero