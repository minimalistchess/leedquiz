// Shuffle function to randomize question order.
// Rest of your quiz code...
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    {
        question: "A LEED AP is tasked with registering a Core and Shell project that has a large retail space at the ground floor and office spaces on the 2nd, 3rd, and 4th floors. How should the LEED AP proceed with the rating system selection?",
        options: [
            "A. Register using two rating systems, LEED BD+C: Retail and LEED BD+C: Core and Shell.",
            "B. Use the 40/60 rule, based on gross floor area for each type of space.",
            "C. Choose one rating system based on which helps the project achieve the highest certification level.",
            "D. Prepare a CIR to ask which rating system is more appropriate for his project."
        ],
        answer: "C. Choose one rating system based on which helps the project achieve the highest certification level."
    },
    {
        question: "Which one of the following LEED terms is used for streamlining the approach to particular needs, constraints, and opportunities of different project types?",
        options: [
            "A. Credit interpretation rulings (CIRS)",
            "B. Addenda",
            "C. Adaptations",
            "D. Alternative compliance paths (ACPs)"
        ],
        answer: "C. Adaptations"
    },
    {
        question: "A project team needs clarification for a unique project condition for a credit and a prerequisite that are unrelated. Which one of the following actions should the team take?",
        options: [
            "A. Submit one CIR for both the credit and prerequisite questions.",
            "B. Submit one CIR for the credit and another CIR for the prerequisite.",
            "C. Submit one CIR for the prerequisite and do not pursue the credit.",
            "D. Submit one CIR for the credit and wait for design review comments for the prerequisite."
        ],
        answer: "B. Submit one CIR for the credit and another CIR for the prerequisite."
    },
    {
        question: "What must be done to comply with IP Prerequisite-Integrative Project Planning and Design for a Healthcare project?",
        options: [
            "A. A minimum 4-hour integrative design charrette must be conducted.",
            "B. This prerequisite must be started before the schematic design phase begins.",
            "C. At least three team members, including the owner or owner's representative, must be included on the integrated project team.",
            "D. A commissioning agent (CXA) must be included on the integrated project team.",
            "E. A basis of design (BOD) document must be prepared."
        ],
        answer: "B. This prerequisite must be started before the schematic design phase begins."
    },
    {
        question: "A project team for a healthcare facility has completed an integrative design charrette and is preparing documents for design review. What should the team submit to document IP Prerequisite Integrative Project Planning and Design?",
        options: [
            "A. A narrative explaining how the health mission statement addresses the credit requirements and a plan of action.",
            "B. Findings from water and energy analyses.",
            "C. A simple box energy modeling analysis.",
            "D. Meeting minutes as documented proof that the budget, schedule, and functional programmatic requirements, health mission statement, credits to target, and the LEED certification level were discussed."
        ],
        answer: "D. Meeting minutes as documented proof that the budget, schedule, and functional programmatic requirements, health mission statement, credits to target, and the LEED certification level were discussed."
    },
    {
        question: "Which of the following does an integrative design charrette meant to achieve IP Prerequisite-Integrative Project Planning and Design for a Healthcare project accomplish? (select 3)",
        options: [
            "A. Informs the OPR document.",
            "B. Initiates development of the project's health mission statement.",
            "C. Includes the contractor and facilities manager in the charrette.",
            "D. Reduces building material toxins.",
            "E. Identify recyclable waste streams."
        ],
        answer: ["A. Informs the OPR document.", "B. Initiates development of the project's health mission statement.", "E. Identify recyclable waste streams."]
    },
    {
        question: "For IP Credit-Integrative Process, which of the following need to be assessed by the simple box energy modeling analysis prior to completion of schematic design? (select 3)",
        options: [
            "A. Makeup water demands.",
            "B. Estimated rainfall.",
            "C. Basic building envelope attributes.",
            "D. Lighting levels.",
            "E. Thermal comfort ranges."
        ],
        answer: ["A. Makeup water demands.", "C. Basic building envelope attributes.", "D. Lighting levels."]
    },
    {
        question: "Which of the following need to be addressed in the water budget analysis for IP Credit-Integrative Process? (select 3)",
        options: [
            "A. The water required by both the building and the associated grounds.",
            "B. Landscape irrigation.",
            "C. Cooling tower and appliance water use.",
            "D. HVAC sizing.",
            "E. Window-to-wall ratios."
        ],
        answer: ["A. The water required by both the building and the associated grounds.", "B. Landscape irrigation.", "C. Cooling tower and appliance water use."]
    },
    {
        question: "What does a project team need to submit to document IP Credit-Integrative Process?",
        options: [
            "A. The USGBC's Integrative Process worksheet (energy and water analysis tabs).",
            "B. A detailed energy simulation based on ASHRAE 90.1-2010.",
            "C. A narrative explaining each step in the project team's process.",
            "D. A report with research findings from the discovery stage.",
            "E. A list of project team members who were not included in the integrative process and the reasons why."
        ],
        answer: "A. The USGBC's Integrative Process worksheet (energy and water analysis tabs)."
    },
    {
        question: "A project team is working on scheduling coordination of energy and water systems for IP Credit-Integrative Process. When would it be ideal to address this?",
        options: [
            "A. After construction.",
            "B. During design development.",
            "C. Before schematic design.",
            "D. After conceptual design."
        ],
        answer: "C. Before schematic design."
    },
    {
        question: "Which one of the following steps should be taken in the discovery phase for water-related systems to earn Credit-Integrative Process?",
        options: [
            "A. Initiate OPR.",
            "B. Identify at least one nonpotable water supply source to offset at least two water demand components.",
            "C. Conduct a simple box energy modeling analysis.",
            "D. Identify low-flow plumbing fixtures to reduce water use more than 20% over the baseline."
        ],
        answer: "B. Identify at least one nonpotable water supply source to offset at least two water demand components."
    },
    {
        question: "A developer is considering four different sites and would like to choose one that is ideal for achieving LEED Gold certification. Which one of the following sites is the most ideal for achieving LT Credit-LEED for Neighborhood Development Location?",
        options: [
            "A. A site with Stage 1 LEED for Neighborhood Development Pre-reviewed Plan (LEED ND Pilot).",
            "B. A site with Stage 3 LEED for Neighborhood Development Certified Project (LEED ND Pilot).",
            "C. A site with LEED for Neighborhood Development Conditional Approval (LEED v4).",
            "D. A site with Stage 1 Conditional Approval of LEED ND Plan (LEED 2009)."
        ],
        answer: "B. A site with Stage 3 LEED for Neighborhood Development Certified Project (LEED ND Pilot)."
    },
    {
        question: "An international project team is trying to determine whether a project site is located on sensitive land. How should they proceed?",
        options: [
            "A. By checking the Natural Resources Conservation Service website.",
            "B. By consulting with a qualified biologist or ecologist.",
            "C. By referencing the U.S. Code of Federal Regulations.",
            "D. By reviewing information from the Natural Heritage Program."
        ],
        answer: "B. By consulting with a qualified biologist or ecologist."
    },
    {
        question: "On a previously developed site with a water body on the property, which minor improvements are allowed in the water-body buffer? (select 3)",
        options: [
            "A. Removal of trees 6 in. (150 mm) in diameter at breast height.",
            "B. A 10 ft (3 m) wide impervious walking path.",
            "C. Grade changes to ensure access for all users.",
            "D. Maintenance shed.",
            "E. Clearance of 600 ft (56 m) for a picnic area.",
            "F. Bike pathways."
        ],
        answer: ["A. Removal of trees 6 in. (150 mm) in diameter at breast height.", "C. Grade changes to ensure access for all users.", "F. Bike pathways."]
    },
    {
        question: "Which findings during an environmental site assessment would earn a project LT Credit-High-Priority? (select 2)",
        options: [
            "A. Only a portion of the site has contaminated soils due to a gas station previously located on site.",
            "B. On-site groundwater containing high levels of toxic chemicals.",
            "C. A historic building on an infill site that contains walls with lead-based paints.",
            "D. A building that contains finishes with asbestos.",
            "E. An adjacent property with contaminated soils."
        ],
        answer: ["B. On-site groundwater containing high levels of toxic chemicals.", "C. A historic building on an infill site that contains walls with lead-based paints."]
    },
    {
        question: "A project team is trying to determine whether a historic building is on an infill site. When determining the infill status of the potential site, which elements should be included?",
        options: [
            "A. Streets.",
            "B. Landscaped areas.",
            "C. Rights-of-way.",
            "D. Water bodies."
        ],
        answer: "A. Streets."
    },
    {
        question: "A project team is pursuing 2 points under LT Credit-Surrounding Density and Diverse Uses. Which one of the following should be included in the documentation?",
        options: [
            "A. An area map showing the project's location, eight existing and publicly available diverse uses, and walking routes from the main entrance to each use.",
            "B. A narrative explaining the walking distances from the project's main entrance to 10 existing and publicly available diverse uses.",
            "C. A map showing diverse uses within the LEED boundary.",
            "D. A map showing the project's location and five existing and publicly available diverse uses within a 4-mile radius."
        ],
        answer: "A. An area map showing the project's location, eight existing and publicly available diverse uses, and walking routes from the main entrance to each use."
    },
    {
        question: "Which of the following could be counted as an eligible diverse use to achieve LT Credit-Surrounding Density and Diverse Uses?",
        options: [
            "A. A grocery store located within a 2-mile radius (800 m) of the project site.",
            "B. A planned bank located in the project building that will be operational within 6 months of the project's initial certificate of occupancy.",
            "C. A metro station within ½-mile walking distance from the project site.",
            "D. A bicycle network with 200 ft walking distance from the project site."
        ],
        answer: "C. A metro station within ½-mile walking distance from the project site."
    },
    {
        question: "Which one of the following should be submitted to document quality transit for all BD+C project types?",
        options: [
            "A. An area plan or map showing the project site and location of transit stop locations within a ½-mile (400 m) radius of the project site.",
            "B. A map showing the project site, location, type of transportation resources, and driving distances to each location.",
            "C. A map showing the project, project boundary, transit stop locations, walking routes, and distances to those stops.",
            "D. An area plan or map showing the project site and location of transit stop locations within a 2-mile (800 m) radius of the project site."
        ],
        answer: "A. An area plan or map showing the project site and location of transit stop locations within a ½-mile (400 m) radius of the project site."
    },
    {
        question: "Based on the following transit service summary for a project pursuing LT Credit-Access to Quality Transit, which statement is correct?\n\nTransit Type\nWeekday Trips\nSaturday Trips\nSunday Trips\n\n0\n50\n14",
        options: [
            "A. The light rail service does not provide enough weekend trips.",
            "B. The commuter rail would be counted as having no weekend trips.",
            "C. The light rail service does not provide enough weekday trips.",
            "D. The commuter rail weekend trips can be averaged to meet the minimum requirement and determine the number of points."
        ],
        answer: "B. The commuter rail would be counted as having no weekend trips."
    },
    {
        question: "A Schools project is located within a 1½-mile walking distance for 714 students in grades 9-12. The school is expected to have 1200 students when complete. The school has built two walking and biking routes. The school has a busing system that uses 7 buses. What is true about the project's ability to earn LT Credit Access to Quality Transit?",
        options: [
            "A. The project would need the city to put a public bus stop next to the school entrance.",
            "B. The project has earned 1 point with the credit.",
            "C. The project would need to add two more buses.",
            "D. The project would need to provide discount public bus passes for students."
        ],
        answer: "B. The project has earned 1 point with the credit."
    },
    {
        question: "Which project site is more likely to achieve LT Credit-Bicycle Facilities?",
        options: [
            "A. A site adjacent to an existing 12-mile (20 km) biking trail.",
            "B. A site within a ½-mile (400 m) walking distance of a bicycle network that connects to a light rail station within a 1-mile (1600 m) bicycling distance.",
            "C. A site adjacent to a street with sidewalks and a 30 mph speed limit.",
            "D. A site within a 3-mile (4800 m) bicycling distance to 10 diverse uses on a bicycle network."
        ],
        answer: "B. A site within a ½-mile (400 m) walking distance of a bicycle network that connects to a light rail station within a 1-mile (1600 m) bicycling distance."
    },
    {
        question: "How should a project team document a bicycle network?",
        options: [
            "A. By the area plan or map showing the project site and location of existing and planned bicycle networks within a ¼-mile (400 m) radius of the project site.",
            "B. By including a vicinity map showing the bicycle network, route, and distance along the network to eligible destinations.",
            "C. By creating a map showing the project, project boundary, transit stop locations, and walking routes and distances.",
            "D. By drawing a straight-line radius from the origin and the bicycling segments in the radius."
        ],
        answer: "A. By the area plan or map showing the project site and location of existing and planned bicycle networks within a ¼-mile (400 m) radius of the project site."
    },
    {
        question: "A 100-unit residential building in an urban area has 300 residents, 60 peak visitors, and no employees. How many long-term and short-term bicycle storage spaces would be required to achieve LT Credit Bicycle Facilities?",
        options: [
            "A. 30 long-term storage spaces and 2 short-term storage spaces.",
            "B. 90 long-term storage spaces and 4 short-term storage spaces.",
            "C. 100 long-term storage spaces and 1 short-term storage space.",
            "D. 100 long-term storage spaces and 4 short-term storage spaces."
        ],
        answer: "D. 100 long-term storage spaces and 4 short-term storage spaces."
    },
    {
        question: "A design team is locating short-term and long-term bicycle storage on a site plan. Which one of the following is correct?",
        options: [
            "A. Short-term bicycle storage should be within 100 ft (30 m) walking distance of any functional entry.",
            "B. Long-term bicycle storage must be within 100 ft (30 m) walking distance of any functional entry.",
            "C. Both short-term and long-term storage should be located within 100 ft (30 m) walking distance of the bicycle network.",
            "D. The storage can be off site."
        ],
        answer: "A. Short-term bicycle storage should be within 100 ft (30 m) walking distance of any functional entry."
    },
    {
        question: "A university housing project with 100 full-time equivalent (FTE) employees and 50 daily visitors. The parking lot will have 50 employee parking spaces and 10 visitor parking spaces. How many spaces, and of what type, are needed for LT Credit-Green Vehicles?",
        options: [
            "A. 2 preferred parking spaces and 1 alternative-fuel fueling station space.",
            "B. 3 preferred parking spaces and 2 alternative-fuel fueling station spaces.",
            "C. 3 spaces for preferred parking, 2 of which also have alternative-fuel fueling stations.",
            "D. 5 spaces for preferred parking and 3 alternative-fuel fueling station spaces."
        ],
        answer: "C. 3 spaces for preferred parking, 2 of which also have alternative-fuel fueling stations."
    },
    {
        question: "A Retail project has 50 employee parking spaces in the rear of the building and 500 customer parking spaces in the front of the building. How should the project team distribute fueling stations for LT Credit-Green Vehicles?",
        options: [
            "A. 1 fueling station in the rear of the building only.",
            "B. 9 fueling stations in the front of the building only.",
            "C. 10 parking spaces in a general preferred parking area.",
            "D. 10 fueling stations in the front of the building and 1 fueling station in the rear of the building."
        ],
        answer: "D. 10 fueling stations in the front of the building and 1 fueling station in the rear of the building."
    }
];


// Shuffle the questions array to randomize question order.
shuffleArray(questions);

const questionContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const correctAnswersContainer = document.getElementById("correct-answers");

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill([]);

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <h3>Question ${currentQuestionIndex + 1}:</h3>
            <p>${question.question}</p>
            <ul>
                ${question.options.map((option, index) => `
                    <li>
                        <label>
                            <input type="${question.question.includes('select') ? 'checkbox' : 'radio'}" name="question-${currentQuestionIndex}" value="${option}">
                            ${option}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
    } else {
        showResults();
    }
}


// ... Rest of your code ...

function calculateScore() {
    let correctCount = 0;

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = Array.isArray(userAnswer)
            ? arraysEqual(userAnswer, question.answer)
            : userAnswer === question.answer;

        if (isCorrect) {
            correctCount++;
        }
    });

    return (correctCount / questions.length) * 100;
}

function showResults() {
    resultContainer.style.display = "block";
    const percentageScore = calculateScore().toFixed(2);
    scoreDisplay.textContent = percentageScore + "%";

    // Display correct answers with questions and user answers.
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = Array.isArray(userAnswer)
            ? arraysEqual(userAnswer, question.answer)
            : userAnswer === question.answer;

        const answerDisplay = document.createElement("div");
        answerDisplay.classList.add(isCorrect ? "correct" : "incorrect");
        answerDisplay.innerHTML = `
            <p>Question ${index + 1}:</p>
            <p>${question.question}</p>
            <p>Your Answer(s): ${Array.isArray(userAnswer) ? userAnswer.join(", ") : userAnswer}</p>
            <p>Correct Answer: ${Array.isArray(question.answer) ? question.answer.join(", ") : question.answer}</p>
        `;
        correctAnswersContainer.appendChild(answerDisplay);
    });
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}



submitButton.addEventListener("click", () => {
    const selectedOptions = document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]:checked`);
    const userAnswer = Array.from(selectedOptions).map(option => option.value);

    userAnswers[currentQuestionIndex] = userAnswer;

    currentQuestionIndex++;
    displayQuestion();
});

// Shuffle function to randomize question order.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Start the quiz.
displayQuestion();
