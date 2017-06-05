/*
 *
 * Hammicks
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Hammicks extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Hammicks" meta={[ { name: 'description', content: 'Description of Hammicks' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
