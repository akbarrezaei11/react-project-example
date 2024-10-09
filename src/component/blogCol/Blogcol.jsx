function Blogcol({img , num}){
    return(
        <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src={img} className="img-fluid" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">post title {num}</h3>
                <p className="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">Milad Bahrami</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> 10 min
                </div>
              </div>
            </div>
          </div>
    )
}
export default Blogcol