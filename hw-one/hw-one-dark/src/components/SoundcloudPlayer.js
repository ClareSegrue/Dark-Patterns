import React from 'react';
import "../../styles/App.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      url: ""
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { url },
    } = this;

    return (
      <div className="flex-table" id="gif-container">
        <div>
          <div className="flex-table">
            <div className="main-panel">
              <div className="track" onClick={changeUrl}>
                one
              </div>
              <div className="track">two</div>
              <div className="track">three</div>
              <div className="track">four</div>
              <div className="track">five</div>
              <div className="track">six</div>
              <div className="track">seven</div>
              <div className="track">eight</div>
              <div className="track">nine</div>
              <div className="track">ten</div>
              <div className="track">eleven</div>
              <div className="track">twelve</div>
            </div>
            <div className="left-panel">
              <div className="filter">
                <div className="filter-description">Genre:</div>
                <div className="filter-select">
                  <select>
                    <option value="rock">Rock</option>
                    <option value="alt">Alternative</option>
                    <option value="country">Country</option>
                    <option value="pop">Pop</option>
                  </select>
                </div>
              </div>
              <div className="filter">
                <div className="filter-description">Decade:</div>
                <div className="filter-select">
                  <select>
                    <option value="50">'50s</option>
                    <option value="60">'60s</option>
                    <option value="70">'70s</option>
                    <option value="80">'80s</option>
                    <option value="90">'90s</option>
                    <option value="00">'00s</option>
                    <option value="10">'10s</option>
                    <option value="current">'20s</option>
                  </select>
                </div>
              </div>
            </div>
            <header className="bottom-header">
              <div className="player">
                <ReactPlayer
                  width="100%"
                  height="100px"
                  url={track}
                  backgroundColor="black"
                ></ReactPlayer>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;