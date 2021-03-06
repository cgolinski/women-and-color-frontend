import React, { PropTypes } from 'react'
import SpeakerCard from './SpeakerCard'
import css from './styles.css'

const Home = (props) => {
  return (
    <div className="container">

      <div className="row">
          <div className="col-lg-3">

            <h2 className={css.sidebarTitles}>CITY</h2>
              <ul className="list-unstyled">
                <li className={css.sidebarObject}>all cities</li>
                <li className={css.sidebarObject}>montreal</li>
                <li className={css.sidebarObject}>ottawa</li>
                <li className={css.sidebarObjectSelected}>toronto</li>
                <li className={css.sidebarObject}>vancouver</li>
              </ul>

            <div className={css.sidebarTitles}>SELF-IDENTITY</div>
              <ul className="list-unstyled">
                <li className={css.sidebarObjectSelected}>all speakers</li>
                <li className={css.sidebarObject}>woman</li>
                <li className={css.sidebarObject}>woman of color</li>
                <li className={css.sidebarObject}>person of color</li>
              </ul>
          </div>

          <div className="col-lg-9">
            <div className={css.contentTitles}>{'Speakers in Toronto for all topics'}</div>
            <div className="speakers-list">
              {
                props.speakers.map((speaker, index) => (
                  <SpeakerCard speaker={speaker} key={index} />
                ))
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home;
