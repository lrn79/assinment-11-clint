import React from 'react';
import './bolg.css'

const BLog = () => {
    return (
        <div className='container mb-5'>
            <div>
                <h3 className='text-center mt-4 fw-bolder'><span className='text-warning h1 fs-1'>Q</span>NA SECTION</h3>
                <div className='container mt-5  blog_container'>
                    <h1>Difference between javascript and nodejs?</h1>
                    <h4 className='mt-3'>Ans : actually node js is an interpreter or running environment for a JavaScript programming language that holds many excesses...which can run javascript program .. But javascript is most popular programming language in the world ..And its actually a genuine programming language ...javascript 	is basically used on the client-side... but node js is used on the server side ..Javascript can run in any browser engine as like JS core in safari and Spider monkey in Firefox... But Node js Cannot run without V8 engine .. Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. But Node js is written in C, C++ and Javascript. </h4>
                </div>
                <div className='container mt-5  blog_container'>
                    <h1>Differences between sql and nosql databases?</h1>


                    <h4 className='mt-3'>Ans : Basically NoSql is Document oreanted language which is not Clean..On the other hand SQL databases are table-based ...SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.SQL programming can be effectively used to insert, search, update, delete database records.NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day...By the Way No SQL is learning friendly and easy..</h4>
                </div>
                <div className='container mt-5  blog_container'>
                    <h1>What other services does firebase provide other than authentication?</h1>
                    <h4 className='mt-3'>actually JWT used for protect data.. JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML... JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server...a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves... Therefor for security we Have to use JWT...
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default BLog;