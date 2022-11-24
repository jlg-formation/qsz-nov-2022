const url = "http://localhost:3000/api/bubbles";

export const getBubbles = async () => {
  const response = await fetch(url);
  const json = await response.json();
  console.log("json: ", json);
  return json;
};
