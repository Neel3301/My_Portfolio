import './Map.scss'

const Map = () => {
  return (
    
    <section className="Map">
      {/* <!-- Background Strip --> */}
      <div className="bg_container">
            <div className="bg_strip"></div>
            <div className="bg_strip"></div>
            <div className="bg_strip"></div>
            <div className="bg_strip"></div>
            <div className="bg_strip"></div>
        </div>
      <div className="text">
        {/* <!-- Nav Title Decoration --> */}
        <div className="title_decoration_container">
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
          <div className="title_decoration"></div>
        </div>

        <h2>New York</h2>
        <p>350 Fifth Avenue between 33rd and 34th Streets <br/> in midtown Manhattan. <br/><br/>Coordinates - 40.7484° N, 73.9857° W</p>
      </div>
    </section>
  )
}

export default Map