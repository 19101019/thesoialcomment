function SectionFourComponent() {
  return (
    <div>
      <div className="section-four-wrapper container-fluid d-none d-sm-block">
        <div className="imgs">
          <img className="activities_on_map" src={require("assets/svgs/activities_on_map.svg").default} alt="1" />
          <img className="feelings_on_map" src={require("assets/svgs/feelings_on_map.svg").default} alt="1" />
        </div>
        <img className="map" src={require("assets/svgs/world_map.svg").default} alt="1" />
      </div>
      <div className="section-four-wrapper container-fluid mobile d-sm-none">
        <div className="imgs d-flex flex-row">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Sleeping</div>
                    <p className="text">Finally going to sleep after a long delay of work. Phew!</p>
                    <div className="author"><b>@Steve</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Cooking</div>
                    <p className="text">Cooking my favourite white sauce pasta today.</p>
                    <div className="author"><b>@Aisha</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Reading</div>
                    <p className="text">Dan Brown is always my go to author to read.</p>
                    <div className="author"><b>@Lyla</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Playing</div>
                    <p className="text">Fifa 21 <br/> If anyone interested ping me up! Playing with friends is always fun</p>
                    <div className="author"><b>@Dylan</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Watching</div>
                    <p className="text">Gonna spend my night with Tom Cruise. Mission Impossible Marathon is it!!!</p>
                    <div className="author"><b>@Noah</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Current feeling</div>
                    <p className="text">Accidentaly shaved off my brow! ughh...</p>
                    <div className="author"><b>@Anonymous</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Happy</div>
                    <p className="text">Finally managed to get into my dream college. I am so happy!!</p>
                    <div className="author"><b>@Freya</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Music</div>
                    <p className="text">Listening to good music always lifts up my mood.</p>
                    <div className="author"><b>@Eva</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Motivation</div>
                    <p className="text">When you start something new, everyone denies it. But believe in yourself and never stop working on it.</p>
                    <div className="author"><b>@Harvey</b></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <div className="badge">Facts</div>
                    <p className="text">It is estimated there are 400 billion stars in our galaxy. Thats' massive!!</p>
                    <div className="author"><b>@Chris</b></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="map" src={require("assets/svgs/world_map.svg").default} alt="1" />
      </div>
    </div>
  )
}

export default SectionFourComponent;
