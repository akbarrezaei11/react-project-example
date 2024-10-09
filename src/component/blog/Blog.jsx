import './blog.css';
import Blogcol from '../blogCol/Blogcol';
function Blog(){
    let blog =[
        {img:'./img/post-1.jpg' , num:'1'},
        {img:'./img/post-2.jpg' , num:'2'},
        {img:'./img/post-3.jpg' , num:'3'},
    ]
    return(
        <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
            <Blogcol {...blog[0]}/>
            <Blogcol {...blog[1]}/>
            <Blogcol {...blog[2]}/>
        </div>
      </div>
    </section>

    )
}
export default Blog