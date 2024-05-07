const express = require("express");
const {
    getAllAlbums,
    getAlbum,
    saveAlbum,
    updateAlbum,
    deleteAlbum
} = require("../controllers/albumController");

const router = express.Router();

// http://localhost:3005/api/albums
router.get("/albums", getAllAlbums);

// http://localhost:3005/api/profile/id
router.get("/profile/:AlbumId", getAlbum);

// http://localhost:3005/api/album
/*
{
    "Title": "{{$randomAlbumName}}""
}
*/
router.post("/albums", saveAlbum);

// http://localhost:3005/api/album/id
/*
{
    ""Title": "{{$randomAlbumName}}"""
}
*/
router.put("/albums/:AlbumId", updateAlbum);

// http://localhost:3005/api/album/id
router.delete("/albums/:AlbumId", deleteAlbum);

module.exports = {
  routes: router
};