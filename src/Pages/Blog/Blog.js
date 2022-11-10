import React from 'react';
import useTitle from '../../UseTitle/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>

            <div className='max-w-5xl m-auto text-justify'>
                <p className='text-center text-4xl font-bold  p-10'>Lets have some study on JS React basics.</p>
                <p className='text-2xl font-bold pb-4 pl-4'><span>Que:01</span> Difference between SQL and NoSQL </p>     
                <p className='text-xl p-4 '><span className='font-bold'>Ans:</span> From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies. </p>


                <p className='text-2xl font-bold p-4'><span>Que:02</span> What is JWT, and how does it work?</p>
                <p className='text-xl p-4 '><span className='font-bold'>Ans:</span> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. 

                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. </p>


                <p className='text-2xl font-bold p-4'><span>Que:03</span> What is the difference between javascript and NodeJS?
                </p>
                <p className='text-xl p-4 '><span className='font-bold'>Ans:</span>  <br />
                <span className='font-bold'> Node: </span> 
                For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. It may run on various operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing highly scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O. <br /> <br />
                <span className='font-bold'> Javascript: </span> Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js. <br />
                   </p>


                <p className='text-2xl font-bold p-4'><span>Que:04</span> How does NodeJS handle multiple requests at the same time? </p>
                <p className='text-xl p-4 '><span className='font-bold'>Ans:</span> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

  </p>
            </div>
            
        </div>
    );
};

export default Blog;