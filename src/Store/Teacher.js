import { action, computed, makeObservable, observable } from "mobx";

class Teacher {
  fullName = null;
  email = null;
  image = null;
  id = null;

  constructor() {
    makeObservable(this, {
      id: observable,
      fullName: observable,
      email: observable,
      image: observable,
      teacherInfo: computed,
      loginTeacher: action,
      logout: action,
    });
  }

  loginTeacher(fullName, email, image, id) {
    this.fullName = fullName;
    this.email = email;
    this.image = image;
    this.id = id;
  }

  logout() {
    this.fullName = null;
    this.email = null;
    this.image = null;
  }

  get teacherInfo() {
    return {
      fullName: this.fullName,
      email: this.email,
      image: this.image,
    };
  }
}

export default new Teacher();
