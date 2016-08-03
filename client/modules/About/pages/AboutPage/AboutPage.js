import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Style
import styles from '../../components/About.css';

// Import Actions
import { loadAbout } from '../../AboutActions';

// Import Selectors
import { getAbout } from '../../AboutReducer';

class AboutPage extends Component {
  componentDidMount() {
    this.props.dispatch(loadAbout())
  }

  render() {
    return (
      <div>
        <Helmet title="About" />
        <div className={styles.container}>
          <h3 className={styles['about-title']}>About</h3>
          <p className={styles['about-desc']}>This is about.</p>
          <hr className={styles.splitter}/>
          <p className={styles['about-desc']}>{this.props.about}</p>
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    about: getAbout(state),
  };
}

AboutPage.propTypes = {
  about: PropTypes.string.isRequired
};

AboutPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(AboutPage);
