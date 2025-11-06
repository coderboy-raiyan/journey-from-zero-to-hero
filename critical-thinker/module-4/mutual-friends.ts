const USER_COUNT = 5000;

let usersA = [];
let usersB = [];

const createUser = (id: number) => ({ id: `user_${id}`, name: `user_${id}` });

for (let i = 0; i <= USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 2000));
}

// Users from 2001 to 5000 common users
//  Used Set Data structure to reduce time to O(n)
type TUsers = ReturnType<typeof createUser>;

const mutualFriends = (usersA: TUsers[], usersB: TUsers[]) => {
  const idListA = new Set(usersA?.map((user) => user.id));
  const mutualFriendsList: TUsers[] = [];

  usersB.forEach((user) => {
    if (idListA.has(user?.id)) {
      mutualFriendsList.push(user);
    }
  });

  return mutualFriendsList.length;
};

console.log(mutualFriends(usersA, usersB));
