import React from 'react';
import '../css/Section.css';

// consider importing SponsorLogo in here and passing props that way for imgs
// good little coding session -> we will do more later

// need to create Hero section -> props title buttonCTA (Call To Action)
// first section of every page/new section

// Section component needs to take a variable num of params
// also, need to try to apply same basic CSS to each instance
// each section has one or more images and one or more sections of
// header or descriptive text...
// this section is smaller, throughout site,
// for text and smaller images
// <Component/> props={Component}
class Section extends React.Component {

    render() {
        return (
            <div className="Section">
                <div className="content title">{this.props.title}</div>
                <div className="content">{this.props.content.map((item) => {
                    return <fragment>{item}</fragment>
                })}</div>
            </div>
        )
    }
}

export default Section;