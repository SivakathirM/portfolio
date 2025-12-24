export default function Container(){
    return (
    <div className="container">
        <section className="introction">
            <div className="details">
                <h2>Hello <span>.</span></h2>
                <h4> I'm Sivakathir </h4> 
                <h1> Software Developer</h1>   
                <div className="resume">
                    <button>Get a project?</button>
                    <button>My resume</button>
                </div>
            </div>
            <div className="image">
            </div>
        </section>
        <section className="language">
            <div>HTML</div>
            <div>CSS</div>
            <div>Javascript</div>
            <div>Node.js</div>
            <div>React</div>
            <div>Git</div>
            <div>Github</div>
        </section>
        <section className="about-me">
            <div className="devlopment">
                <div><i className="fa fa-file-code-o"></i>Website Development</div>
                <div><i className="fa fa-mobile"></i>      App Development</div>
                <div><i className="fa fa-cloud-upload"></i>Website Hosting</div>
            </div>
            <div className="me">
                <div className="about">
                    <h1>About me</h1>
                    <p>I started my software from photography. Through that, I learned to love the process of creating from scratch, Since then, this has led me to software development as it fulfills my love for learning and building thing.</p>
                </div>
                <div className="number">
                    <div>
                        <h1 className="num-one">120</h1>
                        <p>Completed Project</p>
                    </div>
                    <div>
                        <h1 className="num-two">95</h1>
                        <p>Client satifaction</p>
                    </div>
                    <div>
                        <h1 className="num-three">10</h1>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}