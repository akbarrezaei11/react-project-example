import './section.css';
import Sectioncard from '../sectionCard/Sectioncard';
function section(){
    let titel = [
        {name:'WEB DESIGN'},
        {name:'WEB DEVELOPMENT'},
        {name:'PHOTOGRAPHY'},
        {name:'RESPONSIVE DESIGN'},
        {name:'GRAPHIC DESIGN'},
        {name:'MARKETING SERVICES'},
    ]
    return(
        <section id="services">
            <div className="container">
              <div className="section-info">
                <h2 className="section-title">SERVICES</h2>
                <p className="section-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="row">
                <Sectioncard {...titel[0]}/>
                <Sectioncard {...titel[1]}/>
                <Sectioncard {...titel[2]}/>
                <Sectioncard {...titel[3]}/>
                <Sectioncard {...titel[4]}/>
                <Sectioncard {...titel[5]}/>
              </div>
            </div>
        </section>
    )
}
export default section