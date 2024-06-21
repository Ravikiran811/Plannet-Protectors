import styles from '../issueCSS/comments.module.css';
import React from 'react';
import likes from '../like.png';
import comments from '../comments.png';
import share from '../share.png';
import user from '../user.png';
import {NavLink } from 'react-router-dom';
import {db} from '../firebaseinit';
import { collection,query,orderBy,limit,getDocs, addDoc,deleteDoc ,doc,onSnapshot} from "firebase/firestore"; 
import {useState,useEffect} from 'react';
function Comment(){
    const [remainingComments, setRemainingComments] = useState([]);
    useEffect(() => {
        const fetchComments = async () => {
            const q = query(collection(db, "Comments"), orderBy("likes", "desc"));
            const querySnapshot = await getDocs(q);
            const allComments = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setRemainingComments(allComments.slice(5)); // Exclude top 5 comments
        };

        fetchComments();
    }, []);

    return(
        <>
            <div className={styles.commentborder}>
                {remainingComments.map((comment, i) => (
                    <div className={styles.usercomment} key={comment.id}>
                        <img src={user} style={{margin:'10px',height:'50px',width:'50px'}} alt="user"/>
                        <div style={{width:'80%'}}>
                            <h3>{comment.title}</h3>
                            <p>{comment.content}</p>
                        </div>
                        <img src={likes} className={styles.img1} alt="likes"/>
                        <img src={comments} className={styles.img1} alt="comments"/>
                        <img src={share} className={styles.img1} alt="share"/>
                    </div>
                ))}
                <div className={styles.commentButtons}>
                    <button style={{backgroundColor:'grey'}}> View all Comments</button>
                    <button>Close Comments</button>
                </div>
            </div>
            <NavLink to='/problems/airpollution'>back </NavLink>
        </>
    )
}
export default Comment;