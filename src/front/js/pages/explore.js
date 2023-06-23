import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Explore = () => {
	const { store, actions } = useContext(Context);
    const [post, setPost] = useState([])

	useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/post/")
          .then((res) => res.json())
          .then((data) => setPost(data))
      }, []);

        console.log(post, "POST")
	return (
		<div className="container">
			{post.length ?  post.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <img src={item.post}/>
                    <Link 
                    to={"/single/" + item.id}>Learn More</Link>
                </div>
            )) : null}
		</div>
	);
};
