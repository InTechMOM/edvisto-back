import Folder from '../../../models/createFolder.js';

const deleteFolder = async (request, response) => {
  try {
    const { email, folderName } = request.body;

    // Eliminar la carpeta filtrada por correo y nombre de carpeta
    const result = await Folder.findOneAndDelete({ email, folderName });

    if (!result) {
      return response
        .status(404)
        .json({
          error: 'No se encontró la carpeta especificada para este usuario',
        });
    }

    response.status(200).json({ message: 'Carpeta eliminada correctamente' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Error al eliminar la carpeta' });
  }
};

export default deleteFolder;
