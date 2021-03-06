(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            createUser: createUser,
            login : login,
            logout: logout,
            loggedIn: loggedIn,
            register: register,
            findUserById: findUserById,
            findUserByUsername : findUserByUsername,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return api;

        function loggedIn() {
            return $http.get("/api/loggedIn");
        }

        function login(username, password) {
            var user = {
                username:  username,
                password:  password
            };
            return $http.post("/api/login",user);
        }

        function logout() {
            return $http.post("/api/logout");
        }

        function register(newUser) {
            var user = {
                username: newUser.username,
                password: newUser.password
            };
            return $http.post("/api/register",user);
        }
        
        function createUser(newUser) {
                var user = {
                    username: newUser.username,
                    password: newUser.password
                };
                return $http.post("/api/user",user);
        }

        function findUserById(id) {
            var url = "/api/user/"+id;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;
            return $http.get(url);
        }

        function findUserByUsernameAndPassword(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;
            return $http.get(url);
        }

        function updateUser(id, newUser) {
            var url = "/api/user/" + id;
            return $http.put(url, newUser);
        }
        
        function deleteUser(userId) {
            var url = "/api/user/" + userId;
            return $http.delete(url);
        }
    }
})();
