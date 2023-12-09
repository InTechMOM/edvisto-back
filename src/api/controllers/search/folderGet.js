import Folder from '../../../models/createFolder.js';

const getFolders = async (request, response) => {
  try {
    const { email,folderName } = request.query;

    const filter={
    ...email && {email},
    ...folderName && {folderName}
  };


    const folders = await Folder.find(filter);

    response.status(200).json({ folders });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Error al obtener las carpetas' });
  }
};

export default getFolders;
