## Stories
- [X]  `api/users` has CRUD functionality

## TO DO
- [X] make a basic express app
- [X] add a database
- [X] add the user model
- [X] seed data to view all of the users
- [X] add a route for the user model
- [X] allow users to be added 
- [X] delete user functionality 
- [X] update user functionality
- [X] create controllers

### ROUTES
<table>
    <tr>
        <td>List all users</td>
        <td>`/users`</td>
    </tr>
    <tr>
        <td>List one user</td>
        <td>`/users/:username`</td>
    </tr>
    <tr>
        <td>Create new user</td>
        <td>`/users`</td>
    </tr>
    <tr>
        <td>Update user info</td>
        <td>`/users/:id`</td>
    </tr>
    <tr>
        <td>Delete user</td>
        <td>`/users/:id`</td>
    </tr>
</table>


router.get('/', userController.list);
router.get('/:username', userController.retrieve);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);