import React from 'react';


const Blog = () => {
    return (
        <div className='gray'>
     
          
  <div>
    
  </div>
    <div className="p-5">
  <h2 className=' fw-bold mt-5  text-center'>Question Answer</h2>
     <h3 className='text-2xl font-bold text-center mt-5  mb-5'>1.Tell us the differences between uncontrolled and controlled components.</h3>
        <p className='fs-5'><span className='fs-4  fw-bold'>Ans</span>: <span className='text-decoration-underline fw-bold'>Controlled Component</span> <br />In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. <br /> <span className='text-decoration-underline fw-bold'>Uncontrolled Component</span> <br />Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.
</p>

     <h3 className='text-center mb-5'>2.How to validate React props using PropTypes?</h3>
        <p className=''><span className='fs-4 fw-bold'>Ans</span>:propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</p>

     <h3 className=' text-center mb-5 '>3.Tell us the difference between nodejs and express js.</h3>
        <p className=''><span className='fs-4 fw-bold '>Ans</span>:<span className='text-decoration-underline  fw-bold'>Node JS</span> <br />NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript. <br /> <span className='text-decoration-underline fw-bold'>Express JS</span> <br />Express js is a framework of node js.It  provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. </p>

     <h3 className=' mb-5 font-bold text-center'>4.What is a custom hook, and why will you create a custom hook?</h3>
        <p className=''><span className='fs-4 fw-bold'>Ans</span>:A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. <br /> It can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.Thats why we use custon hook.</p>
        
    </div>
</div>
    );
};

export default Blog;