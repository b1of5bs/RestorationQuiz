let selectedQuestions = [];

function startQuiz(numQuestions) {
  const radios = document.getElementsByClassName("option-container");
  //window.console.log(radios);
  for (i=0; i<radios.length; i++) {
    var el = radios[i];
    //window.console.log(el);
    el.classList.remove("hidden");
  }
  selectedQuestions = getRandomQuestions(restorationQuestions, numQuestions);
  main();
}

const restorationQuestions = [

  // Misc. pt 1, questions 1-5

  { // question 1
    question: "Which of these is an example of esoteric doctrine?", 
    options: ["The Family Proclamation", "The purpose of temples", "The location of Kolob", "Missionaries calling home more than twice a year"],
    answer: "The location of Kolob",
  },
  { // question 2
    question: "Who was not one of the three witnesses of the Book of Mormon?", 
    options: ["Hyrum Smith", "Oliver Cowdery", "David Whitmer", "Martin Harris"],
    answer: "Hyrum Smith",
  },
  { // question 3
    question: "Where and when was the first edition of the Book of Mormon published?", 
    options: ["March 1829 in Palmyra, NY", "April 1830 in Fayette, NY", "March 1830 in Palmyra, NY", "April 1829 in Harmony, PA"],
    answer: "March 1830 in Palmyra, NY",
  },
  { // question 4
    question: "Which temple was the first to be dedicated in the Latter days?", 
    options: ["Palmyra, NY", "Kirtland, OH", "Nauvoo, IL", "Far West, MO"],
    answer: "Kirtland, OH",
  },
  { // question 5
    question: "Which people were the first to be taught the gospel outside the United States?", 
    options: ["English", "Canadians", "Native Americans", "Dutch"],
    answer: "Native Americans",
  },

  // Misc. pt 2, questions 6-10

  { // question 6
    question: 'What was the second language the Book of Mormon was translated in after Joseph Smith translated it into English?', 
    options: ["Spanish", "Danish", "German", "French"],
    answer: "Danish",
  },
  { // question 7
    question: "How much time is between Joseph's death and the sustainment of the next prophet?", 
    options: ["18 months", "1 year", "3 months", "3 years"],
    answer: "3 years",
  },
  { // question 8
    question: "How long did it take for the Church to reach 1 million members?", 
    options: ["50 years", "117 years", "83 years", "77 years"],
    answer: "117 years",
  },
  { // question 9
    question: "Nauvoo is not the city's original name. What was it before Joseph Smith changed it?", 
    options: ["Commerce", "Spring River", "Antioch", "Salem"],
    answer: "Commerce",
  },
  { // question 10
    question: "Nauvoo has a translation from Hebrew. What does Nauvoo mean?", 
    options: ["peaceful place", "place of water", "beautiful place", "in the mountains"],
    answer: "beautiful place",
  },

  // Misc. part 3, questions 11-15

  { // question 11
    question: "Polygamy began in the Church by Joseph Smith. Which prophet announced the Manifesto in 1890 that largely ended the practice?", 
    options: [ "Brigham Young", "Wilford Woodruff", "John Taylor", "Heber J Grant"],
    answer: "Wilford Woodruff",
  },
  { // question 12
    question: 'What is the oldest active temple in operation?', 
    options: [ "Nauvoo, Illinois", "Salt Lake City, Utah", "St. George, Utah", "Logan, Utah"],
    answer: "St. George, Utah",
  },
  { // question 13
    question: "Which temple became the first to officiate ordinances in a language other than English?", 
    options: ["Salt Lake City, Utah", "Cardston, Alberta", "Laie, Hawai'i", "Mesa, Arizona"],
    answer: "Mesa, Arizona",
  },
  { // question 14
    question: "The Church once dedicated how many temples on a single day?", 
    options: [ "3", "4", "6", "2"],
    answer: "3",
  },
  { // question 15
    question: "What is the birthdate and birthplace of Joseph Smith?", 
    options: ["December 23, 1805 in Sharon, VT", "December 23, 1801 in Manchester, NY", "December 23, 1805 in Palmyra, NY", "December 23, 1801 in Whitingham, VT"],
    answer: "December 23, 1805 in Sharon, VT",
  },

  // Units 1-3, questions 16-20

  { // question 16
    question: "What is the single purpose or \"grand scheme\" of the Restoration, according to Patrick Mason?", // - Unit 1: Studying LDS Doctrine and History
    options: ["to baptize as many people...as possible", "for everyone...to read the Book of Mormon", "restoring God's people...to wholeness", "Pass on what you have learned"],
    answer: "restoring God's people...to wholeness",
  },
  { // question 17
    question: "Which element of Joseph Smith's First Vision only appears once throughout the various First Vision accounts?", // - Unit 2: The First Vision
    options: ["Joseph's quest for forgiveness of sin", "Unsuccessful effort to get others to believe in the story", "The strange force of opposition", "His searching the scriptures"],
    answer: "Joseph's quest for forgiveness of sin",
  },
  { // question 18
    question: "Which of the following statements best describes the stance of The Church of Jesus Christ of Latter-Day Saints regarding traditional Christian creeds?", // - Unit 2: The First Vision
    options: ["The church fully accepts and teaches the Nicene Creed", "Joseph Smith stated that all the creeds were an abomination in God's sight during the First Vision", "The church's teachings are based primarily on the Apostles' Creed", "The church considers traditional creeds to be supplemental scripture"],
    answer: "Joseph Smith stated that all the creeds were an abomination in God's sight during the First Vision",
  },
  { // question 19
    question: "Which individual was involved in early efforts with Joseph Smith to locate the golden plates and later became a vocal critic of him?", // - Unit 3: The Book of Mormon
    options: ["Samuel Lawrence", "Thomas Marsh", "Luke Johnson", "Willard Chase"],
    answer: "Willard Chase",
  },
  { // question 20
    question: "In the early 19th century, before his prophetic call, how did Joseph Smith's involvement with seer stones intersect with a common practice in his region?", // - Unit 3: The Book of Mormon
    options: ["He used seer stones to predict the weather", "He employed seer stones in treasure hunting endeavors", "He used seer stones to mediate disputes among villagers", "He sold seer stones as popular jewelry"],
    answer: "He employed seer stones in treasure hunting endeavors",
  },

  // Units 4-6, questions 21-25

  { // question 21
    question: "What is the difference between priesthood authority and priesthood keys?", // - Unit 4: Priesthood and Church Organization
    options: ["Priesthood authority is God's power attained through righteousness. Priesthood keys are the authority to direct the use of the priesthood on behalf of God's children.", "Priesthood authority is the authorization to represent God and act in His name. Priesthood keys are divisions of priesthood authority to perform authorized ordinances and administer in the Church.", "Priesthood authority is the authority to direct the use of the priesthood on behalf of God's children. Priesthood keys are only held by the prophet himself.", "Priesthood authority is the authorization to represent God and act in His name. Priesthood keys are the authority to direct the use of the priesthood on behalf of God's children"],
    answer: "Priesthood authority is the authorization to represent God and act in His name. Priesthood keys are the authority to direct the use of the priesthood on behalf of God's children.",
  },
  { // question 22
    question: "According to President McKay, President Faust, and Elder Holland, what is the Church's most distinguishing feature?", // - Unit 4: Priesthood and Church Organization
    options: ["The Book of Mormon", "Latter-day Charities", "The Priesthood", "Temples"],
    answer: "The Priesthood",
  },
  { // question 23
    question: "Which one of these principles is NOT considered in what makes a revelation?", // - Unit 5: The Doctrine and Covenants
    options: ["All revelations are canonized", "Prophets can redine revelation texts. A revelation is malleable, changeable, additionable", "The First Presidency and Quorum of the Twelve Apostles canonize scripture", "Revelations are recieved and expressed in a prophet's language"],
    answer: "All revelations are canonized",
  },
  { // question 24
    question: "According to Sister Julie Beck, what is the single most important skill that can be acquired in this life?", // - Unit 5: The Doctrine and Covenants
    options: ["To always be a missionary", "To rediscover the scriptures, again and again", "Sharing the Book of Mormon with the world", "The ability to qualify for, receive, and act on personal revelation"],
    answer: "The ability to qualify for, receive, and act on personal revelation",
  },
  { // question 25
    question: "What does the planet Kolob symbolize?", // - Unit 6: Additional Scripture
    options: ["What happens in vagueness stays in vagueness", "Jesus Christ", "The glory of God", "Our potential glory if we stay close to Christ"],
    answer: "Jesus Christ",
  },

  // Units 7-9, questions 26-30

  { // question 26
    question: "Is the Law of Consecration in effect today?", // - Unit 7: The Law and The Law of Consecration
    options: ["Yes", "Yes, but only for The First Presidency and the Quorum of the Twelve", "No, the Saints in the early days of the Church didn't follow it so the whole law went away", "No"],
    answer: "Yes",
  },
  { // question 27
    question: "What is the original purpose of the School of the Prophets?", // - Unit 8: Kirtland Revelations
    options: ["For all men of the Church to be trained as future poitical leaders", "To prepare the men of the Church to enter the temple", "A single massive priesthood quorum", "A weekly Sunday School for the First Presidency and Quorum of the Twelve"],
    answer: "Temple Prep for men",
  },
  { // question 28
    question: "What is the \"great and last promise\" or \"promise of the Father\"?", // - Unit 8: Kirtland Revelations, slides 54-60
    options: ["To always be a \"good and faithful servant\" in the Church", "For loved ones already passed away to be resurrected", "To see God", "For your whole family to be saved"],
    answer: "To see God",
  },
  { // question 29
    question: "Which one of these did NOT contribute to the fall of the city of Zion in Missiouri?", // - Unit 9: Zion and The Kirtland Crisis
    options: ["The Saints failed to build the temple", "They gathered too quickly", "They gathered without permission", "They refused to live under Missouri's laws"],
    answer: "They refused to live under Missouri's laws",
  },
  { // question 30
    question: "Which one of these events did NOT happen during the Kirtland Apostasy?", // - Unit 9: Zion and The Kirtland Crisis
    options: ["A meeting was held in the Kirtland Temple to vote out Joseph Smith as Prophet", "The Kirtland Temple was ransacked and destroyed by mobs", "From Nov. 1837- June 1838, 10-15% of the members in Kirtland (200-300 people) became disaffected and left the Church", "In a 9-month period, the Three Witnesses, a member of the First Presidency (Fredrick G. Williams), and four members of the Twelve left the Church. Eventually 8 of the 12 left the Church for a time"],
    answer: "The Kirtland Temple was ransacked and destroyed by mobs",
  },

  // Units 10-14, questions 31-35 

  { // question 31
    question: "When and where was the Relief Society of Nauvoo organized?", // Unit 10, Q31: Nauvoo Teachings and Developments
    options: ["March 17, 1842 in the upper room of the Red Brick Store in Nauvoo", "April 6, 1840 in the upper room of the Nauvoo Temple", "October 2, 1839 in the upper room of the Brigham Young Home", "June 27, 1841 in the upper room of the Joseph Smith Mansion"],
    answer: "March 17, 1842 in the upper room of the Red Brick Store in Nauvoo",
  },
  { // question 32
    question: "On which date was the Manifesto accepted by the Church as authoritative and binding?", // Unit 11, Q32: Eternal and Plural Marriage
    options: ["October 7, 1890", "October 6, 1890", "December 23, 1890", "December 25, 1890"],
    answer: "October 6, 1890",
  },
  { // question 33
    question: "How did the Church of Jesus Christ of Latter-day Saints respond to the martyrdom of Joseph Smith in terms of leadership and direction?", // Unit 12, Q33: The Martyrdom and Succession
    options: ["The Church temporarily halted all activities and missionary work for several years to mourn Joseph Smith's death", "The martyrdom led to the immediate dissolution of the Quorum of the Twelve Apostles, with no clear succession plan in place", "Following Joseph Smith's martyrdom, Brigham Young emerged as a key leader, leading the Saints westward to Utah and maintaining the church's continuity", "The Church leadership decided to fundamentally change its doctrines and practices, moving away from the teachings of Joseph Smith"],
    answer: "Following Joseph Smith's martyrdom, Brigham Young emerged as a key leader, leading the Saints westward to Utah and maintaining the church's continuity",
  },
  { // question 34
    question: "In the context of continuing revelation, which section of the Doctrine and Covenants contains the revelation that extended the priesthood to all worthy male members of The Church of Jesus Christ of Latter-day Saints, regardless of race?", // Unit 13, Q34: Continuing Revelation in the Modern Church
    options: ["Section 136", "The Manifesto", "Official Declaration #2", "Section 138"],
    answer: "Section 138",
  },
  { // question 35
    question: "What is the role of individual members of The Church of Jesus Christ of Latter-day Saints today in the ongoing process of the Restoration of all things?", // Unit 14, Q35: Your Role in the Restoration of All Things
    options: ["Each member plays a vital role in the ongoing Restoration by living the gospel principles, sharing their testimony, participating in temple work, and engaging in continual personal revelation", "Members are primarily observers of the Restoration, with active participation limited to church leadership", "The restoration of all things, or the gathering of Israel, is primarily done by the First Presidency and the Quorum of the Twelve Apostles", "We need to invite all our friends to attend church and be baptized"],
    answer: "Each member plays a vital role in the ongoing Restoration by living the gospel principles, sharing their testimony, participating in temple work, and engaging in continual personal revelation",
  },

  // Beyond 1844 Restoration questions, questions 36-40

  { // question 36
    question: "How does President Nelson's interpretation of Luke 21 about \"Men's hearts failing them \nfor fear\" inform our approach to personal growth and overcoming challenges?", // - a good question
    options: ["To eliminate all fear, we must become flawless and make no mistakes", "Fear is a negative emotion that we should suppress at all costs", "In times of fear and uncertainty, we should remember our identity and purpose, striving for improvement rather than unattainable perfection", "Overcoming fear involves demanding unreasonable expectations of ourselves"],
    answer: "In times of fear and uncertainty, we should remember our identity and purpose, striving for improvement rather than unattainable perfection",
  },
  { // question 37
    question: "What major announcement was made in the Salt Lake Tabernacle on August 28, 1852?", // 
    options: ["The discontinuation of the Law of Consecration due to disobedience", "The official public announcement of the practice of plural marriage (polygamy)", "The introduction of the Word of Wisdom as a mandatory commandment", "The revelation concerning the redemption of the dead and baptism for the dead"],
    answer: "The official public announcement of the practice of plural marriage (polygamy)",
  },
  { // question 38
    question: "Under which Church President did the first radio broadcast of General Conference occur, significantly expanding the reach of the Church's teachings?", // 
    options: ["Wilford Woodruff in 1898", "Lorenzo Snow in 1927", "Heber J Grant in 1924", "Joseph F Smith in 1918"],
    answer: "Heber J Grant in 1924",
  },
  { // question 39
    question: "What significant change regarding full-time missionary service was announced during the presidency of Spencer W. Kimball", // 
    options: ["The establishment of the missionary training center (MTC) in Provo, Utah", "The introduction of the Preach My Gospel manual for missionary work", "Sister missionaries can now serve at 21 instead of 24", "The reduction of full-time missionary service for young men from 24 months to 18 months (later reverted back to 24 months)"],
    answer: "The reduction of full-time missionary service for young men from 24 months to 18 months (later reverted back to 24 months)",
  },
  { // question 40
    question: "Which significant technological initiative was launched by The Church of Jesus Christ of Latter-day Saints during Thomas S. Monson's presidency?", // 
    options: ["The development of the Gospel Library app for scripture study and church materials", "The release and expansion of the FamilySearch website for public access to genealogical records and family history tools", "The introduction of making temple appointments online", "The introduction of online tithing and donation processing"],
    answer: "The release and expansion of the FamilySearch website for public access to genealogical records and family history tools",
  }
];

document.getElementById('startForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var numQuestions = document.getElementById('questions').value;
  startQuiz(numQuestions);

  document.getElementById('startForm').style.display = 'none';
});

function askQuestion(questionData) {
  const questionElement = document.getElementById("question");
  const optionsElements = document.getElementsByClassName("option");
  const radioButtons = document.getElementsByName("answer");

  questionElement.textContent = questionData.question;

  for (let index = 0; index < questionData.options.length; index++) {
    optionsElements[index].textContent = `${index + 1}. ${questionData.options[index]}`;
    radioButtons[index].value = index + 1;
  }
}

function checkAnswer(userAnswer, questionData) {
  return questionData.options[userAnswer - 1] === questionData.answer;
}

function resetAnswerSelection() {
  const radioButtons = document.querySelectorAll('input[name="answer"]');
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
}

function getRandomQuestions(restorationQuestions, numQuestions) {
  for (let i = restorationQuestions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [restorationQuestions[i], restorationQuestions[j]] = [restorationQuestions[j], restorationQuestions[i]];
  }
  return restorationQuestions.slice(0, numQuestions);
}

function main() {
  const totalQuestions = selectedQuestions.length;

  let currentQuestion = 0;
  let correctAnswers = 0;

  const nextButton = document.getElementById("nextButton");

  nextButton.addEventListener("click", () => {
    const userAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (checkAnswer(userAnswer, selectedQuestions[currentQuestion])) {
      correctAnswers++;
    }

    resetAnswerSelection();

    currentQuestion++;

    if (currentQuestion < totalQuestions) {
      askQuestion(selectedQuestions[currentQuestion]);
    } else {
      alert(`Your score is ${correctAnswers}/${totalQuestions}`);
    }
  });

  askQuestion(selectedQuestions[currentQuestion]);
}

document.getElementById("restartQuiz").addEventListener("click", function () {
  location.reload();
});