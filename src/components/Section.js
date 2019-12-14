import React from 'react';
import '../css/Section.css';

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
            // <div className="Section">Section</div>
            <div>
                <div className="title">{this.props.title}</div>
                <div classNme="content">{this.props.content}</div>
            </div>
        )
    }
}

export default Section;