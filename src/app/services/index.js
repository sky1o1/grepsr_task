export const fetchDataset = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos`);
  return response.json();
};

export const fetchWorkflow = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);
  return response.json();
};

export const fetchDataUsage = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comments`);
  return response.json();
};
