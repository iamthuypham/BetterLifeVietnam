import React from 'react';

import '../css/Section.css';

// Section component needs to take a variable num of params
// also, need to try to apply same basic CSS to each instance
// each section has one or more images and one or more sections of
// header or descriptive text...

class Section extends React.Component {

    render() {
        return (
            <div className="Section">Section</div>
        )
    }
}

export default Section;