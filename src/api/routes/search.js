import { Router } from 'express';
import { searchGoogleAcademic } from '../controllers/search/searchScholarGoogle.js';
import { searchVideos } from '../controllers/search/searchVideos.js';
import createFol from '../controllers/search/folderPost.js';
import addLinkToFolder from '../controllers/search/linkPut.js';
import getFolders from '../controllers/search/folderGet.js';
import deleteFolder from '../controllers/search/folderDel.js';

const searchRouter = Router();

// Search routes
searchRouter.get('/scholar', searchGoogleAcademic);
searchRouter.get('/youtube', searchVideos);
searchRouter.post('/folder', createFol);
searchRouter.put('/link', addLinkToFolder);
searchRouter.get('/find', getFolders);
searchRouter.delete('/folder', deleteFolder);

export default searchRouter;
