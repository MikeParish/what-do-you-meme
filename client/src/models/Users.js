const Users = [
    { Name: 'Mike', Password: '2020', Email: 'm@h.edu' },
    { Name: 'Beck', Password: '2021', Email: 'b@h.edu' },
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;

}
