import React, { Component } from "react";

const options = [
    { value: 'the-irish-times', label: 'the-irish-times' },
    { value: 'cnn', label: 'cnn' },
    { value: 'independent', label: 'independent' },
    { value: 'bbc-news', label: 'bbc-news' },
    { value: 'rte', label: 'rte' },
    { value: 'business-insider', label: 'business-insider' },
    { value: 'financial-times', label: 'financial-times' },
    { value: 'fortune', label: 'fortune' },
    { value: 'TalkSport', label: 'TalkSport' },
    { value: 'espn', label: 'espn' },
    { value: 'bbc-sport', label: 'bbc-sport' },
    { value: 'bleacher-report', label: 'bleacher-report' },
    { value: 'techradar', label: 'techradar' },
    { value: 'the-next-web', label: 'the-next-web' },
    { value: 'hacker-news', label: 'hacker-news' },
    { value: 'ign', label: 'ign' }
  ];

export default class SearchFromSelect extends Component {


    constructor(props) {

        super(props);

        this.state = {
            selectedOption: ""
        };

    }

    handleChange = (selectedOption) => {
        this.props.setNewsSource(selectedOption.value);
        console.log(`Option selected`, selectedOption);
    }


    render() {
        const { selectedOption } = this.state.selectedOption;
        
        return (
            
            <div>


                <div id="search">
                
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />

                </div>

            </div>

        );

    }

}