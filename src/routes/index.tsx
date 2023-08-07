
export const onGet = async ({ redirect }) => {
  throw redirect(302, '/blogs');
};
