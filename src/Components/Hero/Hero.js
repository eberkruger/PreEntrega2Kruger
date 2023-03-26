const Hero = ({ greeting, greeting2, description }) => {
     return (
        <div className="heroContainer">
            <h2 className="heroTitle">
                {greeting}
            </h2>
            <h3>
                {greeting2}
            </h3>
            <p>
                {description}
            </p>
        </div>
     )
}

export default Hero