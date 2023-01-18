const person = {
  firstName: 'Brenda',
  lastName: 'Trieu',
  hobby: 'running'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'student';
console.log("The person's current job is:", person.job);

person.previousJob = 'Business Analyst';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
