const Users = [
    { Name: 'Mike', Password: '2020', Email: 'm@h.edu', userID: 0 },
    { Name: 'Beck', Password: '2021', Email: 'b@h.edu', userID: 1 },
    { Name: 'Bernie', Password: '2022', Email: 'bern@h.edu', userID: 2},
];

module.exports = {
    Login(email, password) {

        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');

        return user;

    },
    Get: (userID) => Users[userID] /*Get is a function, returns user at that index */
}