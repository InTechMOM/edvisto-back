function authorizationRol(observerUser, response, idToken, refreshToken) {
  console.log(observerUser);
  if (observerUser.rol === 'Soy Profesor') {
    return response
      .status(200)
      .json({
        message: 'Welcome teacher',
        name: observerUser.name,
        lastName: observerUser.lastName,
        id: observerUser._id,
        idToken,
      })
      .header('Authorization', `Bearer ${idToken}`);
  } else {
    return response
      .status(200)
      .json({
        message: 'Welcome student',
        name: observerUser.name,
        lastName: observerUser.lastName,
        course: observerUser.course,
        email: observerUser.email,
        id: observerUser._id,
        idToken,
      })
      .header('Authorization', `Bearer ${idToken}`);
  }
}

export default authorizationRol;
