import routes from "./routes";

export const localMiddleware = (req,res,next)=>{
    res.locals.siteName = "WebTube"
    res.locals.routes = routes;
    next();
}