import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
            <div className="social">
                <a href="https://www.aluracursos.com">
                    <img src="/img/facebook.png" alt="" />
                </a>
                <a href="https://www.aluracursos.com">
                    <img src="/img/twitter.png" alt="" />
                </a>
                <a href="https://www.aluracursos.com">
                    <img src="/img/instagram.png" alt="" />
                </a>
                <a href="https://www.aluracursos.com">
                    <img src="/img/linkedin.png" alt="" />
                </a>
            </div>
            <strong>Desarrollado por Wuilderman Berrios</strong>
        </footer>
    )
}