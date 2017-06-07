export class User {
  public firstName;
  public lastName;
  public email;

  constructor({
                first_name,
                last_name,
                email,
              }) {
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  deserialize() {
    return {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
    };
  }
}
