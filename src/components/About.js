import React from 'react';
import Rainbow from '../hoc/Rainbow'; // Import of Higher Order Component

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi corporis culpa dolor doloremque dolores eaque, excepturi fuga modi nam necessitatibus nemo possimus quasi quidem repellat similique tempore. Exercitationem, suscipit.</p>
        </div>
    )
};

export default Rainbow(About); // Wrapping About component inside Rainbow component which will allow us to use functionality written inside of Rainbow component