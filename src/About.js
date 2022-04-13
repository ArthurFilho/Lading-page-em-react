import imagemPerfil from "./assetss/Quentin_Tarantino_by_Gage_Skidmore.jpg"

function About(){
    return( <div className="footerxd">
        <img className="pictures" src={imagemPerfil} ></img>
        <div className="description">
        <h3>Quentim Tarantino.</h3>
        <p>Quentin Jerome Tarantino (March 27, 1963) is a director, screenwriter, producer, actor, cinematographer and film critic.</p>
        
        <p>He won two Oscars for Best Original Screenplay and was named the 19th greatest film director of the last 25 years according to a survey by Quartz through Metacritic.</p>
        </div></div>

    )
}



export default About;