import React from 'react';

const Rainbow = (WrapperComponent) => { // WrapperComponent argument will be the component that will be wrapped inside Rainbow component

    // Some functionality which will be used for 'to be supercharged' component
    const colour = ['red', 'blue', 'orange', 'green', 'yellow', 'pink'];
    const randomColour = colour[Math.floor(Math.random() * colour.length)];
    const className = randomColour + '-text';

    return(props) => { // Return function takes in props which will be passed in wrapped component (WrapperComponent) i.e. If About component receives props, those will be passed here as well
        // In order to access passed props and use them, we need to include them as prop using spread operator inside WrapperComponent down belo
        return(
            <div className={className}>
                <WrapperComponent {...props} />
            </div>
        )
    }

};

export default Rainbow;