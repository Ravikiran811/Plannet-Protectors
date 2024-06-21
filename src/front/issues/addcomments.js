import { useParams } from "react-router-dom";
import { useState } from 'react';
import styles from '../issueCSS/addcomments.module.css';
import { db } from '../firebaseinit';
import { collection, addDoc } from "firebase/firestore"; 

import React from 'react';

function AddComments() {
    const { id } = useParams();
    console.log(id);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        problem: id,  // You can store the problem ID directly in the state
        mobile: "",
        title: "",
        content: "",
        likes :0
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Comments"), {
                title: formData.title,
                content: formData.content,
                name: formData.name,
                email: formData.email,
                password: formData.password,
                problem: formData.problem,
                mobile: formData.mobile,
                likes : 0,
                

            });
            // Reset form data after submission
            setFormData({
                name: "",
                email: "",
                password: "",
                problem: id,
                mobile: "",
                title: "",
                content: ""
                
            });
            alert("Document successfully added!");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <div>
            <header className={styles.header1}>
                <h1>Write your idea to prevent globe</h1>
            </header>
            <div>
                <form className={styles.section} onSubmit={handleSubmit}>
                    <div>
                        <h1>Name</h1>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div>
                        <h1>Email</h1>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <h1>Password</h1>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                        />
                    </div>
                    <div>
                        <h1>Problem</h1>
                        <input
                            name="problem"
                            value={formData.problem}
                            readOnly // Making this read-only as it should not be changed
                        />
                    </div>
                    <div>
                        <h1>Mobile No :-</h1>
                        <input
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter your Mobile Number"
                        />
                    </div>
                    <div>
                        <h1>Title</h1>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter your Title or Heading of your Idea"
                        />
                    </div>
                    <div>
                        <h1>Enter Your Idea</h1>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write a way to prevent the globe"
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddComments;
