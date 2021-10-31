 function greet_user(user) {
        console.log('Hi ' + user.name + ', how are you?');
    }
            
    var user = {
        'name': ""
    }

    try {
        
        if (!user.name) {
            throw 'Name is empty';
        } 
        
        greet_user(user);
        
    } catch (err) {
        console.log(err);
        console.log('Hi guest user, how are you?');
    }
