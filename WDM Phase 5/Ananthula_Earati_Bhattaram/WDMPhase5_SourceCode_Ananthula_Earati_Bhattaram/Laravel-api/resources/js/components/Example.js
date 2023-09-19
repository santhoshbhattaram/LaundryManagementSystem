import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div>
      <h1 className="margin-align">Welcome to InstaWash</h1>
          <h2 className="margin-align">
        <p className="margin-align">

            Get your clothes washed and delivered in no time
        </p>
        </h2>
        <p className="margin-align">
          InstaWash offers laundry services around Arlington. We offer
          washing,dry cleaning, pressing of all types of clothes/fabrics. We
          offer the best services to our customers with best price around.We
          offer the special discounts for the group for bulk orders. We have a
          variety of detergents, bleaches and softeners of which Customers can
          choose anything of their own choice,with no extra fee.
        </p>

        <div className="margin-align">
          <div className="row">
            <div className="column">
              <div className="card">
                <h3>We clean your clothes with utmost care.</h3>
                <p>
                  {" "}
                  Each wash and fold order is washed and cleaned separately,
                  Also we separate the color clothes from whites to make sure
                  colors don't run on the whites.We have a variety of
                  detergents, bleaches and softeners of which Customers can
                  choose anything of their own choice,with no extra fee.
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card2">
                <h3>We follow the Customer Instructions with utmost care.</h3>
                <p>
                  We carefully follow our customers instructions for cleaning
                  their clothes. We can line-dry clothing or dry on low
                  temperature (additional charges may apply,please feel free to
                  contact us). If your clothes need any kind of special
                  attention, just put them into a separate bag with an
                  explanatory note. Our dry cleaning process uses a non-toxic
                  solvent, not perc, so your clothes come back clean with no
                  chemical odor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
