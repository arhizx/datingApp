export default function buildMakeUser({ validate, encrypt }) {
  return function makeUser({
    name,
    email,
    password,
    location,
    gender,
    age,
    img,
    bio,
    interests,
    id,
  }) {
    console.log(validate);

    const errors = validate(
      name,
      email,
      password,
      location,
      gender,
      age,
      img,
      bio,
      interests,
      id
    );

    if (Object.keys(errors).length) {
      console.log(errors);
      throw new Error("invalid user fields");
    }
    password = encrypt(password);
    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
      getPassword: () => password,
      getLocation: () => location,
      getGender: () => gender,
      getAge: () => age,
      getImg: () => img,
      getBio: () => bio,
      getInterests: () => interests,
      getId: () => id,
    });
  };
}
