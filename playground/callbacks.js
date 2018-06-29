var getUser = (id, callback) =>{
  var user = {
    id: id,
    name: 'Roger'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(89, (userObject)=> { //here we define the function that will be called
  console.log(userObject);
});
