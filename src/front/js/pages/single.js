import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [post, setPost] = useState({})

	const { id } = useParams();

	useEffect(() => {
        fetch(process.env.BACKEND_URL + "/api/post/" + id)
          .then((res) => res.json())
          .then((data) => setPost(data))
      }, []);

	return (
		<div>
		<h1>{post.title}</h1>
		<img src={post.post}/>
		</div>
	);
};

