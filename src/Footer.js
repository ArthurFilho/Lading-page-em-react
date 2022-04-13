import imagemGithub from "./assetss/github.png"
import ImagemLinkedin from "./assetss/linkedin.png"
import ImagemEmail from "./assetss/novo-envelope-de-email.png"

function Footer(){
    return( <footer className="footers">
    <a href="https://github.com/ArthurFilho"><img src={imagemGithub} width="50px"></img></a>
    <a href="https://www.linkedin.com/in/arthur-filho/"><img src={ImagemLinkedin} width="50px" ></img></a> 
    <a href="mailto:peraarthur2018@gmail.com"> <img src={ImagemEmail} width="50px"></img></a>
</footer>)

}


export default Footer;