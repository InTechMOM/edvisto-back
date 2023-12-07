//Esquema de Assignment

/**
 * @openapi
 *  components:
 *   schemas:
 *    AssignmentSchema:
 *     type: object
 *     properties:
 *      emailTeacher:
 *        type: string
 *      course:
 *        type: string
 *      name:
 *        type: string
 *      title:
 *        type: string
 *      description:
 *        type: string
 *      emailStudents:
 *        type: [string]
 *      resourcesURL:
 *        type: string
 *      startDate:
 *        type: date
 *      finishDate:
 *        type: date
 *     required:
 *      - emailTeacher
 *      - name
 *      - title
 *      - description
 *      - emailStudents
 *      - course
 *     example:
 *      emailTeacher: some@example.com
 *      name: Inteligencia Artificial
 *      title: Análisis de datos utilizando inteligencia artificial
 *      description: Desarrollar un modelo de aprendizaje automático que pueda predecir la probabilidad de que un cliente abandone un servicio
 *      emailStudents: [some1@example.com]
 *      course: SegundoA
 *      resourcesURL: [https://www.youtube.com/watch?v=OhEhe2YlzoE]
 *      startDate: "17-11-2023"
 *      finishDate: "27-11-2023"
 */

//Authorization

/**
 * @openapi 
 *  components:
 *   securitySchemes:
 *    bearerAuth:
 *     type: apiKey
 *     in: header
 *     name: Authorization
 *     scheme: bearer
 *     bearerFormat: JWT
 */

//Response

/**
 * @openapi 
 *  components:
 *   responses:
 *    UauthorizedError:
 *     description: Acess token is missing or invalid
 */

//API POST

/**
 * @openapi
 * /api/project:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Allows you to create a certain Project and subsequently assign it to all students in a course
 *    tags: [Assignment]
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/AssignmentSchema'
 *    responses:
 *     201:
 *      description: Assigned Project
 *     400:
 *      description: Bad Request, or Invalid date
 *     401:
 *      $ref: '#/components/responses/UauthorizedError'
 *     404:
 *      description: Unregistered teacher email
 *     422:
 *      description: Validation error
 *     500:
 *      description: Unknown error
 */

// API GET

/**
 * @openapi
 * /api/projects:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Return all Projects
 *    tags: [Assignment]
 *    parameters:
 *     - in: query
 *       name: emailTeacher
 *       description: Query for emailTeacher
 *       schema:
 *         type: string
 *     - in: query
 *       name: course
 *       description: Query for course
 *       schema:
 *         type: string
 *     - in: query
 *       name: title
 *       description: Query for title
 *       schema:
 *         type: string
 *     - in: query
 *       name: name
 *       description: Query for name
 *       schema:
 *         type: string
 *     - in: query
 *       name: emailStudents
 *       description: Query for emailStudents
 *       schema:
 *         type: string
 *    responses:
 *     200:
 *      description: All Projects
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/components/schemas/AssignmentSchema'
 *     400:
 *      description: Something went wrong
 *     401:
 *      $ref: '#/components/responses/UauthorizedError'
 *     404:
 *      description: Project Not Found
 *     500:
 *      description: Unknown error
 */

// API DELETE

/**
 * @openapi
 * /api/project/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete a Projects with their specific ID
 *    tags: [Assignment]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The user id
 *    responses:
 *     200:
 *      description: User
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         items:
 *          $ref: '#/components/schemas/AssignmentSchema'
 *     400:
 *      description: Something went wrong
 *     401:
 *      $ref: '#/components/responses/UauthorizedError'
 *     404:
 *      description: Assignment Not Found
 *     422:
 *      description: Id Not Valid
 *     500:
 *      description: Unknown error
 */
