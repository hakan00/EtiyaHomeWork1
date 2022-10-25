class Admin {
    constructor(adminId, adminName, adminEmail, adminPassword) {
        this.adminId = adminId
        this.adminName = adminName
        this.adminEmail = adminEmail
        this.adminPassword = adminPassword
    };
} 

const admin = new Admin (123,"Mehmet Ozer", "mehmet@hotmail.com ", "123");
console.log(admin);

class Instroctor {
    constructor(instructorId, instructorName, instructorEmail, instructorPassword) {
        this.instructorId = instructorId
        this.instructorName = instructorName
        this.instructorEmail = instructorEmail
        this.instructorPassword = instructorPassword
    };
} 
const instructor1 = new Instroctor (123,"Efe Bozkurt", "efe123@hotmail.com ", "123");
console.log(instructor1);

class User {
    constructor(userId, userName, userEmail, userPassword) {
        this.userId = userId
        this.userName = userName
        this.userEmail = userEmail
        this.userPassword = userPassword
    };
} 
const user1 = new User (123,"Ece Canbey", "ece123@hotmail.com ", "123");
console.log(user1);

class Course {
    constructor(courseId, courseName, courseInstructor ) {
        this.courseId = courseId
        this.courseName = courseName
        this.courseInstructor = courseInstructor;
    };
} 
const angular = new Course (123,"Angular", "Ali Pehlivan ");
console.log(angular);

// Services

class InstroctorService {
   
    addInstroctor(newInstroctor) {
      this.instructor.push(newInstroctor);
    }
  
    deleteInstructor(instructorId) {
      this.instructor.destroy(instructorId);
      
  }
}

class UserService {
   
  addUser(newUser) {
    this.users.push(newUser);
  }
  deleteUser(userId) {
    this.user.destroy(userId);
    
}

 
}


class CourseService {
   
    addCourse(newCourse) {
      this.courses.push(newCourse);
    }
    deleteCourse(courseId) {
        this.course.destroy(courseId);
        
    }
  }