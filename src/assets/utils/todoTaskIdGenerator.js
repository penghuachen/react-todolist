export const todoTaskIdGenerator = () => {
  const date = new Date();
  return date.getTime();
}