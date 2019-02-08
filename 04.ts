interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  // if (isAdmin(usr)) {
  if ('role' in usr) {
    routeToAdminPage(usr.role);
  } else {
    routeToAdminPage(usr.email);
  }
}

function routeToAdminPage(param: string) {
  console.log(param);
}

// function isAdmin(usr: Admin | User): usr is Admin {
//   return (<Admin>usr).role !== undefined;
// }
