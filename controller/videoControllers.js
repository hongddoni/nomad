import {videos} from "../db"

export const home=(req, res) => res.render("home", {pageTitle : "Home", videos});

export const search=(req, res) =>
{
    const{
        query : {term : searchingBy}
    }= req;
    
    res.render("search", {pageTitle:"search", searchingBy});
}
// export const videos=(req, res) => res.render("vid's", {pageTitle : "Video"});

export const uploads=(req, res) => res.render("upload", {pageTitle : "Upload"});

export const videoDetail=(req, res) => res.render("vid detail", {pageTitle : "video_Detail"});

export const editVideo=(req, res) => res.render("edit vid", {pageTitle : "Edit_Video"});

export const deleteVideo=(req, res) => res.render("Del vid", {pageTitle : "Delete video"});

