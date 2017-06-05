/*
 *
 * LedLanterns
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class LedLanterns extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="LedLanterns" meta={[ { name: 'description', content: 'Description of LedLanterns' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
