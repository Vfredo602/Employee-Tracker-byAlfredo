const connection = require("./connections");

class DATA {
  constructor(connection) {
    this.connection = connection;
  }

  addDepartment(dept) {
    return this.connection.query("INSERT INTO department SET ?", dept);
  }

  addRoles(roles) {
    return this.connection.query("INSERT INTO role SET ?", roles);
  }

  addEmployee(employee) {
    return this.connection.query("SELECT FROM department SET ?", employee);
  }

  findDepartments() {
    return this.connection.query("SELECT id, name FROM department");
  }

  findRole() {
    return this.connection.query("SELECT id, title, salary, department_id FROM role");
  }

  findEmployees() {
    return this.connection.query("SELECT id, first_name, last_name, role_id, manager_id FROM employee");
  }



  








} 

module.exports = new DATA(connection);
