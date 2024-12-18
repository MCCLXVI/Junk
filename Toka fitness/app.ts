const loginButton = document.getElementById('login') as HTMLButtonElement;
const signupButton = document.getElementById('signup') as HTMLButtonElement;
const getStartedButton = document.getElementById('getStarted') as HTMLButtonElement;
const exploreContentButton = document.getElementById('exploreContent') as HTMLButtonElement;
 
const workoutPlanButton = document.getElementById('workoutPlan') as HTMLButtonElement;
const progressButton = document.getElementById('progress') as HTMLButtonElement;
const recipesButton = document.getElementById('recipes') as HTMLButtonElement;
const challengeButton = document.getElementById('challenge') as HTMLButtonElement;
 
// Event Listeners
loginButton.addEventListener('click', () => {
    alert('Redirecting to Login Page...');
    window.location.href = '/login';
});
 
signupButton.addEventListener('click', () => {
    alert('Redirecting to Sign Up Page...');
    window.location.href = '/signup';
});
 
getStartedButton.addEventListener('click', () => {
    alert('Let’s start creating your workout plan!');
    window.location.href = '/get-started';
});
 
exploreContentButton.addEventListener('click', () => {
    alert('Redirecting to Explore Content...');
    window.location.href = '/content';
});
 
workoutPlanButton.addEventListener('click', () => {
    alert('Redirecting to Create Workout Plan...');
    window.location.href = '/workout-plan';
});
 
progressButton.addEventListener('click', () => {
    alert('Viewing your progress...');
    window.location.href = '/progress';
});
 
recipesButton.addEventListener('click', () => {
    alert('Redirecting to Browse Recipes...');
    window.location.href = '/recipes';
});
 
challengeButton.addEventListener('click', () => {
    alert('Redirecting to Challenges...');
    window.location.href = '/challenges';
});
