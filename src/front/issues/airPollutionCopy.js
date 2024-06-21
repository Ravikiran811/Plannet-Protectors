import React, { useState, useEffect } from 'react';
import styles from '../issueCSS/airPollution.module.css';
import styles1 from '../issueCSS/comments.module.css';
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebaseinit';
import { collection, query, orderBy,onSnapshot, limit, getDocs, where,updateDoc,doc } from "firebase/firestore";
import share from '../share.png';
import user from '../user.png';
import likes from '../like.png';
import comm from '../comments.png';

function AirPollution() {
  const [comments, setComments] = useState([]);
  const [remainingComments, setRemainingComments] = useState([]);
  const [check,setCheck] = useState(true);


  const navigate = useNavigate();
  const { problem } = useParams();
  console.log(problem);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (!problem) {
          console.log("Problem parameter is undefined.");
          return;
        }
  
        console.log("Fetching comments for problem:", problem); // Debug output
        const q = query(collection(db, "Comments"), where("problem", "==", problem), orderBy("likes", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const allComments = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setComments(allComments.slice(0, 5)); // Set the first 5 comments
          setRemainingComments(allComments.slice(5)); // Set the remaining comments
        });
  
        return () => unsubscribe(); // Unsubscribe from real-time updates
      } catch (error) {
        console.error("Error fetching comments: ", error);
      }
    };
  
    fetchComments();
  }, [problem]);
  



  // async function likeChange(e) {
  //   const idi = e.currentTarget.getAttribute('idi');
  //   let value = parseInt(e.currentTarget.getAttribute('value')); 
  //   const docRef = doc(db, "Comments", idi);
  //   value = value + 1;
  //   await updateDoc(docRef, {
  //     likes: value
  //   });
  //   console.log(idi);
  // }
  async function likeChange(e) {
    if(!check){
      return ;
    }
    const idi = e.currentTarget.getAttribute('idi');
    let value = parseInt(e.currentTarget.getAttribute('value')); 
    const docRef = doc(db, "Comments", idi);
    value = value + 1;
    await updateDoc(docRef, {
      likes: value
    });
    const updatedComments = comments.map(comment => {
      if (comment.id === idi) {
        return { ...comment, likes: value };
      }
      return comment;
    });
    setComments(updatedComments);
    setCheck(false);
  }

  return (
    <div className={styles.body}>
      <header className={styles.header1}>
        <h1>Share Your Ideas to Combat {problem} and Save Our Planet</h1>
      </header>
      <main className={styles.body1}>
        <div className={styles.commentborder}>
          <h1 className={styles.topfive}>Top 5 Ideas liked by the Users</h1>
          { comments.length > 0 ? (
            comments.map((comment, i) => (
              <div key={comment.id} className={styles.usercomment} style={{ minHeight: '200px' }}>
                <img src={user} style={{ margin: '20px', height: '50px', width: '50px' }} alt="User" />
                <div style={{ width: '80%' }}>
                  <h3>{comment.title}</h3>
                  <p>{comment.content}</p>
                </div>
                <div className={styles.like}>
                <button className={styles.combutton} idi={comment.id} value={comment.likes} onClick={likeChange}>

                  <img src={likes} className={styles.img1} alt="Likes" />
                  {comment.likes}
                  </ button>
                </div>
                <img src={comm} className={styles.img1} alt="Comments" />
                <img src={share} className={styles.img1} alt="Share" />
              </div>
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </div>
      </main>
      <main className={styles.main2}>
        <h1 style={{ textDecoration: 'underline' }}>Write your Comment about Prevention of Air Pollution</h1>
        <br />
        <Link to={`/problems/addcomments/${problem}`} >
          <button>Add Your Comment </button>
        </Link>
        <h1 style={{ textDecoration: 'underline' }}>Comments from multiple Users</h1>
      </main>
      <div className={styles.commentborder2}>
        {remainingComments.map((comment, i) => (
          <div className={styles.usercomment} key={comment.id}>
            <img src={user} style={{ margin: '10px', height: '50px', width: '50px' }} alt="user" />
            <div style={{ width: '80%' }}>
              <h3>{comment.title}</h3>
              <p>{comment.content}</p>
            </div>
            
            <div className={styles.like1}>
            <button className={styles.combutton}>
                  <img src={likes} className={styles.img2}  alt="Likes" />
                  {comment.likes}
                  </button >
            </div>
            
                <img src={comm} className={styles.img2} alt="Comments" />
                <img src={share} className={styles.img2} alt="Share" />
          </div>
        ))}
        {/* <div className={styles1.commentButtons}>
          <button style={{ backgroundColor: 'grey' }}> View all Comments</button>
          <button>Close Comments</button>
        </div> */}
      </div>
    </div>
  );
}

export default AirPollution;
