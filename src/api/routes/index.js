import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import swaggerSpecification from "../../config/swagger.js";
import  {searchGoogleAcademic}  from "../controllers/search/searchScholarGoogle.js";
import  {searchVideos}  from "../controllers/search/searchVideos.js";
import createFol from "../controllers/search/folderPost.js";
import addLinkToFolder from "../controllers/search/linkPut.js";
import getFolders from "../controllers/search/folderGet.js";
import deleteFolder from '../controllers/search/folderDel.js';

const router = Router();

router.use("/docs", serve);
router.get("/docs", setup(swaggerJsdoc(swaggerSpecification)));

// Search routes
router.get("/scholar", searchGoogleAcademic);
router.get("/youtube", searchVideos);
router.post("/folder", createFol);
router.put("/link", addLinkToFolder);
router.get("/find", getFolders);
router.delete('/folder', deleteFolder);

export default router;
