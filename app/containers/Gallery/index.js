/*
 *
 * Gallery
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Gallery extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Gallery" meta={[ { name: 'description', content: 'Description of Gallery' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
