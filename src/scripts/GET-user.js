
export const getUser = async (id) => {
  return await fetch(`http://localhost:3001/users/${id}`)
    .then((res) => res.json())
};