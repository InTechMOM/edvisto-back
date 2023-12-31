import StudentsFeedback from '../../../models/feedback.js';
import isValidObjectId from '../../utils/valid.js';

//Listar
const getCount = async (request, response, next) => {
  try {
    const id = request.params.id; //Id de proyectos (assignmentId)

    isValidObjectId(id);

    //Cantidad de projectos entregados / calificados por asignación
    const qualifiedCount = await StudentsFeedback.countDocuments({
      assignmentId: id,
      qualified: true,
    });

    const totalDocumentsCount = await StudentsFeedback.countDocuments({
      assignmentId: id,
    });

    //Formato deseado
    const resultString = `${qualifiedCount}/${totalDocumentsCount}`;

    return response.status(200).json({
      qualifiedCount,
      totalDocumentsCount,
      resultString,
    });
  } catch (error) {
    if (error.message === 'Id Not Valid') {
      return response.status(400).json({
        message: 'Id Not Valid',
      });
    } else {
      next(error);
    }
  }
};

export default getCount;
