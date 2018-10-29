import React from 'react';

const Contact = (props) => { // Each component that is in Route will receive default props, we will use one of the prop here to redirect ourselves to about page in 2 seconds from visiting Contact page
    setTimeout(() => {
        props.history.push('/about');
    }, 2000);
  return(
      <div className="container">
          <h4 className="center">Contact</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi corporis culpa dolor doloremque dolores eaque, excepturi fuga modi nam necessitatibus nemo possimus quasi quidem repellat similique tempore. Exercitationem, suscipit.</p>
      </div>
  )
};

export default Contact;