export const handle = () => {
  return `This lambda is running on: ${process.env.environment}`;
};
