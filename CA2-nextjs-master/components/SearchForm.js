// Import Dependencies

import React, { Component } from "react";



export default class SearchForm extends Component {


  constructor(props) {

    super(props);



    this.state = {};

  }


  formSubmitted = event => {

    if (event.target.newsSource.value != "") {

      

      this.props.setNewsSource(event.target.newsSource.value);

    }


    event.preventDefault();

  };


  render() {

    return (

      <div>


        <div id="search">



          <form onSubmit={this.formSubmitted}>


            <input

              name="newsSource"

              placeholder="Search"

              type="text"

            />


            <button>Update News</button>
            <h4> <u><b>Related Articles</b></u></h4>

          </form>

        </div>

      </div>

    );

  }

}