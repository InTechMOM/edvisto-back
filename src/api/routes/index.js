import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import swaggerSpecification from "../../config/swagger.js";
import { searchGoogleAcademic } from "../controller/searchScholarGoogle.js";
import { searchVideos } from "../controller/searchVideos.js";
import createFol from "../controller/folderPost.js";
import addLinkToFolder from "../controller/linkPut.js";
import getFolders from "../controller/folderGet.js";

const router = Router();

router.use("/docs", serve);
router.get("/docs", setup(swaggerJsdoc(swaggerSpecification)));

// Search routes
router.get("/scholar", searchGoogleAcademic);
router.get("/youtube", searchVideos);
router.post("/folder", createFol);
router.put("/link", addLinkToFolder);
router.get("/find", getFolders);

export default router;
