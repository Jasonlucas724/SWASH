/*
 *
 * Products
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Products extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
