import fs from 'fs';
import ejs from 'ejs';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const router = express.Router();

/* 

GET api/post/{postid}

get the data for an existing post

  HEADERS
    authentication ( if post visibility is not public )

RETURNS (obj)

  data
    
  error
    error if present

*/

router.get(["/post/:postID"], (req, res, next) => {
  let postID = req.params.postID;

});

/*

POST api/post/

creates a new post

  HEADERS
    authentication
  
  BODY (obj)
    text
    media (array)
    location
    visibility
    price
    timezone posted from

RETURNS (obj)

  data (obj)
    id (ID of created post)
  error (obj)
    text (error if present)

*/

router.post(["/post"], (req, res, next) => {
  

});

/*

DELETE api/post/{postid}

delete an existing

  HEADERS
    authentication

RETURNS

  data
    deleted (true or false)
  error
    text (error if present)

*/

router.delete(["/post/:postID"], (req, res, next) => {
  let postID = req.params.postID;

});

export default router;