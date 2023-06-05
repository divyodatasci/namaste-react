import React from 'react';
import ReactDOM from 'react-dom/client';


// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React");

//React element using JSX 

const jsxHeading = <h1 id='heading'> Hello World From React using JSX </h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);

const Title = () => {
    return (
        <h1 className='head' tabIndex="5">
            Namste React Title !!
        </h1>
    );
}

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className='heading'>
            Namaste React Functional Component container 1
        </h1>
    </div>
);

const HeadingComp2 = () => (
    <>
       <div id="container-2">
            <Title />
            <h1 className='heading'>
                Namaste React Functional Component container 2
            </h1>
        </div>
        <div id="container-3">
            {Title()}
             <Title> </Title>
             <h1 className='heading'>
                 Namaste React Functional Component container 3
            </h1>
        </div>
    </>  
)

const root2 = ReactDOM.createRoot(document.getElementById("root-2"));
root.render(<HeadingComponent/>);
root2.render(<HeadingComp2/>)