const postClubs = async (id) => {
  let response = await fetch(`http://127.0.0.1:1000/api/clubs/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  return response
};

export { postClubs };
