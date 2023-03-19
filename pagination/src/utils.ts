import { FollowerProps } from "./types";

const paginate = (followers: FollowerProps[]) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
  // testing revert
};

export default paginate;
