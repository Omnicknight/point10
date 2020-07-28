const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
  };
  
  const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
  };

  const faleGrades = {
    0: 0,
    1: 1,
    2: 2,
  };

  const falePrice = {
    [faleGrades[0]]: 1,
    [faleGrades[1]]: 0.95,
    [faleGrades[2]]: 0.9,
  };
  
  const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
  };
  
  function User(name, language, grade = grades.Junior, mistakes = faleGrades[0]) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.final = 0;
    this.mistakes = mistakes;
  
    this.addTask = () => {
      this.tasks++;
    };
  
    /**
     * This method...
     */
    this.finishTask = () => {
      if (this.tasks > 0) {
        this.tasks--;
        this.final++;
        this.salary +=
          (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      };
    };
    this.upgrade = () => {
        if (this.final > 5 && this.final <=10) {
            this.grade = grades.Middle;
        } else if (this.final > 10) {
            this.grade = grades.Senior;
        }
        else {
            console.log('Не хватает задач для поднятия уровня!');
        };
    };
    this.fine = (mist) => {
        this.mistakes = mist;
        this.salary = this.salary * falePrice[this.mistakes];
    };
  };
  
  const user = new User('John', 'C++', grades.Junior);
  const user1 = new User('Vasya', 'Rust', grades.Senior);
  const user2 = new User('Nifertiti', 'Bu', grades.Middle);
  
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();

  console.log(user);
  
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  // user.finishTask();
  // user.finishTask();
  // user.finishTask();
  // user.finishTask();
  // user.finishTask();

  user.upgrade();

  user.fine(2);

  console.log(user);